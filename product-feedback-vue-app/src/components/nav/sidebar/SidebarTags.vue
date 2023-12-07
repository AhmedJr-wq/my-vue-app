<template>
    <div class="h-[166px] rounded-[10px] bg-white p-6 inline-flex gap-2 flex-wrap">
        <Tags title="All" :activeTag="activeTag" @click="selectedTag('All')" />
        <Tags title="UI" :activeTag="activeTag" @click="selectedTag('UI')" />
        <Tags title="UX" :activeTag="activeTag" @click="selectedTag('UX')" />
        <Tags title="Enhancement" :activeTag="activeTag" @click="selectedTag('Enhancement')" />
        <Tags title="Bug" :activeTag="activeTag" @click="selectedTag('Bug')" />
        <Tags title="Feature" :activeTag="activeTag" @click="selectedTag('Feature')" />
    </div>
</template>

<script setup>
import Tags from "./Tags.vue";
import {onMounted, ref} from "vue";

const activeTag = ref("");
const selectedTag = (title) => {
    activeTag.value = title;
}

onMounted(() => {
    activeTag.value = "All";
})


</script>