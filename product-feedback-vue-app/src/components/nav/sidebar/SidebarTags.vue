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
import {computed, onMounted, ref, watch} from "vue";
import {useStore} from "vuex";

const store = useStore();
const activeTag = ref("");
const selectedTag = (category) => {
    activeTag.value = category;
    store.dispatch('sortSelectedCategory', category)
}

onMounted(() => {
    activeTag.value = "All";
    store.dispatch('sortSelectedCategory')
})

const data = computed(() => {
    return store.getters.getFeedbackList
})

</script>