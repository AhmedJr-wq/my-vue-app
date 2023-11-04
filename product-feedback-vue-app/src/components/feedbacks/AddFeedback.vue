<template>
    <div class="w-1/2 max-w-[540px] mt-24 mb-[187px] mx-auto">
        <GoBackButton :goBack="goBack" />
        <form class="relative mt-[64px] bg-white w-full h-[657px] rounded-[10px]">
            <span class="absolute -top-7 left-[42px]"><img src="../../assets/create.png" alt="create"></span>
            <div class="relative top-[52px] px-[42px]">
                <span class="text-2xl text-[#3A4374] font-bold">{{ feedbackType }}</span>
                <FeedbackTitle />
                <FeedbackCategory />
                <Details />
            </div>
            <span class="relative float-right top-[70px] right-10 flex gap-x-4">
                <router-link to="/">
                    <base-button btnText="Cancel" intent="secondary"></base-button>
                </router-link>
                <base-button btnText="Add Feedback" intent="primary"></base-button>
            </span>
        </form>
    </div>
</template>

<script setup lang="js">
    import FeedbackTitle from "./addFeedback/FeedbackTitle.vue";
    import FeedbackCategory from "./addFeedback/FeedbackCategory.vue";
    import Details from "./addFeedback/FeedbackDetails.vue";
    import GoBackButton from "../UI/GoBackButton.vue";
    import { ref, computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const feedbackType = computed(() => {
        if (store.state.feedbackType === 'Create New Feedback') {
            return 'Create New Feedback';
        } else {
            return 'Edit Feedback';
        }
    });

    const goBack = () => {
        window.history.back();
    }
</script>