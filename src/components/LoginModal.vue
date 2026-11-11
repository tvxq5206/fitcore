<template>
    <div class="flex flex-col items-center justify-center space-y-4 fixed z-50 inset-0 bg-white/30 backdrop-blur-sm" @click.self="closeLogin">
        <div class="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 mb-5">
        <button type="button" class="cursor-pointer" @click="closeLogin"><img src="https://cdn-icons-png.flaticon.com/128/2732/2732657.png" alt="" class="max-w-[20px]"></button>
        <div class="flex flex-col items-center justify-center">
            <img src="" alt="">
            <h2 class="text-2xl">登入您的帳號</h2>
            <p class="text-sm text-gray-600">輸入以下資訊以登入後台</p>
        </div>
        <div class="flex flex-col space-y-2">
            <label class="text-sm">Email Address</label>
            <input v-model="email" class="border rounded-lg p-1" type="email" placeholder="請輸入email"> 
            <label class="text-sm">Password<a class="text-blue-600" href="">忘記密碼?</a></label>
            <input v-model="passWord" class="border rounded-lg p-1" type="password" placeholder="請輸入密碼">  
            <button class="py-2 px-4 bg-black text-[#9fbf1a] text-xl font-semibold rounded-lg cursor-pointer" type="button">登入</button> 
        </div>
        <div class="flex flex-col items-center justify-center">
            <p>或以下方平台登入</p>
            <div class="flex">
                <img class="w-8 h-8" src="https://similarpng.com/_next/image?url=https%3A%2F%2Fimage.similarpng.com%2Ffile%2Fsimilarpng%2Fvery-thumbnail%2F2020%2F06%2FLogo-google-icon-PNG.png&w=3840&q=75" alt="">
                <img class="w-8 h-8" src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/github.png" alt="">
                <img class="w-8 h-8" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="">
            </div>
            <p>沒有帳號嗎? <a class="text-blue-600" href="">現在註冊</a></p>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const passWord = ref('');
const error = ref('');

//defineEmits
const emit = defineEmits<{
    close: []
}>()

function closeLogin(){
    emit('close')
}

</script>