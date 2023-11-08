<template>
    <div
        class="max-w-[825px] h-[151px] rounded-[10px] bg-white flex justify-center items-center hover:cursor-pointer">
        <div class="w-full max-w-[761px] h-[95px] mx-[32px] my-[28px] flex justify-between items-center">
            <div class="h-[95px] flex gap-10">
                <div class="w-10 h-[53px] rounded-[10px] bg-[#F2F4FF] flex flex-col justify-center items-center">
                    <span><img src="../../../assets/upvote.png" alt="upvote"></span>
                    <span class="text-[13px] text-[#3A4374] font-bold mt-2">{{ upvotes }}</span>
                </div>
                <router-link :to="getFeedbackDetailLink( id )" class="flex flex-col">
                    <span class="text-[18px] text-[#3A4374] font-bold hover:text-[#4661E6]">{{ title }}</span>
                    <span class="text-base text-[#647196] font-normal mb-3">{{ description }}</span>
                    <span>
                        <suggestions-tags :title="category"></suggestions-tags>
                    </span>
                </router-link>
            </div>
            <div class="w-11 h-[23px] flex justify-around items-center">
                <img src="../../../assets/icon-comments.png" alt="icon-comments">
                <span class="text-base font-bold text-[#3A4374]">{{ comments }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, defineProps} from "vue";

const props = defineProps({
    id: String,
    title: String,
    description: String,
    upvotes: Number,
    comments: Number,
    category: String
});

//passing the suggestion id to view details of the suggestion
const getFeedbackDetailLink = computed( () => (id) => {
    return `/feedback-detail/${id}`;
})

</script>