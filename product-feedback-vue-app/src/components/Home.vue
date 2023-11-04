<template>
    <div class="w-4/5 max-w-[1110px] mx-auto mt-24 mb-[129px] flex justify-between">
        <TheSidebar />
        <div class="flex flex-col gap-6">
            <TheHeading />
            <Suggestions v-if="feedbacks.length > 0"
                v-for="feedback in feedbacks"
                :key="feedback.id"
                :title="feedback.title"
                :description="feedback.description"
                :upvotes="feedback.upvotes"
                :comments="feedback.comments.length"
                :category="feedback.category.charAt(0).toUpperCase() + feedback.category.slice(1)"
            />
            <EmptySuggestion v-else />
        </div>
    </div>
</template>
<script setup>
import TheHeading from "./nav/TheHeading.vue";
import TheSidebar from "./nav/sidebar/TheSidebar.vue";
import Suggestions from "./feedbacks/suggestions/Suggestions.vue";
import EmptySuggestion from "./feedbacks/suggestions/EmptySuggestion.vue";
import {computed} from "vue";
import store from "../store/index.js";

const feedbacks = computed(() => {
    return store.state.feedbackList
})

</script>