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
import {computed, onBeforeMount, reactive, ref, watch} from 'vue';
import FeedbackStatus from "../components/feedbacks/addFeedback/FeedbackStatus.vue";
import createImage from '../assets/create.png';
import editImage from '../assets/edit.png';
import BaseButton from "../components/UI/BaseButton.vue";
import FeedbackDetails from "../components/feedbacks/addFeedback/FeedbackDetails.vue";
import {useStore} from "vuex";

const props = defineProps({
    type: {
        type: String,
        required: true
    }
})

const store = useStore();

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

// watch(data, newval => {
//     console.log(data, "::::::data")
// })

const dataType = computed(() => props.type)

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
    data.title.isTitleError = data.title.value === '';
}

const setDescriptionError = () => {
    data.description.isDescriptionError = data.description.value === '';
}

// const updateCategory = (selectedOption) => {
//     data.category.value = selectedOption
// }
//
// const updateStatus = (selectedOption) => {
//     data.status.value = selectedOption
// }

const validateForm = () => {
    let isValid = true;

    // Check for title and description errors
    if (data.title.value === '') {
        setTitleError();
        isValid = false;
    }
    if (data.description.value === '') {
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
        const newFeedback = {
            title: data.title.value,
            category: data.category.value,
            status: data.status.value || 'Suggestion',
            description: data.description.value,
            upvotes: data.upvotes.value,
        }
        data.title.value = ''
        data.description.value = ''
        data.category.value = 'Feature'
        console.log('newFeedback', newFeedback)
        return store.dispatch('postFeedback', newFeedback)
    }
}

const editFeedback = () => {
    const updatedFeedback = {
        title: data.title.value,
        category: data.category.value,
        status: data.status.value,
        description: data.description.value
    }
    console.log('updated', updatedFeedback)
    return store.dispatch('editFeedback',  { _id: feedbackById.value._id, updatedFeedback })
}

const deleteFeedback = () => {
    return store.dispatch('deleteFeedback', feedbackById.value._id)
}

const submitForm = () => {
     dataType.value === 'Edit' ? editFeedback() : postFeedback()
}

</script>