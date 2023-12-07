<template>
    <ul>
        <li :class="selectedTab(activeTab)" @click="activeTab = id">
            {{ title }}
        </li>
    </ul>
</template>

<script setup>

import {computed, ref} from "vue";

const props = defineProps(['id', 'title']);

const activeTab = ref(props.id);

const selectedTab = computed(() => (statusType) => {
    if (statusType === 'planned') {
        return  'border-b-[4px] border-b-[#F49F85]' || 'disabled'
    } else if (statusType === 'in-Progress') {
        return  'border-b-[4px] border-b-[#AD1FEA]' || 'disabled'
    } else {
        return  'border-b-[4px] border-b-[#62BCFA]' || 'disabled'
    }
})
</script>