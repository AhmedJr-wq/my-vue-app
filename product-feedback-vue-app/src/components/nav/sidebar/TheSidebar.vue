<template>
    <div class="w-[255px] h-[529px] flex flex-col gap-6">
        <SidebarTitle />
        <SidebarTags />
        <SidebarRoadmap />
    </div>
</template>
<script>
import SidebarTitle from "./SidebarTitle.vue";
import SidebarTags from "./SidebarTags.vue";
import SidebarRoadmap from "./SidebarRoadmap.vue";

export default {
    components: {
        SidebarTitle,
        SidebarTags,
        SidebarRoadmap,
    }

}
</script>