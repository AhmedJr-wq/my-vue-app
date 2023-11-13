<template>
    <div class="mt-10 w-full">
        <label class="flex flex-col ">
            <span class="text-sm text-[#3A4374] font-bold">Feedback Title</span>
            <span class="text-sm text-[#647196] font-normal">Add a short, descriptive headline</span>
        </label>
        <input
            type="text"
            class="w-full bg-[#F7F8FD] text-[15px] font-normal rounded-[5px] mt-4 px-6 py-[13px]
                    hover:border-[#4661E6] hover:cursor-pointer hover:ring-1 hover:ring-[#4661E6] focus:outline-none
                    focus:border-[#4661E6] focus:ring-1 focus:ring-[#4661E6] text-[#4661E6]"
            :class="{ invalid: isFeedbackTitleEmpty }"
            @input="resetTitleForm"
        >
        <span class="text-sm text-[#D73737] font-normal">{{ displayError }}</span>
    </div>
</template>

<script setup>

const {props} = defineProps(['resetTitleForm', 'isFeedbackTitleEmpty', 'displayError'])

</script>

<style scoped>
.invalid {
    border: 1px solid #D73737;
}
</style>