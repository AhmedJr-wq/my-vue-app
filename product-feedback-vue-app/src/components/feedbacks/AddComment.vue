<template>
    <form class="w-full h-[246px] bg-white rounded-[10px] mt-6 py-6 px-[34px]">
        <span class="text-lg text-[#3A4374] font-bold">Add Comment</span>
        <textarea type="text" placeholder="Type your comment here" maxlength="250" class="w-full h-20 bg-[#F7F8FD] text-[15px] font-normal rounded-[5px] mt-4 px-6 py-[13px]
                    hover:border-[#4661E6] hover:cursor-pointer hover:ring-1 hover:ring-[#4661E6] focus:outline-none
                    focus:border-[#4661E6] focus:ring-1 focus:ring-[#4661E6] text-[#3A4374]" />
        <div class="w-full flex justify-between items-center mt-4">
            <span class="text-[13px] text-[#647196] font-normal">250 Characters left</span>
            <base-button btnText="Post Comment" intent="primary"></base-button>
        </div>
    </form>
</template>
<script setup>
import BaseButton from "../UI/BaseButton.vue";
</script>