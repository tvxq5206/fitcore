<template>
   <div class="nutri-cal-container py-12 px-25 bg-gray-100">
     <div class="nutri-cal-header mb-14">
        <span class="section-tag text-[#9fbf1a] font-bold border-b-2 border-[#c8f135] tracking-widest pb-1 mb-4">飲食工具</span>
        <h2 class="section-title text-6xl font-bold leading-none mt-4">營養成分<br>計算器</h2>
        <p class="section-intro text-base text-[#5c5b56] mt-4 max-w-480px">輸入食材與克數，自動計算這道料理的完整營養成分，幫助精準備餐。</p>
     </div>
     <div class="nutri-cal-grid grid grid-flow-col gap-12 items-start">
        <div class="food-list bg-[#fafafa] rounded-[20px] p-9 border border-gray-200">
            <div class="food-list-title text-2xl mb-6">食材清單</div>
            <div class="food-list-label grid grid-flow-col gap-3 mb-2">
                <div class="text-xs font-bold text-gray-400">食材名稱</div>
                <div class="text-xs font-bold text-gray-400 text-center">克數</div>
                <div class=""></div>
            </div>
            <div class="food-list-row grid grid-flow-col gap-4 items-center mb-3">
                 <input type="text" placeholder="食材名稱" class="px-3.5 py-2.5 rounded-lg border border-gray-200 bg-[#fafafa] text-[15px] text-black">
                 <input type="number" placeholder="克數" class="px-3.5 py-2.5 rounded-lg border border-gray-200 text-sm text-center">
                 <button type="button" class="bg-gray-100 rounded-md w-[32px] h-[32px] cursor-pointer text-sm text-gray-600">✕</button>
            </div>
            <button type="button" class="w-full p-3 rounded-lg border-2 border-gray-200 text-sm text-gray-400 cursor-pointer mt-1">+新增食材</button>
            <button type="button" class="w-full p-3.5 rounded-lg bg-black text-[#c8f135] text-xl cursor-pointer mt-5">計算營養成分</button>
        </div>
        <div class="nutri-results-panel flex flex-col gap-5">
            <div class="nutri-pie-holder flex rounded-2xl p-8 border border-gray-200 bg-[#fafafa] items-center justify-center h-[240px] overflow-hidden">
                <div class="nutri-pie-visual relative w-[160px] h-[160px] rounded-full bg-[conic-gradient(#c8f135_0%_35%,#378ADD_35%_60%,#f0a500_60%_75%,#e0dfd8_75%_100%)]">
                    <div class="nutri-pie-hole absolute bg-white inset-[30px] rounded-full flex items-center justify-center flex-col">
                        <div class="nutri-pie-center-val text-[22px]">683</div>
                        <div class="nutri-pie-center-label text-xs text-gray-400">大卡</div>
                    </div>
                </div>
                <div class="nutri-legend flex flex-col gap-2 ml-7">
                    <div class="nutri-legend-item flex items-center gap-2.5 text-[13px]">
                       <div class="nutri-legent-dot bg-[#c8f135] w-[10px] h-[10px] rounded-full"></div>
                       蛋白質 35% 
                    </div>
                    <div class="nutri-legend-item flex items-center gap-2.5 text-[13px]">
                       <div class="nutri-legent-dot bg-[#378ADD] w-[10px] h-[10px] rounded-full"></div>
                       碳水 25% 
                    </div>
                    <div class="nutri-legend-item flex items-center gap-2.5 text-[13px]">
                       <div class="nutri-legent-dot bg-[#f0a500] w-[10px] h-[10px] rounded-full"></div>
                       脂肪 15% 
                    </div>
                    <div class="nutri-legend-item flex items-center gap-2.5 text-[13px]">
                       <div class="nutri-legent-dot bg-[#e0dfd8] w-[10px] h-[10px] rounded-full"></div>
                       其他 25% 
                    </div>
                </div>
            </div>
            <div class="nutri-details-grid grid grid-flow-col grid-rows-3 gap-3">
                <div class="nutri-detail-card bg-[#fafafa] rounded-xl p-4 border border-gray-200">
                   <div class="nutri-card-title　text-xs font-bold text-gray-400 mb-1.5">總熱量</div>
                   <div class="nutri-card-desc text-[26px]">693 KCAL</div>
                   <div class="nutri-card-label text-[11px] text-gray-600 mt-0.5">每份（1人份）</div> 
                </div>
                <div class="nutri-detail-card bg-[#fafafa] rounded-xl p-4 border border-gray-200">
                   <div class="nutri-card-title　text-xs font-bold text-[gray-400] mb-1.5">蛋白質</div>
                   <div class="nutri-card-desc text-[26px] text-[#c8f135]">62 G</div>
                   <div class="nutri-card-label text-[11px] text-gray-600 mt-0.5">每克4 kcal</div> 
                </div>
                <div class="nutri-detail-card bg-[#fafafa] rounded-xl p-4 border border-gray-200">
                   <div class="nutri-card-title　text-xs font-bold text-gray-400 mb-1.5">碳水化合物</div>
                   <div class="nutri-card-desc text-[26px] text-[#378ADD]">44 G</div>
                   <div class="nutri-card-label text-[11px] text-gray-600 mt-0.5">其中膳食纖維8g</div> 
                </div>
                <div class="nutri-detail-card bg-[#fafafa] rounded-xl p-4 border border-gray-200">
                   <div class="nutri-card-title　text-xs font-bold text-gray-400 mb-1.5">脂肪</div>
                   <div class="nutri-card-desc text-[26px] text-[#f0a500]">26 G</div>
                   <div class="nutri-card-label text-[11px] text-gray-600 mt-0.5">其中飽和脂肪4g</div> 
                </div>
                <div class="nutri-detail-card bg-[#fafafa] rounded-xl p-4 border border-gray-200">
                   <div class="nutri-card-title　text-xs font-bold text-gray-400 mb-1.5">鈉</div>
                   <div class="nutri-card-desc text-[26px]">320 MG</div>
                   <div class="nutri-card-label text-[11px] text-gray-600 mt-0.5">建議上限 2300mg</div> 
                </div>
                <div class="nutri-detail-card bg-[#fafafa] rounded-xl p-4 border border-gray-200">
                   <div class="nutri-card-title　text-xs font-bold text-gray-400 mb-1.5">糖</div>
                   <div class="nutri-card-desc text-[26px]">6 G</div>
                   <div class="nutri-card-label text-[11px] text-gray-600 mt-0.5">天然糖份</div> 
                </div>
            </div>
        </div>
     </div>
   </div> 
</template>

<script>

</script>