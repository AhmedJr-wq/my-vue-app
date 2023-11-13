<template>
    <div class="w-1/2 max-w-[540px] mt-24 mb-[187px] mx-auto">
        <GoBackButton :goBack="goBack" />
        <form class="relative mt-[64px] bg-white w-full rounded-[10px]" :class="formClass" @submit.prevent="postFeedback">
            <span class="absolute -top-7 left-[42px]">
                <img :src="imageSource" alt="feedback">
            </span>
            <div class="relative top-[52px] px-[42px]">
                <span class="text-2xl text-[#3A4374] font-bold">{{ title }}</span>
                <FeedbackTitle
                    :reset-title="resetTitleForm"
                    :display-error="displayError"
                    :isFeedbackTitleEmpty="isFeedbackTitleEmpty"
                    :title="title"
                />
                <FeedbackCategory />
                <FeedbackStatus v-if="type === 'Edit'"/>
                <FeedbackDetails
                    :reset-detail="resetDetailForm"
                    :display-error="displayError"
                    :isFeedbackDetailEmpty="isFeedbackDetailEmpty"
                    :feedbackDetail="feedbackDetail"
                />
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
import GoBackButton from "../components/UI/GoBackButton.vue";
import {computed, ref} from 'vue';
import FeedbackStatus from "../components/feedbacks/addFeedback/FeedbackStatus.vue";
import createImage from '../assets/create.png';
import editImage from '../assets/edit.png';
import BaseButton from "../components/UI/BaseButton.vue";
import store from "../store/index.js";
import FeedbackDetails from "../components/feedbacks/addFeedback/FeedbackDetails.vue";


const feedbackTitle = ref('');
const feedbackDetail = ref('');
const isFeedbackTitleEmpty = ref(false);
const isFeedbackDetailEmpty = ref(false);
const displayError = ref('');

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

const resetTitleForm = () => {
    isFeedbackTitleEmpty.value = false;
    displayError.value = '';
}

const resetDetailForm = () => {
    isFeedbackDetailEmpty.value = false;
    displayError.value = '';
}

const postFeedback = () => {
    if (!feedbackTitle.value.trim()) {
        isFeedbackTitleEmpty.value = true;
        displayError.value = "Can't be empty";
    } else if (!feedbackDetail.value.trim()) {
        isFeedbackDetailEmpty.value = true;
        displayError.value = "Can't be empty";
    } else {
        console.log(feedbackTitle.value, feedbackDetail.value);
        feedbackTitle.value = '';
        feedbackDetail.value = '';
        displayError.value = '';
    }
}

</script>