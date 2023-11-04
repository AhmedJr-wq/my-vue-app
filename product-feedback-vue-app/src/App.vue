<template>
    <div>
        <router-view />
    </div>
</template>

<script setup>
import {onMounted} from "vue";
import store from "./store/index.js";

onMounted(() => {
    store.dispatch('getFeedbackList')
})

</script>



