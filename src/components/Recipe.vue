<template>
<div class="recipe-container py-12 px-25">
    <div class="recipe-header mb-14">
        <span class="section-tag text-[#9fbf1a] font-bold border-b-2 border-[#c8f135] tracking-widest pb-1 mb-4">健身食譜</span>
        <h2 class="section-title text-6xl font-bold leading-none mt-4">吃得對，<br>練出成果</h2>
        <p class="section-intro text-base text-[#5c5b56] mt-4 max-w-480px">每道食譜都附有完整巨量營養素分析，依照減脂、增肌、維持目標分類。</p>
    </div>
    <div class="recipe-tabs flex gap-2 mb-10 font-medium text-sm">
        <button v-for="recipeBtn in getRecipeBtns" class="py-2 px-5 rounded-3xl border border-gray-200 cursor-pointer hover:bg-black hover:text-[#c8f135]">{{ recipeBtn }}</button>
    </div>
    <div class="flex justify-end mb-8">
        <button @click="openRecipeFilter" class="py-2.5 px-5 border border-gray-200 rounded-lg cursor-pointer font-medium">篩選條件</button>
    </div>
    <!--食譜卡片元件-->
    <RecipeCard />
</div>
<RecipeModal v-if="isRecipeFilterOpen" @closeModal="isRecipeFilterOpen = false"/>
</template>

<script setup lang="ts">
import { recipeBtns } from '@/services/RecipeServices';
import RecipeCard from '@/components/RecipeCard.vue';
const getRecipeBtns = recipeBtns;

//打開recipe篩選modal
//宣告ref
import { ref } from 'vue';
import RecipeModal from './RecipeModal.vue';

const isRecipeFilterOpen = ref(false);
function openRecipeFilter(){
   isRecipeFilterOpen.value = true;   
}

</script>