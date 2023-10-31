<template>
    <div class= "w-[825px] h-[72px] bg-[#373F68] rounded-[10px] flex items-center justify-between pl-6 pr-3">
        <div class=" flex gap-[38px] items-center">
            <div class="flex items-center gap-2">
                <img src="../../assets/bulb.png" alt="bulb">
                <span class="text-lg text-white font-bold">0 Suggestions</span>
            </div>
            <div class="hover:cursor-pointer">
                <div class="text-sm text-[#F2F4FE] w-full min-w-[160px] flex items-center" @click="openMenu">
                    Sort by : <b class="ml-1">{{ option }}</b>
                    <span v-html="arrowIcon" class="mt-1 ml-2"></span>
                </div>
                <div v-if="isMenuOpen" class="absolute top-[180px] w-[255px] border bg-white shadow-md rounded-[10px] flex flex-col z-10">
                    <div class="options">
                        <span class="option" @click="selectedOption('Most upvotes')">Most upvotes</span>
                        <img class="check" v-if="option === 'Most upvotes'" src="../../assets/check.png" alt="check">                    </div>
                    <div class="options">
                        <span class="option" @click="selectedOption('Least upvotes')">Least upvotes</span>
                        <img class="check" v-if="option === 'Least upvotes'" src="../../assets/check.png" alt="check">
                    </div>
                    <div class="options">
                        <span class="option" @click="selectedOption('Most comments')">Most comments</span>
                        <img class="check" v-if="option === 'Most comments'" src="../../assets/check.png" alt="check">
                    </div>
                    <div class="options">
                        <span class="option" @click="selectedOption('Least comments')">Least comments</span>
                        <img class="check" v-if="option === 'Least comments'" src="../../assets/check.png" alt="check">
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/add-feedback" >
            <base-button>Add Feedback</base-button>
        </router-link>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isMenuOpen: false,
            option: 'Most upvotes'
        }
    },
    computed: {
        arrowIcon() {
            const arrowUp = `<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6l4-4 4 4" stroke="white" stroke-width="2" fill="none" fill-rule="evenodd" />
                             </svg>`;
            const arrowDown = `<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 1l4 4 4-4" stroke="white" stroke-width="2" fill="none" fill-rule="evenodd" />
                               </svg>`;

            return this.isMenuOpen ? arrowUp : arrowDown;
        }
    },
    methods: {
        openMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        selectedOption(option) {
            this.option = option
            this.isMenuOpen = false
        }
    }

}
</script>