<template>
    <div class="w-1/2 max-w-[540px] mt-24 mb-[187px] mx-auto">
        <GoBackButton :goBack="goBack" />
        <form class="relative mt-[64px] bg-white w-full rounded-[10px]" :class="formClass"
              @submit.prevent="submitForm"
        >
            <span class="absolute -top-7 left-[42px]">
                <img :src="imageSource" alt="feedback">
            </span>
            <div class="relative top-[52px] px-[42px]">
                <span class="text-2xl text-[#3A4374] font-bold">{{ title }}</span>
                <FeedbackTitle
                    :data="data"
                    :type="type"
                    @update-title="handleUpdateFormData"
                />
                <FeedbackCategory
                    :data="data"
                    :type="type"
                    @option-selected="handleUpdateFormData"
                />
                <FeedbackStatus
                    v-if="type === 'Edit'"
                    :data="data"
                    :type="type"
                    @option-selected="handleUpdateFormData"
                />
                <FeedbackDetails
                    :data="data"
                    :type="type"
                    @update-description="handleUpdateFormData"
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
                    <base-button :btnText="displayText" intent="primary" />
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="js">
import FeedbackTitle from "../components/feedbacks/addFeedback/FeedbackTitle.vue";
import FeedbackCategory from "../components/feedbacks/addFeedback/FeedbackCategory.vue";
import GoBackButton from "../components/UI/GoBackButton.vue";
import {computed, onBeforeMount, reactive, ref} from 'vue';
import FeedbackStatus from "../components/feedbacks/addFeedback/FeedbackStatus.vue";
import createImage from '../assets/create.png';
import editImage from '../assets/edit.png';
import BaseButton from "../components/UI/BaseButton.vue";
import FeedbackDetails from "../components/feedbacks/addFeedback/FeedbackDetails.vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import Alert from "../components/UI/Alert.vue";

const props = defineProps({
    type: {
        type: String,
        required: true
    }
})

const store = useStore();
const router = useRouter();

const data = reactive({
    title: {
        value: '',
        isTitleError: false,
        updateTitleError: false
    },
    category: { value: 'Feature'},
    status: { value: ''},
    description: {
        value: '',
        isDescriptionError: false,
        updateDescriptionError: false
    },
    upvotes: { value: 0 },
})

//function to handle form data
const handleUpdateFormData = (value, type) => {
    switch (type) {
        case 'title':
            data.title.value = value
            break;
        case 'category':
            data.category.value = value
            break;
        case 'status':
            data.status.value = value
            break;
        case 'description':
            data.description.value = value
            break;
    }
}

const dataType = computed(() => props.type)

//fetching the feedback by id from the store before component is mounted
onBeforeMount(() => {
    if (dataType.value === 'Edit') {
        data.title.value = store.getters.getFeedbackTitle
        data.category.value = store.getters.getFeedbackCategory
        data.status.value = store.getters.getFeedbackStatus
        data.description.value = store.getters.getFeedbackDescription
    }
})

//fetching the feedback by id from the store
const feedbackById = computed(() => {
    return store.getters.getFeedbackById
})

const goBack = () => {
    window.history.back();
}

//set form image
const imageSource = computed(() => {
    return dataType.value === 'Edit' ? editImage : createImage
})

//set form title
const title = computed(() => {
    if (dataType.value === 'Edit' && feedbackById.value) {
        return `Editing '${feedbackById.value.title}'`;
    } else {
        return 'Create New Feedback';
    }
});

//change submit button text
const displayText = computed(() => {
    return dataType.value === 'Edit' ? 'Save Changes' : 'Add Feedback';
})

//set form height
const formClass = computed(() => {
    return dataType.value === 'Edit' ? 'h-[800px]' : 'h-[657px]'
})

//function to set title error
const setTitleError = () => {
    data.title.isTitleError = data.title.value === '';
}

//function to set description error
const setDescriptionError = () => {
    data.description.isDescriptionError = data.description.value === '';
}

//function to set updated title error
const setUpdateTitleError = () => {
    data.title.updateTitleError = data.title.value === '';
}

//function to set updated description error
const setUpdateDescriptionError = () => {
    data.description.updateDescriptionError = data.description.value === '';
}

//function to reset form
const resetForm = () => {
    data.title.value = ''
    data.description.value = ''
    data.category.value = 'Feature'
}

//function to validate form
const validateForm = () => {
    let isValid = true;

    // Check for title and description errors
    if (data.title.value === '') {
        if(dataType.value === 'Edit') {
            setUpdateTitleError();
        }
        setTitleError();
        isValid = false;
    }
    if (data.description.value === '') {
        if(dataType.value === 'Edit') {
            setUpdateDescriptionError();
        }
        setDescriptionError();
        isValid = false;
    }

    return isValid;
}

//function to post feedback
const postFeedback = () => {
    const isFormValid = validateForm()

    if(!isFormValid) {
        return false;
    } else {
        const newFeedback = {
            title: data.title.value,
            category: data.category.value,
            status: data.status.value || 'Suggestion',
            description: data.description.value,
            upvotes: data.upvotes.value,
        }
        resetForm()
         store.dispatch('postFeedback', newFeedback)
         router.push({ name: 'Home' })
         displayAlert.value = true
    }
}

//function to edit feedback
const editFeedback = () => {
    const isFormValid = validateForm()

    if (!isFormValid) {
        return false
    } else {
        const updatedFeedback = {
            title: data.title.value,
            category: data.category.value,
            status: data.status.value,
            description: data.description.value
        }
        store.dispatch('editFeedback',  { _id: feedbackById.value._id, updatedFeedback })
        router.push({ name: 'Home' })
    }
}

//function to delete feedback
const deleteFeedback = () => {
     store.dispatch('deleteFeedback', feedbackById.value._id)
     resetForm()
     router.push({ name: 'Home' })
}

//function to submit form based on data type
const submitForm = () => {
     dataType.value === 'Edit' ? editFeedback() : postFeedback()
}

</script>