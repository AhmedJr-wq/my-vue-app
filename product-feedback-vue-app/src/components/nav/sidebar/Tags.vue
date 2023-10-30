<template>
    <div :class="['h-[30px] rounded-[10px] text-[13px] font-semibold flex items-center justify-center cursor-pointer px-4 py-3',
        isActiveTag ? 'bg-[#4661E6] text-white' : 'bg-[#F2F4FF] text-[#4661E6]', isActiveTag ? 'hover:bg-[#4661E6]' : 'hover:bg-[#CFD7FF]']"
    >
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    props: ['title', 'activeTag'],
    computed: {
        isActiveTag() {
            return this.activeTag === this.title
        }
    }
}
</script>