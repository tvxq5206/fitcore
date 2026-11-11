<template>
<div class="min-h-screen grid grid-cols-2 gap-20 place-content-between items-center justify-center px-25 py-12">
    <div class="grid grid-flow-col grid-rows-3 items-center">
        <div class="section-header">
            <span class="section-tag text-[#9fbf1a] font-bold border-b-2 border-[#c8f135] tracking-widest pb-1 mb-4">TDEE 計算器</span>
            <h2 class="section-title text-6xl font-bold leading-none mt-4">了解你的<br>每日熱量需求</h2>
            <p class="section-intro text-base text-[#5c5b56] mt-4 max-w-480px">輸入你的基本資料與活動量，精準計算每日消耗熱量，制定個人化飲食策略。</p>
        </div>
        <div class="flex flex-col items-start mt-8 p-8 bg-black rounded-xl border border-blue-100 text-center">
            <div class="text-sm text-[#ffffff80] font-medium">每日總消耗熱量（TDEE）</div>
            <div class="text-7xl font-black text-[#c8f135]">{{ tdee }}</div>
            <div class="text-[#ffffff80] text-base font-normal">大卡/天（中等活動量）</div>
        </div>
        <div class="tdee-goals-grid grid grid-cols-2 gap-4">
            <div class="tdee-goals-card">
                <div class="bg-[#f2f2f0] rounded-xl border border-[#e0dfd8] p-5">
                <p class="text-sm text-[#9a9991] font-medium">減脂目標</p>
                <h2 class="text-3xl font-black text-[#e03e3e]">{{ bmr }}</h2>
                <span class="text-[#5c5b56] font-normal">−500 kcal / 天</span>
                </div>
            </div>    
            <div class="tdee-goals-card">
                <div class="bg-[#f2f2f0] rounded-xl border border-[#e0dfd8] p-5">
                <p class="text-sm text-[#9a9991] font-medium">增肌目標</p>
                <h2 class="text-3xl font-black text-[#3B6D11]">{{ bmr }}</h2>
                <span class="text-[#5c5b56] font-normal">＋250 kcal / 天</span>
                </div>
            </div>
            <div class="tdee-goals-card">
                <div class="bg-[#f2f2f0] rounded-xl border border-[#e0dfd8] p-5">
                <p class="text-sm text-[#9a9991] font-medium">基礎代謝率 BMR</p>
                <h2 class="text-3xl font-black">{{ bmr }}</h2>
                <span class="text-[#5c5b56] font-normal">靜息狀態消耗</span>
                </div>
            </div>
            <div class="tdee-goals-card">
                <div class="bg-[#f2f2f0] rounded-xl border border-[#e0dfd8] p-5">
                <p class="text-sm text-[#9a9991] font-medium">活動消耗</p>
                <h2 class="text-3xl font-black">{{ bmr }}</h2>
                <span class="text-[#5c5b56] font-normal">運動 + 日常活動</span>
                </div>
            </div>
            </div>
    </div>
    <div class="bg-gray-100 w-full rounded-2xl shadow-xl p-8 mb-5">
        <h1 class="text-2xl font-bold text-gray-800 mb-6">計算你的TDEE</h1>
         <div class="info grid grid-flow-col grid-rows-2 gap-4">
            <div>
                <label class="text-sm font-semibold text-gray-600 mb-2">性別</label>
                 <select name="" id="" class="w-full bg-white py-3 px-4 border border-gray-300 rounded-lg">
                    <option value="女性">女性</option>
                    <option value="男性">男性</option>
                 </select>
            </div>
            <div>
                <label class="text-sm font-semibold text-gray-600 mb-2">年齡</label>
                <input type="text" placeholder="請輸入年齡" v-model="age" @blur="ageTouched = true" class="w-full bg-white py-3 px-4 border border-gray-300 rounded-lg">
                <p v-if="ageTouched && !age" class="text-red-500 text-xs mt-1 italic">*請輸入年齡</p>
            </div>
            <div>
                <label class="text-sm font-semibold text-gray-600 mb-2">身高（CM）</label>
                <input type="text" placeholder="請輸入身高（公分）" v-model="height" @blur="heightTouched = true" class="w-full bg-white py-3 px-4 border border-gray-300 rounded-lg">
                <p v-if="heightTouched && !height" class="text-red-500 text-xs mt-1 italic">請輸入身高（公分）</p>
            </div>
            <div>
                <label class="text-sm font-semibold text-gray-600 mb-2">體重（KG）</label>
                <input type="text" placeholder="請輸入體重（公斤）" v-model="weight" @blur="weightTouched = true" class="w-full bg-white py-3 px-4 border border-gray-300 rounded-lg">
                <p v-if="weightTouched && !weight" class="text-red-500 text-xs mt-1 italic">請輸入體重（公斤）</p>
            </div>
         </div>
         <div class="mb-5">
            <label class="text-sm font-semibold text-gray-600 mb-2">活動程度</label>
            <select v-model="selectedActivity" class="w-full rounded-lg outline-solid bg-white outline-indigo-200 py-3 px-4">
                <option v-for="option in activityOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
            </select>
         </div>
         <div class="mb-5">
            <label class="text-sm font-semibold text-gray-600 mb-2">目標</label>
            <select name="" id="" class="w-full rounded-lg outline-solid bg-white outline-indigo-200 py-3 px-4">
                <option value="">增肌</option>
                <option value="">維持體重</option>
                <option value="">減脂</option>
            </select>
         </div>
         <div>
            <button class="w-full bg-black text-[#c8f135] rounded-lg p-3.5 cursor-pointer">立即計算</button>
         </div>
    </div>
</div>

</template>

<script setup>
import { ref, computed } from 'vue';

const gender = ref('female');
const age = ref('');
const height = ref('');
const weight = ref('');
const selectedActivity = ref('1.2');
const ageTouched = ref(false);
const weightTouched = ref(false);
const heightTouched = ref(false);

const activityOptions = [
    { label: '身體活動趨於靜態（幾乎不運動）', value: 1.2 },
    { label: '身體活動程度較低（每周運動 1 - 3 天）', value: 1.375 },
    { label: '身體活動程度正常（每周運動 3 - 5 天）', value: 1.55 },
    { label: '身體活動程度較高（每周運動 6 - 7 天）', value: 1.72 },
    { label: '身體活動程度激烈（長時間運動或體力勞動工作）', value: 1.9 },
];

const bmr = computed(() => {
    if(height.value > 0 && weight.value > 0){
       const baseBmr = 10 * weight.value + 6.25 * height.value - 5 * age.value;
       if(gender.value === 'male'){
        return baseBmr + 5;
       } else {
        return baseBmr - 161;
       }
    }
    return 0;
});

const tdee = computed(() => {
    return Math.round(bmr.value * selectedActivity.value);
});

const isAgeNum = computed(() => {
    return age.value;
})

const removeAll = () => {
    age.value = '';
    weight.value = '';
    height.value = '';
    selectedActivity.value = 1.2;
    gender.value = 'female';
    ageTouched.value = false;
    heightTouched.value = false;
    weightTouched.value = false;
};

</script>

<style>

</style>