<template>
    <div class="w-4/5 max-w-[1110px] mx-auto mt-24 mb-[129px] flex justify-between">
        <TheSidebar />
        <div class="flex flex-col gap-6">
            <TheHeading />
<!--            <suggestions></suggestions>-->
            <EmptySuggestion />
        </div>
    </div>
</template>


<script>
import BaseButton from "./components/UI/BaseButton.vue";
import Alert from "./components/UI/Alert.vue";
import NotificationAlert from "./components/UI/NotificationAlert.vue";
import TheHeading from "./components/nav/TheHeading.vue";
import TheSidebar from "./components/nav/sidebar/TheSidebar.vue";
import Suggestions from "./components/feedbacks/Suggestions.vue";
import EmptySuggestion from "./components/feedbacks/EmptySuggestion.vue";

export default {
    components: {
        EmptySuggestion,
        Suggestions,
        TheSidebar,
        TheHeading,
        BaseButton, Alert, NotificationAlert
    },
    data() {
        return {
            loading: false,
            showAlert: false
        }
    },
    methods: {
        submit() {
            this.loading = !this.loading
            setTimeout(() => {
                this.loading = !this.loading
                this.showAlert = !this.showAlert
            }, 1000)
        },

    }
}
</script>


