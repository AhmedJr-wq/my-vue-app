<template>
    <div class="w-1/2 max-w-[540px] mt-24 mb-[187px] mx-auto">
        <GoBackButton :goBack="goBack" />
        <form class="relative mt-[64px] bg-white w-full rounded-[10px]" :class="formClass"
              @submit.prevent="type === 'Edit' ? editFeedback : postFeedback"
        >
            <span class="absolute -top-7 left-[42px]">
                <img :src="imageSource" alt="feedback">
            </span>
            <div class="relative top-[52px] px-[42px]">
                <span class="text-2xl text-[#3A4374] font-bold">{{ title }}</span>
                <FeedbackTitle
                    :data="data"
                    type="Edit"
                />
                <FeedbackCategory
                    :data="data"
                    @option-selected="updateCategory"
                    type="Edit"
                />
                <FeedbackStatus
                    v-if="type === 'Edit'"
                    :data="data"
                    @option-selected="updateStatus"
                    type="Edit"
                />
                <FeedbackDetails
                    :data="data"
                    type="Edit"
                />
            </div>
            <div class="px-[42px] flex justify-between items-center">
                <span class="relative float-left top-[70px]">
                    <base-button v-if="type === 'Edit'" btnText="Delete" intent="danger" @click.prevent="deleteFeedback"></base-button>
                </span>
                <div class="relative float-right top-[70px] flex gap-x-4 ">
                    <router-link to="/">
                        <base-button btnText="Cancel" intent="secondary"></base-button>
                    </router-link>
                    <base-button :btnText="displayText" intent="primary" @click.prevent="postFeedback"></base-button>
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
import FeedbackDetails from "../components/feedbacks/addFeedback/FeedbackDetails.vue";
import {useStore} from "vuex";

const props = defineProps({
    type : String
})

const store = useStore();

const data = ref({
    title: {
        value: '',
        isTitleError: false
    },
    category: { value: 'Feature'},
    status: { value: ''},
    description: {
        value: '',
        isDescriptionError: false
    }
})

//fetching the feedback by id from the store
const feedbackById = computed(() => {
    return store.getters.getFeedbackById
})

const goBack = () => {
    window.history.back();
}

const imageSource = computed(() => {
    return props.type === 'Edit' ? editImage : createImage
})

const title = computed(() => {
    if (props.type === 'Edit' && feedbackById.value) {
        return `Editing '${feedbackById.value.title}'`;
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

const setTitleError = () => {
    data.value.title.isTitleError = data.value.title.value === '';
}

const setDescriptionError = () => {
    data.value.description.isDescriptionError = data.value.description.value === '';
}


const updateCategory = (selectedOption) => {
    data.value.category.value = selectedOption
}

const updateStatus = (selectedOption) => {
    data.value.status.value = selectedOption
}

const validateForm = () => {
    let isValid = true;

    // Check for title and description errors
    if (data.value.title.value === '') {
        setTitleError();
        isValid = false;
    }
    if (data.value.description.value === '') {
        setDescriptionError();
        isValid = false;
    }

    return isValid;
}


const postFeedback = () => {
    const isFormValid = validateForm()

    if(!isFormValid) {
        return false;
    } else {
        // data.value.title.isTitleError = false
        // data.value.description.isDescriptionError = false
        const newFeedback = {
            title: data.value.title.value,
            category: data.value.category.value,
            description: data.value.description.value
        }
        // data.value.title.value = ''
        // data.value.description.value = ''
        // data.value.category.value = 'Feature'
        console.log('newFeedback', newFeedback)
        // return store.dispatch('postFeedback', newFeedback)
    }
}

const editFeedback = () => {
    console.log('edited')
    return store.dispatch('editFeedback', feedbackById.value._id)
}

const deleteFeedback = () => {
    console.log('deleted')
    return store.dispatch('deleteFeedback', feedbackById.value._id)
}

</script>