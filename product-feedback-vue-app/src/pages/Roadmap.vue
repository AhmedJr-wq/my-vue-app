<template>
    <div class="max-w-[1110px] mx-auto mt-20 mb-[179px]">
        <TheHeading type="roadmap"/>
        <div class="h-[500px] bg-green-300 mt-12">
            <div class="bg-white mb-8">
                <h3 class="text-[#3A4374] text-lg font-bold">Planned (2)</h3>
                <p class="text-[#647196] text-base font-normal">Hello this is a template</p>
            </div>
            <ComponentBox />
        </div>
    </div>
</template>
<script setup>
import TheHeading from "../components/nav/TheHeading.vue";
import ComponentBox from "../components/roadmap/ComponentBox.vue";
import {computed} from "vue";
import store from "../store/index.js";

const feedbacks = computed(() => {
    return store.state.feedbackList
})
</script>