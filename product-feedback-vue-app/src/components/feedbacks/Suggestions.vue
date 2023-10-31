<template>
    <div class="max-w-[825px] h-[151px] rounded-[10px] bg-white flex justify-center items-center hover:cursor-pointer">
        <div class="w-full max-w-[761px] h-[95px] mx-[32px] my-[28px] bg-green-400 flex justify-between items-center">
            <div class="h-[95px] flex gap-10">
                <div class="w-10 h-[53px] rounded-[10px] bg-[#F2F4FF] flex flex-col justify-center items-center">
                    <span><img src="../../assets/upvote.png" alt="upvote"></span>
                    <span class="text-[13px] text-[#3A4374] font-bold mt-2">00</span>
                </div>
                <router-link to="/feedback-detail/:id" class="flex flex-col">
                    <span class="text-[18px] text-[#3A4374] font-bold hover:text-[#4661E6]">Allow image/video upload to feedback</span>
                    <span class="text-base text-[#647196] font-normal mb-3">Images and screencast can enhance comments on solutions.</span>
<!--                    <span>-->
<!--                        <Tags title="Enhancement" />-->
<!--                    </span>-->
                </router-link>
            </div>
            <div class="w-11 h-[23px] flex justify-around items-center">
                <img src="../../assets/icon-comments.png" alt="icon-comments">
                <span class="text-base font-bold text-[#3A4374]">0</span>
            </div>
        </div>
    </div>
</template>
<script>
import Tags from "../nav/sidebar/Tags.vue";
export default {

}


</script>