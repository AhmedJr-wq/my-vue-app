<template>
    <form class="w-full bg-white rounded-[10px] mt-6 py-6 px-[34px]" @submit.prevent="postComment">
        <span class="text-lg text-[#3A4374] font-bold">Add Comment</span>
        <textarea
            v-model="comment"
            type="text"
            placeholder="Type your comment here"
            maxlength="250"
            class="w-full h-20 bg-[#F7F8FD] text-[15px] font-normal rounded-[5px] mt-4 px-6 py-[13px] border-none hover:border-[#4661E6]
             hover:cursor-pointer hover:ring-1 hover:ring-[#4661E6] focus:outline-none focus:border-[#4661E6] focus:ring-1 focus:ring-[#4661E6] text-[#4661E6]"
            :class="{invalid: isCommentEmpty}"
            @input="resetValidation"
        />
        <span class="text-[#D73737] text-sm font-normal">{{ displayError }}</span>
        <div class="w-full flex justify-between items-center mt-4">
            <span class="text-[13px] text-[#647196] font-normal">{{ remainingCharacters }} characters left</span>
            <base-button btnText="Post Comment" intent="primary"></base-button>
        </div>
    </form>
</template>

<script setup>
import BaseButton from "../UI/BaseButton.vue";
import {computed, ref} from "vue";

const comment = ref('');
const isCommentEmpty = ref(false);
const displayError = ref('')

//function to reset validation
const resetValidation = () => {
    isCommentEmpty.value = false;
    displayError.value = '';
};

//function to post comment
const postComment = () => {
    if (!comment.value.trim()) {
        isCommentEmpty.value = true;
        displayError.value = "Comment is empty";
    } else {
        comment.value = '';
        displayError.value = '';
    }
}

// Calculate remaining characters for comment field
const remainingCharacters = computed(() =>  250 - comment.value.length)

</script>

<style scoped>
.invalid {
    border: 1px solid #D73737;
}
</style>