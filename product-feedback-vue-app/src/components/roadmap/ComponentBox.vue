<template>
    <div
        class="max-w-[350px] h-[272px] rounded-[5px] bg-white p-8 border-t-[5px]"
        :class="containerClass(status)"
    >
        <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full" :class="statusColor"></span>
            <p class="text-[#647196] text-base font-normal">Planned</p>
        </div>

        <div class="mt-2">
            <h3 class="text-[#3A4374] text-lg font-bold">More comprehensive reports</h3>
            <p class="text-[#647196] text-base font-normal mb-4">It would be great to see a more detailed breakdown of solutions.</p>
            <suggestions-tags title="Hello"></suggestions-tags>
            <div class="flex justify-between items-center bg-green-300 mt-4">
                <div class="w-[69px] h-10 rounded-[10px] bg-[#F2F4FF] flex justify-center items-center gap-2">
                    <span><img src="../../assets/upvote.png" alt="upvote"></span>
                    <span class="text-[13px] text-[#3A4374] font-bold">123</span>
                </div>
                <div class="w-11 h-[23px] flex justify-around items-center">
                    <img src="../../assets/icon-comments.png" alt="icon-comments">
                    <span class="text-base font-bold text-[#3A4374]">12</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {computed} from "vue";
import SuggestionsTags from "../feedbacks/suggestions/SuggestionsTags.vue";

const props = defineProps(['id', 'title', 'description', 'status', 'category', 'upvotes', 'comments', 'type'])

const containerClass = computed(() => (statusType) => {
    if (statusType === 'planned') {
        return 'border-t-[#F49F85]'
    } else if (statusType === 'in-Progress') {
        return 'border-t-[#AD1FEA]'
    } else {
        return 'border-t-[#62BCFA]'
    }
})

const statusColor = computed(() => {
    if (props.status === 'planned') {
        return 'bg-[#F49F85]'
    } else if (props.status === 'in-Progress') {
        return 'bg-[#AD1FEA]'
    } else {
        return 'bg-[#62BCFA]'
    }
})
</script>