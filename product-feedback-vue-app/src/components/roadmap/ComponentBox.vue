<template>
    <div class="max-w-[350px] h-[272px] rounded-[5px] bg-white p-8 border-t-[5px] "
        :class="containerClass(status)"
    >
        <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full" :class="statusColor"></span>
            <p class="text-[#647196] text-base font-normal">{{ status }}</p>
        </div>
        <div class="mt-2">
            <h3 class="text-[#3A4374] text-lg font-bold">{{ title }}</h3>
            <p class="text-[#647196] text-base font-normal mb-4">{{ description }}</p>
            <suggestions-tags :title="category"></suggestions-tags>
            <div class="flex justify-between items-center mt-4">
                <div class="w-[69px] h-10 rounded-[10px] bg-[#F2F4FF] flex justify-center items-center gap-2">
                    <span><img src="../../assets/upvote.png" alt="upvote"></span>
                    <span class="text-[13px] text-[#3A4374] font-bold">{{ upvotes }}</span>
                </div>
                <div class="w-11 h-[23px] flex justify-around items-center">
                    <img src="../../assets/icon-comments.png" alt="icon-comments">
                    <span class="text-base font-bold text-[#3A4374]">{{ comments }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";
import SuggestionsTags from "../feedbacks/suggestions/SuggestionsTags.vue";

const props = defineProps(['id', 'title', 'description', 'status', 'category', 'upvotes', 'comments']);

const containerClass = computed(() => (statusType) => {
    if (statusType === 'planned') {
        return 'border-t-[#F49F85]'
    } else if (statusType === 'in-progress') {
        return 'border-t-[#AD1FEA]'
    } else {
        return 'border-t-[#62BCFA]'
    }
})

const statusColor = computed(() => {
    if (props.status === 'planned') {
        return 'bg-[#F49F85]'
    } else if (props.status === 'in-progress') {
        return 'bg-[#AD1FEA]'
    } else {
        return 'bg-[#62BCFA]'
    }
})
</script>