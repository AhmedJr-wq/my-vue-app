<template>
    <div class="w-1/2 max-w-[540px] mt-24 mb-[187px] mx-auto">
        <GoBackButton :goBack="goBack" />
        <form class="relative mt-[64px] bg-white w-full rounded-[10px]" :class="formClass">
            <span class="absolute -top-7 left-[42px]">
                <img :src="imageSource" alt="feedback">
            </span>
            <div class="relative top-[52px] px-[42px]">
                <span class="text-2xl text-[#3A4374] font-bold">{{ title }}</span>
                <FeedbackTitle />
                <FeedbackCategory />
                <FeedbackStatus v-if="type === 'Edit'"/>
                <Details />
            </div>
            <div class="px-[42px] flex justify-between items-center">
                <span class="relative float-left top-[70px]"><base-button v-if="type === 'Edit'" btnText="Delete" intent="danger"></base-button></span>
                <div class="relative float-right top-[70px] flex gap-x-4 ">
                    <router-link to="/">
                        <base-button btnText="Cancel" intent="secondary"></base-button>
                    </router-link>
                    <base-button :btnText="displayText" intent="primary"></base-button>
                </div>
            </div>

        </form>
    </div>
</template>

<script setup>
import FeedbackTitle from "../components/feedbacks/addFeedback/FeedbackTitle.vue";
import FeedbackCategory from "../components/feedbacks/addFeedback/FeedbackCategory.vue";
import Details from "../components/feedbacks/addFeedback/FeedbackDetails.vue";
import GoBackButton from "../components/UI/GoBackButton.vue";
import { computed } from 'vue';
import FeedbackStatus from "../components/feedbacks/addFeedback/FeedbackStatus.vue";
import createImage from '../assets/create.png';
import editImage from '../assets/edit.png';
import BaseButton from "../components/UI/BaseButton.vue";
import store from "../store/index.js";

const props = defineProps({
    type : String
})

//fetching the feedback by id from the store
const feedbackById = computed(() => {
    return store.state.feedbackById
})

const goBack = () => {
    window.history.back();
}

const imageSource = computed(() => {
    return props.type === 'Edit' ? editImage : createImage
})

const title = computed(() => {
    if (props.type === 'Edit' && feedbackById.value) {
        return `Editting '${feedbackById.value.title}'`;
    } else {
        return 'Create New Feedback';
    }
});


const displayText = computed(() => {
    return props.type === 'Edit' ? 'Save Changes' : 'Add Feedback';
})

const formClass = computed(() => {
    return props.type === 'Edit' ? 'h-[800px]' : 'h-[657px]'
})

</script>