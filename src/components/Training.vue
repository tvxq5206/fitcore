<template>
<div class="training-container py-12 px-25 bg-white">
    <div class="training-header mb-14">
        <span class="section-tag text-[#9fbf1a] font-bold border-b-2 border-[#c8f135] tracking-widest pb-1 mb-4">訓練資料庫</span>
        <h2 class="section-title text-6xl font-bold leading-none mt-4">找到你的<br>訓練動作</h2>
        <p class="section-intro text-base text-[#5c5b56] mt-4 max-w-480px">依據肌群、器材與難度分類，搭配詳細動作說明與示範影片，讓訓練不再摸索。</p>
    </div>
    <div class="flex justify-end mb-8">
        <button class="py-2.5 px-5 border border-gray-200 rounded-lg cursor-pointer font-medium" @click="openTrainingFilter">篩選條件</button>
    </div>
    <TrainingExerciseCard :exercises="selectedFilter"/>
</div>
<TrainingModal v-if="isTrainingFilterOpen" @close="isTrainingFilterOpen = false" @select="handleSelect"/>   
</template>

<script setup lang="ts">
import TrainingExerciseCard from './TrainingExerciseCard.vue';
import { FilterGroup, getExercise } from '@/services/TrainingServices.js';
import { ref, computed } from 'vue';
import TrainingModal from './TrainingModal.vue';

//宣告isTrainingFilterOpen ref
const isTrainingFilterOpen = ref(false);
//filter button功能
function openTrainingFilter() {
    isTrainingFilterOpen.value = true;
}

//單選過濾動作
const selected = ref({
   level: '',
   equipment: '',
   category: '' 
})

const selectedFilter = computed(() =>
    getExercise.filter((exercise) => 
(selected.value.level === '' || exercise.level === selected.value.level) &&
(selected.value.equipment === '' || exercise.equipment === selected.value.equipment) &&
(selected.value.category === '' || exercise.category === selected.value.category)
))

//處理selectChip
function handleSelect(group: FilterGroup, value: string){
    selected.value[group] = value;
}
</script>