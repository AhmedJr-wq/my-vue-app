<template>
    <div class="max-w-[825px] h-[600px] rounded-[10px] bg-white flex justify-center items-center">
        <div class="max-w-[410px] h-[379px] flex flex-col items-center">
            <span><img src="../../../assets/empty.png" alt="empty"></span>
            <div class="mt-14 flex flex-col">
                <span class="text-[#3A4374] text-2xl font-bold text-center">There is no feedback yet.</span>
                <p class="text-[#647196] text-md font-normal text-center mt-4">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            </div>
            <router-link to="/add-feedback">
                <base-button class="mt-12">Add Feedback</base-button>
            </router-link>
        </div>
    </div>
</template>