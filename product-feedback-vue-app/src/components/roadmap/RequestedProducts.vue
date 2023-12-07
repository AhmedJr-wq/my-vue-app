<template>
    <div>
        <div class="mb-8 mt-12">
            <h3 class="text-[#3A4374] text-lg font-bold">{{ productRequestName }} ({{ productRequests.length }})</h3>
            <p class="text-[#647196] text-base font-normal">{{ productRequestDescription }}</p>
        </div>
        <ul class="flex flex-col gap-y-[30px]">
            <ComponentBox
                v-for="item in filteredProductRequests"
                :key="item._id"
                :id="item._id"
                :title="item.title"
                :description="item.description"
                :upvotes="item.upvotes"
                :category="item.category.charAt(0).toUpperCase() + item.category.slice(1)"
                :comments="item.comments.length"
                :status="item.status"
            />
        </ul>
    </div>
</template>

<script setup>
import ComponentBox from "./ComponentBox.vue";
import {computed} from "vue";

const props = defineProps(['productRequestName', 'productRequestDescription', 'productRequests'])

const filteredProductRequests = computed(() => {
    return props.productRequests.filter(item => item.status !== 'suggestion');
})

</script>