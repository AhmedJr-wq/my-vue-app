<template>
    <div class="w-[255px] h-[529px] bg-red-600 flex flex-col gap-6">
        <SidebarTitle />
        <SidebarTags />
        <SidebarRoadmap />
    </div>
</template>
<script setup>
import SidebarTitle from "./SidebarTitle.vue";
import SidebarTags from "./SidebarTags.vue";
import SidebarRoadmap from "./SidebarRoadmap.vue";
</script>