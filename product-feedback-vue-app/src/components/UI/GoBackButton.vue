<template>
    <div>
        <button class="flex items-center hover:underline hover:underline-offset-2" @click="goBack">
            <span><img src="../../assets/back.png" alt="back"></span>
            <span class="text-sm text-[#647196] font-bold ml-3">Go Back</span>
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