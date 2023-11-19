<template>
    <div class="mt-10 w-full">
        <label class="flex flex-col ">
            <span class="text-sm text-[#3A4374] font-bold">Feedback Title</span>
            <span class="text-sm text-[#647196] font-normal">Add a short, descriptive headline</span>
        </label>
        <input
            v-model="data.title.value"
            type="text"
            class="w-full bg-[#F7F8FD] text-[15px] font-normal rounded-[5px] mt-4 px-6 py-[13px]
                    hover:border-[#4661E6] hover:cursor-pointer hover:ring-1 hover:ring-[#4661E6] focus:outline-none
                    focus:border-[#4661E6] focus:ring-1 focus:ring-[#4661E6] text-[#4661E6]"
            :class="{ invalid: data.title.isTitleError }"
            @input="$emit('validate')"
        >
        <span class="text-sm text-[#D73737] font-normal" v-if="data.title.isTitleError">Can't be empty</span>
    </div>
</template>

<script setup>
const props = defineProps(['data'])
</script>

<style scoped>
.invalid {
    border: 1px solid red;
}
</style>
