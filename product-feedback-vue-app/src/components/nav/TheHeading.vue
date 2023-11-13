<template>
    <div :class="headerClass('home')">
        <div class=" flex gap-[38px] items-center" v-if="type === 'home'">
            <div class="flex items-center gap-2">
                <img src="../../assets/bulb.png" alt="bulb">
                <span class="text-lg text-white font-bold">{{ feedbacks.length}} Suggestions</span>
            </div>
            <div class="hover:cursor-pointer">
                <button
                    class="text-sm text-[#F2F4FE] w-full min-w-[160px] flex items-center"
                    :disabled="disableSort" :class="disableSort ? 'text-gray-400 cursor-not-allowed' : ''"
                    @click="openMenu"
                >
                    Sort by : <b class="ml-1">{{ option }}</b>
                    <span v-html="arrowIcon" class="mt-1 ml-2"></span>
                </button>
                <div v-if="isMenuOpen" class="absolute top-[180px] w-[255px] border bg-white shadow-md rounded-[10px] flex flex-col z-10">
                    <div class="options" @click="selectedOption('Most upvotes')">
                        <span class="option">Most upvotes</span>
                        <img class="check" v-if="option === 'Most upvotes'" src="../../assets/check.png" alt="check">
                    </div>
                    <div class="options" @click="selectedOption('Least upvotes')">
                        <span class="option">Least upvotes</span>
                        <img class="check" v-if="option === 'Least upvotes'" src="../../assets/check.png" alt="check">
                    </div>
                    <div class="options" @click="selectedOption('Most comments')">
                        <span class="option">Most comments</span>
                        <img class="check" v-if="option === 'Most comments'" src="../../assets/check.png" alt="check">
                    </div>
                    <div class="options" @click="selectedOption('Least comments')">
                        <span class="option">Least comments</span>
                        <img class="check" v-if="option === 'Least comments'" src="../../assets/check.png" alt="check">
                    </div>
                </div>
            </div>
        </div>
        <div v-else :class="headerClass('roadmap')">
            <router-link to="/">
                <div class="flex items-center gap-3">
                    <img src="../../assets/arrowleft.png" alt="arrowleft">
                    <span class="text-sm text-white font-bold hover:underline hover:underline-offset-2">Go back</span>
                </div>
            </router-link>
            <span class="text-2xl text-white font-bold">Roadmap</span>
        </div>
        <router-link to="/add-feedback" >
            <base-button>Add Feedback</base-button>
        </router-link>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";
import store from "../../store/index.js";

const { props } = defineProps(["type"]);

const option = ref('Most upvotes')
const isMenuOpen = ref(false)

const feedbacks = computed(() => {
    return store.state.feedbackList
})

const arrowIcon = computed(() => {
    const arrowUp = `<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6l4-4 4 4" stroke="white" stroke-width="2" fill="none" fill-rule="evenodd" />
                     </svg>`;
    const arrowDown = `<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                         <path d="M1 1l4 4 4-4" stroke="white" stroke-width="2" fill="none" fill-rule="evenodd" />
                       </svg>`;

    return isMenuOpen.value ? arrowUp : arrowDown;

})

const headerClass = computed(() => (type) => {
    return type === 'home' ?
        'bg-[#373F68] rounded-[10px] flex items-center justify-between pl-6 py-3.5 pr-4' :
        'py-3'
})

const openMenu = () => {
     isMenuOpen.value = !isMenuOpen.value
}

const selectedOption = (selected) => {
    option.value = selected
    isMenuOpen.value = false
}

const disableSort = computed(() => {
    return store.state.feedbackList.length === 0
})

</script>