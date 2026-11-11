<template>
   <div class="progress-tracker-container py-12 px-25 mt-14 bg-gray-100">
    <div class="progress-result-header flex items-end justify-between mb-9">
        <div>
            <span class="section-tag text-[#9fbf1a] text-[11px] font-bold border-b-2 border-[#c8f135] tracking-widest pb-1 mb-4">體態追蹤 — 結果頁</span>
            <h2 class="section-title text-6xl font-bold leading-none mt-4">王小明的體態歷程</h2>
            <p class="section-intro text-[14px] text-[#5c5b56] mt-4 max-w-480px">追蹤期間：2025年1月15日 — 2025年5月31日（共 136 天）</p>
        </div>
        <button type="button" class="flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-[#c8f135] text-base cursor-pointer" @click="openTrackerModal">＋ 新增今日紀錄</button>
    </div>
    <div class="progress-summary-grid grid grid-cols-6 gap-3.5 mb-10">
     <div class="progress-summary-card bg-white rounded-xl px-4 py-4.5 border border-gray-200 text-center">
        <div class="progress-val text-[28px] mb-1">−4.5</div>
        <div class="progress-label text-xs font-bold text-gray-400">體重變化 kg</div>
        <div class="progress-change text-[11px] mt-1">77.0 → 72.5 kg</div>
     </div>
     <div class="progress-summary-card bg-white rounded-xl px-4 py-4.5 border border-gray-200 text-center">
        <div class="progress-val text-[28px] mb-1">−3.8</div>
        <div class="progress-label text-xs font-bold text-gray-400">體脂率變化 %</div>
        <div class="progress-change text-[11px] mt-1">21.8% → 18.0%</div>
     </div>
     <div class="progress-summary-card bg-white rounded-xl px-4 py-4.5 border border-gray-200 text-center">
        <div class="progress-val text-[28px] mb-1">+1.2</div>
        <div class="progress-label text-xs font-bold text-gray-400">肌肉量變化 kg</div>
        <div class="progress-change text-[11px] mt-1">56.0 → 57.2 kg</div>
     </div>
     <div class="progress-summary-card bg-white rounded-xl px-4 py-4.5 border border-gray-200 text-center">
        <div class="progress-val text-[28px] mb-1">−6</div>
        <div class="progress-label text-xs font-bold text-gray-400">腰圍變化 cm</div>
        <div class="progress-change text-[11px] mt-1">86 → 80 cm</div>
     </div>
     <div class="progress-summary-card bg-white rounded-xl px-4 py-4.5 border border-gray-200 text-center">
        <div class="progress-val text-[28px] mb-1">23.7</div>
        <div class="progress-label text-xs font-bold text-gray-400">目前 BMI</div>
        <div class="progress-change text-[11px] mt-1">正常範圍</div>
     </div>
     <div class="progress-summary-card bg-white rounded-xl px-4 py-4.5 border border-gray-200 text-center">
        <div class="progress-val text-[28px] mb-1">8</div>
        <div class="progress-label text-xs font-bold text-gray-400">上傳紀錄次數</div>
        <div class="progress-change text-[11px] mt-1">平均每17天一次</div>
     </div>     
    </div>
    <div class="progress-img-grid mb-10">
        <div class="progress-img-title text-sm font-bold text-gray-600 mb-5 flex items-center gap-3">照片對比</div>
        <div class="img-compare-grid grid grid-cols-4 gap-4">
            <!--Front-->
            <div class="img-compare-pair flex flex-col gap-2.5">
                <div class="img-compare rounded-xl overflow-hidden aspect-3/4 relative">
                    <div class="img-compare-placeholder w-full h-full min-h-[200px] flex items-center justify-center flex-col gap-2 text-[11px] bg-[linear-gradient(135deg,#2a2a28,#1a1a18)] text-[#ffffff4d]">
                        <span class="text-[28px]">🧍</span>
                        <span>2026.07.06</span>
                    </div>
                    <div class="img-date-badge absolute bg-[#00000099] text-white text-xs font-bold px-3 py-1 rounded-[20px] bottom-[10px] left-[30%]">2026.07.06起始</div>
                </div>
                <div class="img-compare rounded-xl overflow-hidden aspect-3/4 relative">
                   <div class="img-compare-placeholder w-full h-full min-h-[200px] flex items-center justify-center flex-col gap-2 text-[11px] bg-[linear-gradient(135deg,#1c2a14,#283820)] text-[#c8f13566] border border-[#c8f13526]">
                        <span class="text-[28px]">🧍</span>
                        <span>2026.08.06</span>
                    </div>
                    <div class="img-date-badge absolute bg-[#00000099] text-white text-xs font-bold px-3 py-1 rounded-[20px] bottom-[10px] left-[30%]">2026.08.06最新</div>                    
                </div>
                <div class="img-compare-label text-sm font-bold text-gray-600 text-center">正面</div>
            </div>
            <!--Side-->
            <div class="img-compare-pair flex flex-col gap-2.5">
                <div class="img-compare rounded-xl overflow-hidden aspect-3/4 relative">
                    <div class="img-compare-placeholder w-full h-full min-h-[200px] flex items-center justify-center flex-col gap-2 text-[11px] bg-[linear-gradient(135deg,#2a2a28,#1a1a18)] text-[#ffffff4d]">
                        <span class="text-[28px]">🚶</span>
                        <span>2026.07.06</span>
                    </div>
                    <div class="img-date-badge absolute bg-[#00000099] text-white text-xs font-bold px-3 py-1 rounded-[20px] bottom-[10px] left-[30%]">2026.07.06起始</div>
                </div>
                <div class="img-compare rounded-xl overflow-hidden aspect-3/4 relative">
                   <div class="img-compare-placeholder w-full h-full min-h-[200px] flex items-center justify-center flex-col gap-2 text-[11px] bg-[linear-gradient(135deg,#1c2a14,#283820)] text-[#c8f13566] border border-[#c8f13526]">
                        <span class="text-[28px]">🚶</span>
                        <span>2026.08.06</span>
                    </div>
                    <div class="img-date-badge absolute bg-[#00000099] text-white text-xs font-bold px-3 py-1 rounded-[20px] bottom-[10px] left-[30%]">2026.08.06最新</div>                    
                </div>
                <div class="img-compare-label text-sm font-bold text-gray-600 text-center">側面</div>
            </div>            
            <!--Back-->
            <div class="img-compare-pair flex flex-col gap-2.5">
                <div class="img-compare rounded-xl overflow-hidden aspect-3/4 relative">
                    <div class="img-compare-placeholder w-full h-full min-h-[200px] flex items-center justify-center flex-col gap-2 text-[11px] bg-[linear-gradient(135deg,#2a2a28,#1a1a18)] text-[#ffffff4d]">
                        <span class="text-[28px]">🚶</span>
                        <span>2026.07.06</span>
                    </div>
                    <div class="img-date-badge absolute bg-[#00000099] text-white text-xs font-bold px-3 py-1 rounded-[20px] bottom-[10px] left-[30%]">2026.07.06起始</div>
                </div>
                <div class="img-compare rounded-xl overflow-hidden aspect-3/4 relative">
                   <div class="img-compare-placeholder w-full h-full min-h-[200px] flex items-center justify-center flex-col gap-2 text-[11px] bg-[linear-gradient(135deg,#1c2a14,#283820)] text-[#c8f13566] border border-[#c8f13526]">
                        <span class="text-[28px]">🚶</span>
                        <span>2026.08.06</span>
                    </div>
                    <div class="img-date-badge absolute bg-[#00000099] text-white text-xs font-bold px-3 py-1 rounded-[20px] bottom-[10px] left-[30%]">2026.08.06最新</div>                    
                </div>
                <div class="img-compare-label text-sm font-bold text-gray-600 text-center">背面</div>
            </div>             
            <!--Flex Pose-->
            <div class="img-compare-pair flex flex-col gap-2.5">
                <div class="img-compare rounded-xl overflow-hidden aspect-3/4 relative">
                    <div class="img-compare-placeholder w-full h-full min-h-[200px] flex items-center justify-center flex-col gap-2 text-[11px] bg-[linear-gradient(135deg,#2a2a28,#1a1a18)] text-[#ffffff4d]">
                        <span class="text-[28px]">💪</span>
                        <span>2026.07.06</span>
                    </div>
                    <div class="img-date-badge absolute bg-[#00000099] text-white text-xs font-bold px-3 py-1 rounded-[20px] bottom-[10px] left-[30%]">2026.07.06起始</div>
                </div>
                <div class="img-compare rounded-xl overflow-hidden aspect-3/4 relative">
                   <div class="img-compare-placeholder w-full h-full min-h-[200px] flex items-center justify-center flex-col gap-2 text-[11px] bg-[linear-gradient(135deg,#1c2a14,#283820)] text-[#c8f13566] border border-[#c8f13526]">
                        <span class="text-[28px]">💪</span>
                        <span>2026.08.06</span>
                    </div>
                    <div class="img-date-badge absolute bg-[#00000099] text-white text-xs font-bold px-3 py-1 rounded-[20px] bottom-[10px] left-[30%]">2026.08.06最新</div>                    
                </div>
                <div class="img-compare-label text-sm font-bold text-gray-600 text-center">屈臂</div>
            </div> 
        </div>
    </div>
    <div class="result-chart-grid grid grid-cols-2 gap-6 mb-10">
        <!--Weight Chart-->
        <div class="result-chart-card bg-white rounded-2xl p-7 border border-gray-200">
            <div class="result-chart-title text-[15px] font-bold mb-1">體重趨勢</div>
            <div class="result-chart-sub text-xs text-gray-400 mb-6">單位：kg（2025年1月—5月）</div>
            <div class="result-chart-wrap">
                <div class="result-chart w-full">圖表</div>
            </div>
            <div class="chart-legend flex gap-5 mt-4">
                <div class="legend-item flex items-center gap-1.5 text-sm text-gray-600">
                    <div class="legend-line bg-[#9fbf1a] w-[20px] h-[3px] rounded-[2px]">體重 kg</div>
                </div>
            </div>
        </div>
        <!--Body Fat Chart-->
        <div class="result-chart-card bg-white rounded-2xl p-7 border border-gray-200">
            <div class="result-chart-title text-[15px] font-bold mb-1">體脂率趨勢</div>
            <div class="result-chart-sub text-xs text-gray-400 mb-6">單位：%（2025年1月—5月）</div>
            <div class="result-chart-wrap">
                <div class="result-chart w-full">圖表</div>
            </div>
            <div class="chart-legend flex gap-5 mt-4">
                <div class="legend-item flex items-center gap-1.5 text-sm text-gray-600">
                    <div class="legend-line bg-[#378ADD] w-[20px] h-[3px] rounded-[2px]">體脂率 %</div>
                </div>
            </div>
        </div>
    </div>
    <div class="history-title flex text-sm font-bold text-gray-600 mb-5 items-center gap-3 after:content-[''] after:h-[1px] after:bg-gray-200 after:flex-1">所有紀錄</div>
    <div class="history-table-wrap bg-white rounded-[14px] border border-gray-200 overflow-hidden">
        <table class="w-full border-collapse">
            <thead>
                <tr class="text-[10px] font-bold text-gray-400 text-left">
                    <th class="px-5 py-3.5 border-b-1 border-gray-100">照片</th>
                    <th class="px-5 py-3.5 border-b-1 border-gray-100">日期</th>
                    <th class="px-5 py-3.5 border-b-1 border-gray-100">體重</th>
                    <th class="px-5 py-3.5 border-b-1 border-gray-100">體脂率</th>
                    <th class="px-5 py-3.5 border-b-1 border-gray-100">肌肉量</th>
                    <th class="px-5 py-3.5 border-b-1 border-gray-100">腰圍</th>
                    <th class="px-5 py-3.5 border-b-1 border-gray-100">BMI</th>
                    <th class="px-5 py-3.5 border-b-1 border-gray-100">備註</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="px-5 py-3.5 border-b-1 border-gray-100">
                        <div class="history-thumb-placeholder flex w-[36px] h-[48px] rounded-[6px] bg-gray-100 border border-gray-200 items-center justify-center text-sm">📷</div>
                    </td>
                    <td class="px-5 py-3.5 border-b-1 border-gray-100 text-[13px]"><p>2026.07.06</p></td>
                    <td class="px-5 py-3.5 border-b-1 border-gray-100 text-[13px]"><p>72.5 kg</p></td>
                    <td class="px-5 py-3.5 border-b-1 border-gray-100 text-[13px]">18.0%</td>
                    <td class="px-5 py-3.5 border-b-1 border-gray-100 text-[13px]">57.2 kg</td>
                    <td class="px-5 py-3.5 border-b-1 border-gray-100 text-[13px]">80 cm</td>
                    <td class="px-5 py-3.5 border-b-1 border-gray-100 text-[13px]">23.7</td>
                    <td class="px-5 py-3.5 border-b-1 border-gray-100 text-[13px]">本月訓練4次/週</td>
                </tr>
            </tbody>
        </table>
    </div>
   </div>
<PhysicTrackerModal v-if="isTrackerOpen" @close="isTrackerOpen = false"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PhysicTrackerModal from './PhysicTrackerModal.vue';
const isTrackerOpen = ref(false);
function openTrackerModal(){
    isTrackerOpen.value = true;
} 
</script>