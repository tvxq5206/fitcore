<template>
  <footer class="bg-black pb-8 pt-16 px-12">
    <div class="footer-grid grid grid-flow-col mb-12 gap-12">
        <div>
            <RouterLink class="footer-logo text-4xl text-white mb-4 cursor-pointer" to="/" :class="{active: route.path === '/'}">FIT<span class="text-[#c8f135]">CORE</span></RouterLink>
            <div class="footer-desc text-sm text-gray-400 max-w-[280px]">台灣最完整的健身知識平台，結合科學訓練方法與在地飲食文化， 幫助每一位用戶達成健康目標。</div>
        </div>
        <div v-for="column in getFooterColumns" :key="column.title" class="text-gray-400">
            <div class="footer-title text-[11px] font-bold mb-4">{{ column.title }}</div>
            <ul class="footer-links flex flex-col gap-2.5">
                <li v-for="link in column.links" :key="link.label" class="footer-link">
                    <RouterLink v-if="link.path" :to="link.path" :class="{active: route.path === link.path}" class="text-sm hover:text-white">{{ link.label }}</RouterLink>
                    <a v-else href="#" class="text-sm hover:text-white">{{ link.label }}</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom flex justify-between items-center text-gray-400 border-t-1 border-[#ffffff14] pt-6">
        <div class="footer-copyright text-[13px]">© 2025 FitCore Taiwan. 版權所有。</div>
        <div class="footer-social flex gap-3">
            <button v-for="social in getFooterSocials" :key="social" type="button" class="flex w-[36px] h-[36px] border border-[#ffffff1a] rounded-lg items-center justify-center cursor-pointer">{{ social }}</button>
        </div>
    </div>
  </footer>    
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute();
  import { footerColumns, footerSocials } from '../services/FooterServices';
  const getFooterColumns = footerColumns;
  const getFooterSocials = footerSocials;
</script>