<template>
    <div v-if="activeTab === id">
        <slot></slot>
    </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps(['id'])
const activeTab = ref(props.id)
</script>