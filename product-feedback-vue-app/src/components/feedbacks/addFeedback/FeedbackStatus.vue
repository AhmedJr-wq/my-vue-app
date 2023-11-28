<template>
    <div class="relative mt-6 w-full">
        <label class="flex flex-col ">
            <span class="text-sm text-[#3A4374] font-bold">Update Status</span>
            <span class="text-sm text-[#647196] font-normal">Change feature status</span>
        </label>
        <div type="text" class="w-full bg-[#F7F8FD] text-[15px] font-normal rounded-[5px] mt-4 px-6 py-[13px]  text-[#4661E6] flex justify-between items-center cursor-pointer hover:border-[#4661E6] hover:ring-1 hover:ring-[#4661E6]"
             @click="openMenu"
        >
            {{ data.status.value }}
            <span v-html="arrowIcon"></span>
        </div>
        <div v-if="isMenuOpen" class="absolute top-28 w-full border bg-white shadow-md rounded-[10px] flex flex-col z-10">
            <div class="options"  @click="selectedOption('Suggestion')">
                <span class="option category">Suggestion</span>
                <img class="check" v-if="option === 'Suggestion'" src="../../../assets/check.png" alt="check">
            </div>
            <div class="options" @click="selectedOption('Planned')">
                <span class="option category">Planned</span>
                <img class="check" v-if="option === 'Planned'" src="../../../assets/check.png" alt="check">
            </div>
            <div class="options" @click="selectedOption('In-progress')">
                <span class="option category">In-progress</span>
                <img class="check" v-if="option === 'In-progress'" src="../../../assets/check.png" alt="check">
            </div>
            <div class="options" @click="selectedOption('Live')">
                <span class="option category">Live</span>
                <img class="check" v-if="option === 'Live'" src="../../../assets/check.png" alt="check">
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'

const props = defineProps(['data'])
const emit = defineEmits(['option-selected'])

const isMenuOpen = ref(false),
 option = ref('Suggestion')


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
