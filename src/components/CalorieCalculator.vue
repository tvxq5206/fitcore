<template>
  <div class="calorie-calculator-container py-12 px-25">
    <div class="cal-header mb-14">
        <span class="section-tag text-[#9fbf1a] font-bold border-b-2 border-[#c8f135] tracking-widest pb-1 mb-4">飲食工具</span>
        <h2 class="section-title text-6xl font-bold leading-none mt-4">卡路里<br>計算器</h2>
        <p class="section-intro text-base text-[#5c5b56] mt-4 max-w-480px">記錄每日飲食，即時追蹤卡路里與三大營養素攝取，掌握熱量盈餘或赤字。</p>
    </div>
    <div class="cal-grid grid grid-flow-col gap-12 items-start">
        <div class="cal-adding-food flex flex-col gap-4">
            <div class="cal-adding-food-title text-xs font-bold text-gray-400 mb-1">新增食物</div>
            <div class="food-search flex items-center gap-3">
                <input type="text" placeholder="搜尋食物名稱，例如：雞胸肉 100g" class="px-4 py-3.5 border border-gray-200 rounded-lg text-[15px]">
                <button type="button" class="px-6 py-3.5 bg-black text-[#c8f135] text-base rounded-lg tracking-[1px] cursor-pointer">+新增</button>
            </div>
            <div class="food-col-list rounded-xl border border-gray-200 overflow-hidden mt-2">
                <table class="w-full border-collapse mt-2">
                    <thead>
                        <tr>
                            <th class="text-[10px] font-bold text-gray-400 px-2 py-3 text-left border-b-1 border-gray-200">食物</th>
                            <th class="text-[10px] font-bold text-gray-400 px-2 py-3 text-left border-b-1 border-gray-200">份量</th>
                            <th class="text-[10px] font-bold text-gray-400 px-2 py-3 text-left border-b-1 border-gray-200">卡路里</th>
                            <th class="text-[10px] font-bold text-gray-400 px-2 py-3 text-left border-b-1 border-gray-200">蛋白質</th>
                            <th class="text-[10px] font-bold text-gray-400 px-2 py-3 text-left border-b-1 border-gray-200">碳水</th>
                            <th class="text-[10px] font-bold text-gray-400 px-2 py-3 text-left border-b-1 border-gray-200">脂肪</th>
                            <th class="text-[10px] font-bold text-gray-400 px-2 py-3 text-left border-b-1 border-gray-200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-3 text-sm border-b-1 border-gray-100">水煮雞胸肉</td>
                            <td class="p-3 text-sm border-b-1 border-gray-100">150g</td>
                            <td class="p-3 text-sm border-b-1 border-gray-100">248</td>
                            <td class="p-3 text-sm border-b-1 border-gray-100">46g</td>
                            <td class="p-3 text-sm border-b-1 border-gray-100">0g</td>
                            <td class="p-3 text-sm border-b-1 border-gray-100">5g</td>
                            <td class="p-3 text-sm border-b-1 border-gray-100 cursor-pointer">✕</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="food-total flex bg-gray-100 rounded-[10px] px-4 py-5 justify-between items-center">
                <div class="text-[13px] text-gray-600">共 5 項食物</div>
                <button type="button" class="text-[13px] text-[#e03e3e] cursor-pointer">清空今日紀錄</button>
            </div>
        </div>
        <div class="cal-result flex flex-col bg-black rounded-[20px] p-9 text-[#fafafa] gap-6">
            <div class="cal-result-title">
                <span class="text-[11px] text-[#ffffff66]">今日攝取熱量</span>
                <h3 class="text-[80px] text-[#c8f135] leading-none">763</h3>
                <p class="text-sm text-[#ffffff80] mt-1">大卡（目標目標 2,480 kcal，剩餘 1,717 kcal）</p>
            </div>
            <div class="cal-result-comp grid grid-flow-col gap-3">
                <div class="comp-card bg-[#ffffff0f] border border-[#ffffff14] rounded-xl p-4">
                    <div class="text-xs text-[#ffffff66] mb-1.5">蛋白質</div>
                    <div class="text-[28px] text-white">69</div>
                    <div class="text-[11px] text-[#ffffff59]">g（目標 185g）</div>
                </div>
                <div class="comp-card bg-[#ffffff0f] border border-[#ffffff14] rounded-xl p-4">
                    <div class="text-xs text-[#ffffff66] mb-1.5">碳水</div>
                    <div class="text-[28px] text-white">72</div>
                    <div class="text-[11px] text-[#ffffff59]">g（目標 248g）</div>
                </div>
                <div class="comp-card bg-[#ffffff0f] border border-[#ffffff14] rounded-xl p-4">
                    <div class="text-xs text-[#ffffff66] mb-1.5">脂肪</div>
                    <div class="text-[28px] text-white">19</div>
                    <div class="text-[11px] text-[#ffffff59]">g（目標 69g）</div>
                </div>
            </div>
            <div class="cal-result-percentage flex flex-col gap-2.5">
                <div>
                    <div class="flex justify-between text-xs text-[#ffffff80] mb-1">
                        <span>熱量進度</span>
                        <span>31%</span> 
                    </div>
                    <div class="cal-bar-track h-[6px] bg-[#ffffff1a] rounded-[3px]">
                        <div class="cal-bar-fill w-[31%] h-full rounded-[3px] bg-[#c8f135]"></div>
                    </div> 
                </div>
                <div>
                    <div class="flex justify-between text-xs text-[#ffffff80] mb-1">
                        <span>蛋白質</span>
                        <span>37%</span> 
                    </div>
                    <div class="cal-bar-track h-[6px] bg-[#ffffff1a] rounded-[3px]">
                        <div class="cal-bar-fill w-[37%] h-full rounded-[3px] bg-[#378ADD]"></div>
                    </div> 
                </div>
                <div>
                    <div class="flex justify-between text-xs text-[#ffffff80] mb-1">
                        <span>碳水</span>
                        <span>29%</span> 
                    </div>
                    <div class="cal-bar-track h-[6px] bg-[#ffffff1a] rounded-[3px]">
                        <div class="cal-bar-fill w-[29%] h-full rounded-[3px] bg-[#f0a500]"></div>
                    </div> 
                </div>
                <div>
                    <div class="flex justify-between text-xs text-[#ffffff80] mb-1">
                        <span>脂肪</span>
                        <span>28%</span> 
                    </div>
                    <div class="cal-bar-track h-[6px] bg-[#ffffff1a] rounded-[3px]">
                        <div class="cal-bar-fill w-[28%] h-full rounded-[3px] bg-[#e03e3e]"></div>
                    </div> 
                </div>
            </div>
        </div> 
    </div>
  </div>  
</template>

<script>

</script>