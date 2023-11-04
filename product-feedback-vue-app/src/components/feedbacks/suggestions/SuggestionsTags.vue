<template>
    <div class="h-[30px] w-1/2 max-w-[110px] rounded-[10px] text-[13px] font-semibold flex items-center justify-center cursor-pointer px-4 py-3 bg-[#F2F4FF] text-[#4661E6]">
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>