<template>
<div class="fixed z-50 inset-0 bg-white/30 backdrop-blur-sm" @click.self="closeTraining">
  <div class="training-modal-container bg-white max-w-md m-auto border border-gray-200 rounded-2xl p-9 shadow-2xl mt-10">
    <div class="training-modal-title text-3xl mb-7">篩選動作</div>
    <div class="training-modal-group mb-6">
      <div class="training-modal-label text-xs font-bold text-gray-400 mb-3">難度</div>
      <div class="training-modal-chips flex flex-wrap gap-2 text-sm">
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('level', '初階')">初階</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('level', '中階')">中階</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('level', '高階')">高階</button>
      </div>
    </div>
    <div class="training-modal-group mb-6">
      <div class="training-modal-label text-xs font-bold text-gray-400 mb-3">器材</div>
      <div class="training-modal-chips flex flex-wrap gap-2 text-sm">
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('equipment', '槓鈴')">槓鈴</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('equipment', '啞鈴')">啞鈴</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('equipment', '徒手')">徒手</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('equipment', '彈力帶')">彈力帶</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('equipment', '器械')">器械</button>
      </div>
    </div>
    <div class="training-modal-group mb-0">
      <div class="training-modal-label text-xs font-bold text-gray-400 mb-3">肌群</div>
      <div class="training-modal-chips flex flex-wrap gap-2 text-sm">
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('category', '胸肌')">胸肌</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('category', '背部')">背部</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('category', '腿部')">腿部</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('category', '肩部')">肩部</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('category', '手臂')">手臂</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('category', '核心')">核心</button>
        <button class="border border-gray-200 rounded-[40px] py-1.5 px-3.5 cursor-pointer hover:bg-black hover:text-white" @click="selectChip('category', '全身')">全身</button>
      </div>
    </div>
  </div> 
</div>
</template>

<script setup lang="ts">
import { FilterGroup } from '@/services/TrainingServices';
//defineEmits
const emit = defineEmits<{
   close: [],
   select: [group: FilterGroup, value: string]
}>()

function closeTraining(){
  emit('close')
}

function selectChip(group: FilterGroup, value: string){
  emit('select', group, value)
}

</script>