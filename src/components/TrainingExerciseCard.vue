<template>
        <div class="training-grid grid grid-cols-3 gap-5">
        <div v-for="exercise in exercises" :key="exercise.exercise" class="training-card border border-gray-200 rounded-2xl overflow-hidden">
            <div class="training-img flex h-[200px] w-full"><img :src="exercise.trainingImg" alt="" class="h-full w-full object-cover"></div>
            <div class="training-body p-4">
                <div class="training-muscle text-xs text-[#9fbf1a] font-bold mb-1.5 tracking-wider">{{ exercise.category }}</div>
                <div class="training-name text-base font-bold mb-2">{{ exercise.exercise }}</div>
                <div class="training-meta flex gap-4 text-xs text-gray-600">{{ exercise.equipment }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Exercise } from '@/services/TrainingServices';
defineProps<{
    exercises: Exercise[]
}>()

</script>