<template>
<div class="fixed z-50 inset-0 bg-white/30 backdrop-blur-sm" @click.self="closeWeightRecord">
    <div class="weight-record-wrap bg-white m-auto max-w-md rounded-2xl shadow-2xl p-10 border border-gray-200 mt-10">
        <div class="weight-record-header flex items-start justify-between mb-8">
            <div>
                <div class="weight-record-title text-4xl mb-2">新增重量紀錄</div>
                <div class="weight-record-subtitle text-sm text-gray-600">記錄你在這個動作上目前能完成的最大重量（1RM 或訓練重量）</div>    
            </div>
            <button aria-label="close" type="button" class="flex w-[36px] h-[36px] rounded-full border border-gray-200 text-base cursor-pointer items-center justify-center text-gray-400" @click="closeWeightRecord">✕</button>
        </div>
        <div class="weight-record-motion flex flex-col mb-5 w-full">
            <label for="motion" class="text-gray-600 font-bold text-xs mb-2">選擇動作</label>
            <select id="motion" v-model="motion" @blur="isMotionSelected = true" name="" class="border border-gray-200 py-3 px-4 rounded-lg text-sm">
                <option v-for="exercise in getExercise" :key="exercise.exercise" :value="exercise.exercise">{{ exercise.exercise }}</option>
            </select>
            <p v-if="isMotionSelected && !motion" class="text-red-500 text-xs mt-1 italic">*請選擇動作</p>
        </div>
        <div class="weight-record-max flex gap-3 items-end mb-5">
            <div class="flex flex-col">
                <label for="weight" class="text-gray-600 font-bold text-xs mb-2">重量記錄</label>
                <input id="weight" v-model.number="weight" @blur="isWeightInput = true" type="number" placeholder="例如：150" class="border border-gray-200 py-3 px-4 rounded-lg text-sm">
                <p v-if="isWeightInput && !weight" class="text-red-500 text-xs mt-1 italic">*請輸入重量</p>
            </div>
            <div class="flex flex-col">
                <label for="unit" class="text-gray-600 font-bold text-xs mb-2">單位</label>
                <select id="unit" v-model="unit" name="" class="border border-gray-200 py-3 px-4 rounded-lg text-sm">
                    <option value="kg">kg</option>
                    <option value="lbs">lbs</option>
                </select>
            </div>
            <div class="flex flex-col">
                <label for="" id="" class="text-gray-600 font-bold text-xs mb-2">次數</label>
                <input for="" id="" v-model.number="reps" @blur="isRepsInput = true" type="number" placeholder="例如：30" class="border border-gray-200 py-3 px-4 rounded-lg text-sm">
                <p v-if="isRepsInput && !reps" class="text-red-500 text-xs mt-1 italic">*請輸入次數</p>
            </div>
        </div>
        <div class="weight-record-remark flex flex-col mb-5">
            <label for="remark" class="text-gray-600 font-bold text-xs mb-2">備註（選填）</label>
            <input id="remark" v-model="remark" type="text" placeholder="例如：訓練狀況、組數安排..." class="border border-gray-200 py-3 px-4 rounded-lg text-sm">
        </div>
        <div class="weight-record-btn flex gap-3 mb-5">
            <button @click="saveRecord" type="button" class="bg-black text-[#c8f135] p-3.5 rounded-lg text-xl cursor-pointer w-full">儲存紀錄</button>
            <button type="button" class="border border-gray-200 rounded-lg text-sm font-medium py-3.5 px-6 cursor-pointer" @click="closeWeightRecord">取消</button>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getExercise } from '@/services/TrainingServices';
import { WeightRecord } from '@/services/WeightRecordServices';

const motion = ref('');
const weight = ref<number | null>(null);
const unit = ref('kg');
const reps = ref<number | null>(null);
const remark = ref('');
const isMotionSelected = ref(false);
const isWeightInput = ref(false);
const isRepsInput = ref(false);

//儲存紀錄
function saveRecord(){
   //檢查
   if(motion.value === '' || weight.value === null || reps.value === null){
    isMotionSelected.value = true
    isWeightInput.value = true
    isRepsInput.value = true
    return
   }
    console.log('通過檢查')
    //換算kg, lbs
    const weightKg = unit.value === 'lbs' ? Math.round(weight.value * 0.4536 *10) /10 : weight.value
   //組成
   //找muscle group
    const selectedExercise = getExercise.find((exercise) => exercise.exercise === motion.value)
    const record: WeightRecord = {
    id: Date.now(),
    motion: motion.value,
    muscleGroup: selectedExercise?.category ?? '',
    weightKg: weightKg,
    recordedAt: new Date().toISOString(),
    reps: reps.value,
    remark: remark.value
    }
    emit('save', record)
}

//defineEmits
const emit = defineEmits<{
    close: []
    save: [recordObj: WeightRecord]
}>();
function closeWeightRecord(){
    emit('close')
}
</script>