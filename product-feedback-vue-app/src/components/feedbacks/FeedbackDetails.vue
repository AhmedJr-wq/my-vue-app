<template>
    <div class="w-4/5 max-w-[730px] mx-auto mt-24 mb-[129px]">
        <div class="flex justify-between items-center mb-6">
            <GoBackButton :goBack="goBack"/>
            <base-button btnText="Edit Comment" intent="secondary"></base-button>
        </div>
        <Suggestions />
        <div class="w-full h-[757px] bg-white rounded-[10px] mt-6 py-6 px-[34px]">
            <span class="text-lg text-[#3A4374] font-bold">4 Comments</span>
            <div class="w-full mt-7 mb-10">
                <div class="flex items-center gap-8">
                    <img class="w-10 h-10 rounded-full bg-amber-950" src="" alt="user"/>
                    <header class="w-[90%] flex justify-between items-center">
                        <div class="flex items-center">
                            <div class="flex flex-col">
                                <span class="text-sm text-[#3A4374] font-bold">Abulfail Ahmed</span>
                                <span class="text-sm text-[#647196] font-normal">@ahmedjr</span>
                            </div>
                        </div>
                        <button @click="toggleShowReply" class="text-[13px] text-[#4661E6] font-semibold hover:underline hover:underline-offset-2 hover:cursor-pointer">Reply</button>
                    </header>
                </div>
                <p class="flex flex-wrap text-[15px] text-[#647196] font-normal mt-4 pl-[72px]">Also, please allow styles to be applied based on system preferences. I would love to be able to browse
                    Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
                </p>
                <div v-if="showReply" class="w-full inline-flex mt-6 gap-7 pl-[72px]">
                    <textarea type="text" placeholder="Type your reply here"
                              class="w-[75%] max-w-[461px] h-20 bg-[#F7F8FD] text-[15px] font-normal rounded-[5px]
                                hover:border-[#4661E6] hover:cursor-pointer hover:ring-1 hover:ring-[#4661E6] focus:outline-none
                                focus:border-[#4661E6] focus:ring-1 focus:ring-[#4661E6] text-[#4661E6] px-6 py-4" />
                    <base-button btnText="Post Reply" intent="primary"></base-button>
                </div>
            </div>
        </div>
        <div class="w-full h-[246px] bg-white rounded-[10px] mt-6 py-6 px-[34px]">
            <span class="text-lg text-[#3A4374] font-bold">Add Comment</span>
            <textarea type="text" placeholder="Type your comment here" class="w-full h-20 bg-[#F7F8FD] text-[15px] font-normal rounded-[5px] mt-4 px-6 py-[13px]
                    hover:border-[#4661E6] hover:cursor-pointer hover:ring-1 hover:ring-[#4661E6] focus:outline-none
                    focus:border-[#4661E6] focus:ring-1 focus:ring-[#4661E6] text-[#3A4374]" />
            <div class="w-full flex justify-between items-center mt-4">
                <span class="text-[13px] text-[#647196] font-normal">250 Characters left</span>
                <base-button btnText="Post Comment" intent="primary"></base-button>
            </div>

        </div>
    </div>
</template>
<script setup>
import BaseButton from "../UI/BaseButton.vue";
import GoBackButton from "../UI/GoBackButton.vue";
import { ref } from 'vue';
import Suggestions from "./suggestions/Suggestions.vue";

const props = defineProps({
    goBack: {type: Function}
})

const showReply = ref(false)

const toggleShowReply = () => {
    showReply.value = !showReply.value
}


const goBack = () => {
    window.history.back();
}
</script>