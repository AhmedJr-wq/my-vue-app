<template>
    <div class="w-4/5 max-w-[730px] mx-auto mt-24 mb-[129px]">
        <div class="flex justify-between items-center mb-6">
            <GoBackButton :goBack="goBack"/>
            <base-button btnText="Edit Comment" intent="secondary"></base-button>
        </div>
        <Suggestions
            :key="feedbackById._id"
            :id="feedbackById._id"
            :title="feedbackById.title"
            :description="feedbackById.description"
            :upvotes="feedbackById.upvotes"
            :comments="commentsCount"
            :category="category"
        />
        <div class="w-full bg-white rounded-[10px] mt-6 py-6 px-[34px]" v-if="commentsCount > 0">
            <span class="text-lg text-[#3A4374] font-bold">
              {{ commentsCount > 1 ? `${commentsCount} Comments` : `${commentsCount} Comment` }}
            </span>
            <div class="w-full mt-7 mb-10"  v-for="comment in feedbackById.comments" :key="comment._id" :id="comment._id">
                <div class="flex items-center gap-8">
                    <img class="w-10 h-10 rounded-full bg-amber-950" :src="createUserImage(comment.user.name)" :alt="createUserImage(comment.user.name)"/>
                    <header class="w-[90%] flex justify-between items-center" >
                        <div class="flex items-center">
                            <div class="flex flex-col">
                                <span class="text-sm text-[#3A4374] font-bold">{{ comment.user.name }}</span>
                                <span class="text-sm text-[#647196] font-normal">@{{ comment.user.username }}</span>
                            </div>
                        </div>
                        <button @click="toggleShowReply(comment._id)" class="text-[13px] text-[#4661E6] font-semibold hover:underline hover:underline-offset-2 hover:cursor-pointer">Reply</button>
                    </header>
                </div>
                <p class="flex flex-wrap text-[15px] text-[#647196] font-normal mt-4 pl-[72px]">
                    {{ comment.content }}
                </p>
                <div v-if="showReply[comment._id]" class="w-full inline-flex mt-6 gap-7 pl-[72px]">
                    <textarea type="text" placeholder="Type your reply here"
                              class="w-[75%] max-w-[461px] h-20 bg-[#F7F8FD] text-[15px] font-normal rounded-[5px]
                                hover:border-[#4661E6] hover:cursor-pointer hover:ring-1 hover:ring-[#4661E6] focus:outline-none
                                focus:border-[#4661E6] focus:ring-1 focus:ring-[#4661E6] text-[#4661E6] px-6 py-4" />
                    <base-button btnText="Post Reply" intent="primary"></base-button>
                </div>
            </div>
        </div>
        <NoComment v-else/>
        <AddComment />
    </div>
</template>


<script setup>
import BaseButton from "../UI/BaseButton.vue";
import GoBackButton from "../UI/GoBackButton.vue";
import {computed, onMounted, ref} from 'vue';
import Suggestions from "./suggestions/Suggestions.vue";
import store from "../../store/index.js";
import { useRoute} from "vue-router";
import NoComment from "../UI/NoComment.vue";
import AddComment from "./AddComment.vue";
import {createImageFromInitials} from "../../Utility/createImage.js";
import {getRandomColor} from "../../Utility/getRandomColor.js";


const route = useRoute();

onMounted(() => {
    store.dispatch('getFeedbackById', route.params.id)
})

const props = defineProps({
    goBack: {type: Function}
})

//fetching the feedback by id from the store
const feedbackById = computed(() => {
    return store.state.feedbackById
})

const showReply = ref({})
//function to open and close individual reply section
const toggleShowReply = (commentId) => {
    showReply.value[commentId] = !showReply.value[commentId]
}

//function to go back to initial page
const goBack = () => {
    window.history.back();
}

//check comment length
const commentsCount = computed(() => {
    const comments = feedbackById.value.comments;
    return comments ? comments.length : 0;
})

//change the first letter of the category to upper case
const category = computed(() => {
    return feedbackById.value.category ?
    feedbackById.value.category.charAt(0).toUpperCase() + feedbackById.value.category.slice(1) : '';
})

//function to create user image from user's name
const createUserImage = (userName) => {
    const color = getRandomColor();
    return createImageFromInitials(600, color, userName);
};

</script>