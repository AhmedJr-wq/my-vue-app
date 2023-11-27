<template>
    <div class="max-w-[1110px] mx-auto mt-20 mb-[179px]">
        <TheHeading type="roadmap"/>
        <nav class="block sm:hidden">
            <ul class="h-[52px]">
                <TabNavItem :title="'Planned'" />
                <TabNavItem :title="'In Progress'" />
                <TabNavItem :title="'Live'"/>
            </ul>
        </nav>
        <div class="block">
            <div class="w-full flex gap-x-[30px] gap-y-[30px]">
                <TabContent :tabId="'planned'">
                    <RequestedProducts
                        product-request-name="Planned"
                        product-request-description="Ideas prioritized for research"
                        :productRequests="store.getters.getPlannedRequestProducts"
                    />
                </TabContent>
                <TabContent :tabId="'in-progress'">
                    <RequestedProducts
                        product-request-name="In Progress"
                        product-request-description="Currently being developed"
                        :productRequests="store.getters.getInProgressRequestProducts"
                    />
                </TabContent>
                <TabContent :tabId="'live'">
                    <RequestedProducts
                        product-request-name="Live"
                        product-request-description="Released features"
                        :productRequests="store.getters.getLiveRequestProducts"
                    />
                </TabContent>
            </div>
        </div>
    </div>
</template>
<script setup>
import TheHeading from "../components/nav/TheHeading.vue";
import {onMounted} from "vue";
import TabNavItem from "../components/roadmap/tabs/TabNavItem.vue";
import TabContent from "../components/roadmap/tabs/TabContent.vue";
import RequestedProducts from "../components/roadmap/RequestedProducts.vue";
import {useStore} from "vuex";

const store = useStore();

onMounted(() => {
    store.dispatch('productsData')
})


</script>