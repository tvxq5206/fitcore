<template>
<div class="fixed z-50 inset-0 bg-white/30 backdrop-blur-sm" @click.self="closeRecipeFilter">
    <div class="recipe-modal-container bg-white mt-10 max-w-md m-auto border border-gray-200 rounded-2xl p-9 shadow-2xl">
    <div class="recipe-modal-title text-3xl mb-7">篩選食譜</div>
    <div class="recipe-modal-group mb-6">
      <div class="recipe-modal-label text-xs font-bold text-gray-400 mb-3">目標</div>
      <div class="recipe-modal-chips flex flex-wrap gap-2 text-sm">
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">減脂</span>
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">增肌</span>
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">維持</span>
      </div>
    </div>
    <div class="recipe-modal-group mb-6">
      <div class="recipe-modal-label text-xs font-bold text-gray-400 mb-3">餐別</div>
      <div class="recipe-modal-chips flex flex-wrap gap-2 text-sm">
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">早餐</span>
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">午餐</span>
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">晚餐</span>
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">訓練前</span>
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">訓練後</span>
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">點心</span>
      </div>
    </div>
    <div class="recipe-modal-group mb-0">
      <div class="recipe-modal-label text-xs font-bold text-gray-400 mb-3">卡路里範圍</div>
      <div class="recipe-modal-chips flex flex-wrap gap-2 text-sm">
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">300以下</span>
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">300-500</span>
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">500-700</span>
        <span class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer">700以上</span>
      </div>
    </div>
  </div>   
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

//defineEmits
const emit = defineEmits<{
  closeModal:[]
}>();

function closeRecipeFilter(){
  emit('closeModal')
}

</script>