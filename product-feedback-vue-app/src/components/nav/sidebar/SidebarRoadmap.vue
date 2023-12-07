<template>
    <div class="h-[178px] rounded-[10px] pl-6 pr-6 pt-[19px] bg-white">
        <div class="flex justify-between items-center">
            <h3 class="text-[18px] text-[#3A4374] font-bold">Roadmap</h3>
            <router-link to="/roadmap">
                <button class="text-[#4661E6] text-sm font-medium  hover:text-[#8397F8] underline decoration-solid underline-offset-2"
                        :disabled="disableView"
                        :class="disableView ? 'opacity-25 cursor-not-allowed' : 'cursor-pointer'"
                >
                    View
                </button>
            </router-link>
        </div>
        <div class='mt-6 flex justify-between'>
            <div class="flex items-center">
                <div class='w-2 h-2 rounded-full bg-[#F49F85] mr-4'></div>
                <span class='text-base text-[#647196]'>Planned</span>
            </div>
            <span class="text-base text-[#647196] font-bold">{{ plannedRequests }}</span>
        </div>
        <div class='mt-2 flex justify-between'>
            <div class="flex items-center">
                <div class='w-2 h-2 rounded-full bg-[#AD1FEA] mr-4'></div>
                <span class='text-base text-[#647196]'>In-progress</span>
            </div>
            <span class="text-base text-[#647196] font-bold">{{ inProgressRequests }}</span>
        </div>
        <div class='mt-2 flex justify-between'>
            <div class="flex items-center">
                <div class='w-2 h-2 rounded-full bg-[#62BCFA] mr-4'></div>
                <span class='text-base text-[#647196]'>Live</span>
            </div>
            <span class="text-base text-[#647196] font-bold">{{ liveRequests }}</span>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore()
const disableView = computed(() => {
    return store.getters.getFeedbackList.length === 0
})

const plannedRequests = computed(() => {
    return store.getters.getPlannedRequestProducts.length
})

const inProgressRequests = computed(() => {
    return store.getters.getInProgressRequestProducts.length
})

const liveRequests = computed(() => {
    return store.getters.getLiveRequestProducts.length
})
</script>
