<template>
   <div class="about-container grid grid-cols-2 gap-20 items-center bg-black text-[#fafafa] py-12 px-25">
     <div class="about-img-wrap bg-[#1c1c1a] rounded-2xl h-[500px] overflow-hidden border border-[#ffffff0f] p-4">
        <div class="about-img-grid grid grid-cols-2 grid-rows-2 gap-3 h-full w-full">
            <div class="about-img row-span-2 border border-[#c8f1351a] rounded-xl overflow-hidden">
                <img :src="aboutContent.aboutTrainingImg" alt="" class="h-full w-full object-cover">
            </div>
            <div class="about-img border border-[#c8f1351a] rounded-xl overflow-hidden">
                <img :src="aboutContent.aboutMealImg" alt="" class="h-full w-full object-cover">
            </div>
            <div class="about-img border border-[#c8f1351a] rounded-xl overflow-hidden">
                <img :src="aboutContent.aboutCoachSmilingImg" alt="" class="h-full w-full object-cover">
            </div>
        </div>
     </div>
     <div class="about-desc">
        <div class="about-desc-header">
            <span class="section-tag text-[#9fbf1a] font-bold border-b-2 border-[#c8f135] tracking-widest pb-1 mb-4">{{ aboutContent.tagtitle }}</span>
            <h2 class="section-title text-6xl font-bold leading-none mt-4">{{ aboutContent.title }}</h2>
            <p class="section-intro text-base text-[#5c5b56] mt-4 max-w-480px">{{ aboutContent.description }}</p>
        </div>
        <div class="about-desc-details flex flex-col gap-5 mt-10">
            <div v-for="detail in aboutDetails" :key="detail.title" class="about-desc-detail flex gap-4 items-start">
                <div class="about-desc-icon flex w-[40px] h-[40px] rounded-lg bg-[#c8f1351a] border border-[#c8f13533] items-center justify-center text-lg">{{ detail.icon }}</div>
                <div class="">
                    <div class="about-desc-detail-title text-[15px] font-bold mb-1">{{ detail.title }}</div>
                    <div class="about-desc-detail-legend text-sm text-gray-400">{{ detail.legend }}</div>
                </div> 
            </div>
        </div>
     </div>
   </div>
</template>

<script setup lang="ts">
import { getAboutContent, getAboutDetail } from '../services/AboutServices'; //輸入函數
const aboutContent = getAboutContent(); //定義函數
const aboutDetails = getAboutDetail;
</script>