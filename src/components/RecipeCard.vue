<template>
    <div class="recipe-grid grid grid-cols-3 gap-5">
        <div v-for="recipe in recipeDetails" class="recipe-card border border-gray-200 rounded-2xl overflow-hidden">
            <div class="recipe-img flex h-[200px] w-full"><img :src="recipe.recipeImg" alt="" class="h-full w-full object-cover"></div>
            <div class="recipe-body p-4">
                <div class="recipe-muscle text-xs text-[#9fbf1a] font-bold mb-1.5 tracking-wider">{{ recipe.category }}</div>
                <div class="recipe-name text-base font-bold mb-2">{{ recipe.foodName }}</div>
                <div class="recipe-meta gap-4 text-xs text-gray-600 mb-4">{{ recipe.foodDesc }}</div>
                <div class="food-macros grid grid-flow-col bg-gray-100 rounded-lg overflow-hidden">
                    <div class="food-macro p-2.5 text-center">
                        <div class="food-macro-val text-[15px] font-bold">{{ recipe.cal }}</div>
                        <div class="food-macro-label text-[10px] text-gray-600 mt-0.5">卡路里</div>
                    </div>
                    <div class="food-macro p-2.5 text-center">
                        <div class="food-macro-val text-[15px] font-bold">{{ recipe.protein }}g</div>
                        <div class="food-macro-label text-[10px] text-gray-600 mt-0.5">蛋白質</div>
                    </div>
                    <div class="food-macro p-2.5 text-center">
                        <div class="food-macro-val text-[15px] font-bold">{{ recipe.carb }}g</div>
                        <div class="food-macro-label text-[10px] text-gray-600 mt-0.5">碳水</div>
                    </div>
                    <div class="food-macro p-2.5 text-center">
                        <div class="food-macro-val text-[15px] font-bold">{{ recipe.fat }}g</div>
                        <div class="food-macro-label text-[10px] text-gray-600 mt-0.5">脂肪</div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script setup lang="ts">
import { getRecipeDetail } from '@/services/RecipeServices';
const recipeDetails = getRecipeDetail;
</script>