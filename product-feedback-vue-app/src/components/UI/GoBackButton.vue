<template>
    <div>
        <button class="flex items-center" @click="goBack">
            <span><img src="../../assets/back.png" alt="back"></span>
            <span class="text-sm text-[#647196] font-bold ml-2">Go Back</span>
        </button>
    </div>
</template>

<script setup lang="js">
import { defineProps } from 'vue'

const props = defineProps({
    goBack: {
        type: Function,
    }
})

</script>