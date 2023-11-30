<template>
    <div class="mt-6 w-full">
        <label class="flex flex-col ">
            <span class="text-sm text-[#3A4374] font-bold">Feedback Detail</span>
            <span class="text-sm text-[#647196] font-normal">Include any specific comments on what should be improved, added, etc.</span>
        </label>
<!--        <textarea-->
<!--            v-if="type === 'Edit'"-->
<!--            v-model="description"-->
<!--            type="text"-->
<!--            class="w-full h-24 bg-[#F7F8FD] text-[15px] text-[#4661E6] font-normal rounded-[5px] mt-4 px-6 py-[13px]-->
<!--                    hover:border-[#4661E6] hover:cursor-pointer hover:ring-1 hover:ring-[#4661E6] focus:outline-none-->
<!--                    focus:border-[#4661E6] focus:ring-1 focus:ring-[#4661E6]"-->
<!--            :class="{ invalid: data.description.isDescriptionError }"-->
<!--            @input="resetError"-->
<!--        />-->
        <textarea
            v-model="data.description.value"
            type="text"
            class="w-full h-24 bg-[#F7F8FD] text-[15px] text-[#4661E6] font-normal rounded-[5px] mt-4 px-6 py-[13px]
                    hover:border-[#4661E6] hover:cursor-pointer hover:ring-1 hover:ring-[#4661E6] focus:outline-none
                    focus:border-[#4661E6] focus:ring-1 focus:ring-[#4661E6]"
            :class="{ invalid: data.description.isDescriptionError }"
            @input="resetError"
        />
        <span class="text-sm text-[#D73737] font-normal" v-if="data.description.isDescriptionError">Can't be empty</span>
    </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import {useStore} from "vuex";

const props = defineProps(['data', 'type'])
const store = useStore()

const feedbackDescription = computed(() => {
    return store.getters.getFeedbackDescription
})

const description = ref(feedbackDescription.value)

const resetError = () => {
    props.data.description.isDescriptionError = false
}

watch(feedbackDescription, (newValue) => {
    description.value = newValue;
});

</script>

<style scoped>
.invalid {
    border: 1px solid red;
}
</style>