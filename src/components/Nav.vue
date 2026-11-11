<template>
<nav class="relative">
    <!--桌面版Nav-->
    <div class="navbar flex justify-between items-center px-12 h-16 sticky">
        <RouterLink to='/' :class="{active: route.path === '/'}" class="logo text-2xl tracking-wide font-semibold">FIT<span class="text-[#9fbf1a]">TRACKER</span></RouterLink>
        <div class="nav-btn hidden md:flex gap-6">
                <RouterLink v-for="navLink in getNavColumns" :key="navLink.label" :to="navLink.path" :class="{active: route.path === navLink.path}" class="cursor-pointer text-gray-600 hover:text-black">{{ navLink.label }}
                </RouterLink>  
        </div>
        <div class="login hidden md:block">
            <ul class="flex gap-3">
                <li><button type="button" class="font-medium py-2 px-5 border border-gray-200 rounded-4xl cursor-pointer hover:bg-gray-100" @click="openLogin">登入</button></li>
                <li><button type="button" class="font-medium py-2 px-5 rounded-4xl cursor-pointer bg-black text-[#c8f135] hover:bg-black-100">免費加入</button></li>
            </ul>
        </div>
    </div>
    <!--手機版漢堡按鈕-->
    <button type="button" class="md:hidden px-12" :aria-expanded="isMenuOpen" aria-controls="mobile-menu" aria-label="開啟選單" @click="toggleMenu">
        <!-- 漢堡圖示：未開啟時顯示 -->
        <svg v-if="!isMenuOpen" xmlns="https://www.svgrepo.com/show/522140/hamburger.svg" class="w-6 h-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <!-- X 圖示：開啟時顯示 -->
        <svg v-else xmlns="https://www.svgrepo.com/show/506172/cross.svg" class="w-6 h-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    <!--手機版Nav：疊層顯示,md 以上永遠隱藏-->
    <div v-show="isMenuOpen" id="mobile-menu" class="md:hidden absolute top-full right-0 w-full bg-gray-100 flex flex-col gap-4 p-12 z-50">
       <RouterLink v-for="navLink in getNavColumns" :key="navLink.label" :to="navLink.path" :class="{ active: route.path === navLink.path }" class="text-gray-700 hover:text-black" @click="isMenuOpen = false">
         {{ navLink.label }}
       </RouterLink>
       <button type="button" class="font-medium py-2 px-5 border border-gray-200 rounded-4xl cursor-pointer hover:bg-gray-100" @click="openLogin">登入</button>
       <button type="button" class="font-medium py-2 px-5 rounded-4xl cursor-pointer bg-black text-[#c8f135] hover:bg-black-100">免費加入</button>
    </div>
</nav>
<LoginModal v-if="isLoginOpen" @close="isLoginOpen = false"/>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { navColumn } from '../services/NavServices';
import { ref } from 'vue';
import LoginModal from './LoginModal.vue'
const route = useRoute();
const getNavColumns = navColumn;
//漢堡按鈕
const isMenuOpen = ref(false);
function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

//登入modal
//宣告ref
const isLoginOpen = ref(false);
function openLogin() {
    isLoginOpen.value = true;
}

</script>

<style scoped>
nav {
  font-family: 'Bebas Neue', sans-serif;  
}
</style>