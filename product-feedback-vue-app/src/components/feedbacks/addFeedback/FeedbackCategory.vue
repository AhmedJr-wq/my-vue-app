<template>
    <div class="relative mt-6 w-full">
        <label class="flex flex-col ">
            <span class="text-sm text-[#3A4374] font-bold">Category</span>
            <span class="text-sm text-[#647196] font-normal">Choose a category for your feedback</span>
        </label>
        <div type="text" class="w-full bg-[#F7F8FD] text-[15px] font-normal rounded-[5px] mt-4 px-6 py-[13px]  text-[#4661E6] flex justify-between items-center cursor-pointer hover:border-[#4661E6] hover:ring-1 hover:ring-[#4661E6]"
             @click="openMenu"
        >
            {{ data.category.value }}
            <span v-html="arrowIcon"></span>
        </div>
        <div v-if="isMenuOpen" class="absolute top-28 w-full border bg-white shadow-md rounded-[10px] flex flex-col z-10">
            <div class="options"  @click="selectedOption('Feature')">
                <span class="option category">Feature</span>
                <img class="check" v-if="option === 'Feature'" src="../../../assets/check.png" alt="check">
            </div>
            <div class="options" @click="selectedOption('UI')">
                <span class="option category">UI</span>
                <img class="check" v-if="option === 'UI'" src="../../../assets/check.png" alt="check">
            </div>
            <div class="options" @click="selectedOption('UX')">
                <span class="option category">UX</span>
                <img class="check" v-if="option === 'UX'" src="../../../assets/check.png" alt="check">
            </div>
            <div class="options" @click="selectedOption('Enhancement')">
                <span class="option category">Enhancement</span>
                <img class="check" v-if="option === 'Enhancement'" src="../../../assets/check.png" alt="check">
            </div>
            <div class="options" @click="selectedOption('Bug')">
                <span class="option category">Bug</span>
                <img class="check" v-if="option === 'Bug'" src="../../../assets/check.png" alt="check">
            </div>
       </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'

const props = defineProps(['data'])
const emit = defineEmits(['option-selected'])
const isMenuOpen = ref(false),
    option = ref(props.data.category.value)


const arrowIcon = computed( () => {
    const arrowUp = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                      <path d="M1 6L5 2L9 6" stroke="#4661E6" stroke-width="2"/>
                    </svg>`;
    const arrowDown = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                          <path d="M1 1L5 5L9 1" stroke="#4661E6" stroke-width="2"/>
                        </svg>`;

    return isMenuOpen.value ? arrowUp : arrowDown;
})


const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const selectedOption = (selected) => {
    option.value = selected
    isMenuOpen.value = false
    emit('option-selected', selected)
}
</script>