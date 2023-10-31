<template>
    <div class="w-4/5 max-w-[1110px] mx-auto mt-24 mb-[129px] flex justify-between">
        <TheSidebar />
        <div class="flex flex-col gap-6">
            <TheHeading />
            <suggestions></suggestions>
            <EmptySuggestion />
        </div>
    </div>
</template>
<script>
import TheHeading from "./nav/TheHeading.vue";
import TheSidebar from "./nav/sidebar/TheSidebar.vue";
import EmptySuggestion from "./feedbacks/EmptySuggestion.vue";
import Suggestions from "./feedbacks/Suggestions.vue";

export default {
    components: {
        Suggestions,
        EmptySuggestion,
        TheHeading,
        TheSidebar,
    },
}
</script>