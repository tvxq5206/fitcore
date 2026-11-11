<template>
<div class="fixed z-50 inset-0 bg-white/30 backdrop-blur-sm"  @click.self="closeTrackerModal">
      <div class="physic-tracker-container bg-white mt-10 max-w-md m-auto border border-gray-200 rounded-2xl p-9 shadow-2xl">
     <div class="physic-tracker-header mb-14">
        <span class="section-tag text-[#9fbf1a] font-bold border-b-2 border-[#c8f135] tracking-widest pb-1 mb-4">個人資料</span>
        <h2 class="section-title text-6xl font-bold leading-none mt-4">追蹤你的<br>體態變化</h2>
        <p class="section-intro text-base text-[#5c5b56] mt-4 max-w-480px">定期上傳照片並記錄身體數據，視覺化呈現你的蛻變過程。</p>
     </div>
     <div class="physic-tracker-grid grid grid-cols-3 gap-12 items-start">
        <div class="physic-tracker-upload ">
            <div class="physic-upload-wrap bg-white rounded-[20px] p-10 border-2 border-dashed border-gray-200 text-center cursor-pointer">
                <div class="physic-img-placeholder flex items-center justify-center border border-gray-200 w-full h-[200px] rounded-xl bg-gray-100 m-atuo mb-6">
                    <div class="physic-upload-icon text-5xl text-gray-400">📷</div> 
                </div>
                <div class="physic-upload-title text-base font-bold mb-2">上傳進度照片</div>
                <div class="text-[13px] text-gray-600">支援 JPG、PNG 格式<br>建議尺寸 800 × 1200px<br>點擊或拖曳上傳</div>
            </div>
        </div>
        <div class="physic-trackers flex flex-col col-span-2 gap-5">
            <div class="physic-data-summary grid grid-cols-4 gap-4 mb-7">
                <div class="physic-data-card bg-white rounded-xl p-5 border border-gray-200 text-center">
                <div class="physic-data-val text-[32px] mb-1">175</div>
                <div class="physic-data-label text-[11px] font-bold text-gray-400">身高 cm</div>
                </div>
                <div class="physic-data-card bg-white rounded-xl p-5 border border-gray-200 text-center">
                    <div class="physic-data-val text-[32px] mb-1">72.5</div>
                    <div class="physic-data-label text-[11px] font-bold text-gray-400">體重 kg</div>
                </div>
                <div class="physic-data-card bg-black rounded-xl p-5 border border-black text-center">
                    <div class="physic-data-val text-[32px] text-[#c8f135] mb-1">23.7</div>
                    <div class="physic-data-label text-[11px] font-bold text-gray-400">BMI</div>
                </div>
                <div class="physic-data-card bg-black rounded-xl p-5 border border-black text-center">
                    <div class="physic-data-val text-[32px] text-[#c8f135] mb-1">2480</div>
                    <div class="physic-data-label text-[11px] font-bold text-gray-400">TDEE KCAL</div>
                </div>                                   
            </div>
            <div class="physic-input-grid grid grid-cols-2 col-span-2 gap-4">
                <div>
                   <label for="" class="block text-xs font-bold text-gray-600 mb-2">姓名</label>
                   <input type="text" placeholder="請輸入姓名" class="w-full px-3 py-4 rounded-lg border border-gray-200 text-[15px] text-black bg-white"> 
                </div>
                <div>
                   <label for="" class="block text-xs font-bold text-gray-600 mb-2">拍攝日期</label>
                   <input type="date" value="2026-07-05" class="w-full px-3 py-4 rounded-lg border border-gray-200 text-[15px] text-black bg-white"> 
                </div>
                <div>
                   <label for="" class="block text-xs font-bold text-gray-600 mb-2">身高（cm）</label>
                   <input type="text" placeholder="請輸入身高（cm）" class="w-full px-3 py-4 rounded-lg border border-gray-200 text-[15px] text-black bg-white"> 
                </div>
                <div>
                   <label for="" class="block text-xs font-bold text-gray-600 mb-2">體重（KG）</label>
                   <input type="text" placeholder="請輸入體重（KG）" class="w-full px-3 py-4 rounded-lg border border-gray-200 text-[15px] text-black bg-white"> 
                </div>
                <div>
                   <label for="" class="block text-xs font-bold text-gray-600 mb-2">體脂率（%）</label>
                   <input type="text" placeholder="請輸入體脂率（%）" class="w-full px-3 py-4 rounded-lg border border-gray-200 text-[15px] text-black bg-white"> 
                </div>
                <div>
                   <label for="" class="block text-xs font-bold text-gray-600 mb-2">訓練目標</label>
                   <select name="" id="" class="w-full px-3 py-4 rounded-lg border border-gray-200 text-[15px] text-black bg-white">
                    <option value="" selected>增肌</option>
                    <option value="">減脂</option>
                    <option value="">雕塑身形</option>
                   </select> 
                </div>
            </div>
            <div class="physic-result-display flex bg-white rounded-xl p-6 border border-gray-200 gap-8 items-center justify-center">
                <div class="body-stat text-center">
                    <div class="body-stat-num text-4xl text-black">23.7</div>
                    <div class="body-stat-unit text-[11px] text-gray-600">BMI</div>
                </div>
                <div class="bmi-bar-wrap flex-1">
                   <div class="text-xs text-gray-600 mb-1.5">BMI 指數範圍</div>
                   <div class="bmi-bar h-2 rounded-sm bg-[linear-gradient(to_right,_#378ADD,_#3B6D11,_#f0a500,_#e03e3e)]">
                     <div class="bmi-needle absolute w-[14px] h-[14px] rounded-full bg-black border-2 border-white"></div>
                   </div>
                   <div class="bmi-labels flex justify-between text-xs text-gray-400">
                    <span class="">過輕<br>18.5</span>
                    <span class="">正常<br>18.5-24</span>
                    <span class="">過重<br>24-27</span>
                    <span class="">肥胖<br>27+</span>
                   </div> 
                </div>
                <div class="body-stat text-center">
                    <div class="body-stat-num text-4xl text-black">18%</div>
                    <div class="body-stat-unit text-[11px] text-gray-600">體脂率</div>
                </div>
            </div>
            <button type="button" class="w-full p-3.5 rounded-lg bg-black text-[#c8f135] text-xl cursor-pointer">儲存資料</button>
        </div>
     </div>
   </div>  
</div>
</template>

<script setup lang="ts">
//defineEmits
const emit = defineEmits<{
    close: []
}>();

function closeTrackerModal(){
    emit('close')
}
</script>