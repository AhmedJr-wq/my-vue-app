<template>
    <div
        class="max-w-[825px] rounded-[10px] bg-white flex justify-center items-center"
    >
        <div class="w-full max-w-[761px] h-[95px] mx-[32px] my-[28px] flex justify-between items-center">
            <div class="h-[95px] flex gap-10">
                <div class="w-10 h-[53px] rounded-[10px] bg-[#F2F4FF] flex flex-col justify-center items-center">
                    <span><img src="../../../assets/upvote.png" alt="upvote"></span>
                    <span class="text-[13px] text-[#3A4374] font-bold mt-2">{{ upvotes }}</span>
                </div>
                <div class="flex flex-col justify-center">
                    <router-link :to="getFeedbackDetailLink( id )">
                        <span class="text-[18px] text-[#3A4374] font-bold" :class="suggestionDetailClass">{{ title }}</span>
                    </router-link>
                    <span class="text-base text-[#647196] font-normal mb-3">{{ description }}</span>
                    <span>
                        <suggestions-tags :title="category"></suggestions-tags>
                    </span>
                </div>
            </div>
            <div class="w-11 h-[23px] flex justify-around items-center">
                <img src="../../../assets/icon-comments.png" alt="icon-comments">
                <span class="text-base font-bold text-[#3A4374]">{{ comments }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";


const props = defineProps({
    id: String,
    title: String,
    description: String,
    upvotes: Number,
    comments: Number,
    category: String,
    type: String
});

const suggestionDetailClass = computed(() => {
    return props.type === 'home'
        ? 'hover:text-[#4661E6] cursor-pointer'
        : '';
});

//passing the suggestion id to view details of the suggestion
const getFeedbackDetailLink = computed( () => (id) => {
    return `/feedback-detail/${id}`;
})

</script>