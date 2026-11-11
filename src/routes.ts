import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'index',
      component: () => import('./components/HeroSection.vue')  
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./components/About.vue')
    },
    {
        path: '/tdeecal',
        name: 'Tdeecal',
        component: () => import('./components/CalculateTdee.vue')
    },
    {
        path: '/recipe',
        name: 'Recipe',
        component: () => import('./components/Recipe.vue')
    },
    {
        path: '/training',
        name: 'Training',
        component: () => import('./components/Training.vue')
    },
    {
        path: '/weightrecord',
        name: 'WeightRecord',
        component: () => import('./components/WeightRecord.vue')
    },
    {
        path: '/caloriecal',
        name: 'CalorieCalculater',
        component: () => import('./components/CalorieCalculator.vue')
    },
    {
        path: '/nutrical',
        name: 'NutriCalculater',
        component: () => import('./components/NutriCalculator.vue')
    },
    {
        path: '/physictracker',
        name: 'PhysicTracker',
        component: () => import('./components/PhysicTracker.vue')
    },
    {
        path: '/subworkout',
        name: 'SubstituteWorkout',
        component: () => import('./components/SubstituteWorkout.vue')
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router