<template>
<!--電腦版-->
 <div class="hero-section-container hidden md:grid md:grid-cols-2 md:overflow-hidden">
    <div class="hero-left px-16 py-20 flex flex-col justify-center bg-black relative">
        <p class="hero-eyebrow text-[11px] tracking-[3px] font-bold text-[#c8f135] mb-6">科學化訓練 × 精準飲食</p>
        <h1 class="hero-title text-6xl text-white mb-8 leading-[.95]">
            TRAIN
            <br>
            <em class="text-[#c8f135] not-italic">SMARTER</em>
            <br>
            LIVE
            <br>
            <em class="text-[#c8f135] not-italic">STRONGER</em>
        </h1>
        <p class="hero-desc text-base leading-[1.7] text-gray-400 max-w-[380px] mb-12">超過 500 個專業訓練動作、1200 道健身食譜、個人化 TDEE 計算，
      讓每一次訓練都精準有效，打造你理想中的體態。</p>
        <div class="hero-ctas flex gap-4">
            <button type="button" class="px-9 py-3.5 bg-[#c8f135] text-black text-lg leading-none cursor-pointer rounded-sm">開始訓練</button>
            <button type="button" class="px-9 py-3.5 bg-transparent rounded-sm text-white text-lg leading-none border border-[#ffffff4d] cursor-pointer">了解更多</button>
        </div>
        <div class="hero-stats flex gap-10 mt-16 border-t-1 border-[#ffffff1a] pt-8">
            <div>
                <div class="hero-stat-num text-3xl text-[#c8f135]">500+</div>
                <div class="hero-stat-label text-xs text-gray-400 mt-0.5">訓練動作</div>
            </div>
            <div>
               <div class="hero-stat-num text-3xl text-[#c8f135]">1,200+</div>
                <div class="hero-stat-label text-xs text-gray-400 mt-0.5">健身食譜</div> 
            </div>
            <div>
                <div class="hero-stat-num text-3xl text-[#c8f135]">50,000+</div>
                <div class="hero-stat-label text-xs text-gray-400 mt-0.5">活躍用戶</div>
            </div>
        </div>
    </div>
    <div class="hero-right relative bg-gray-100 overflow-hidden">
        <div class="hero-img-placeholder relative w-full h-full object-cover">
           <img src="https://picsum.photos/1280" alt="">
        </div>
    </div>
 </div>
<!--手機版-->
<div class="md:hidden grid grid-rows-[200px_auto]">
    <div class="hero-top overflow-hidden h-[200px]">
           <img src="https://picsum.photos/768" alt="" class="w-full h-full object-cover">
    </div>
    <div class="hero-bottom px-16 py-10 flex flex-col justify-center bg-black">
        <p class="hero-eyebrow text-[11px] tracking-[3px] font-bold text-[#c8f135] mb-6">科學化訓練 × 精準飲食</p>
        <h1 class="hero-title text-4xl text-white mb-8">
            TRAIN
            <br>
            <em class="text-[#c8f135] not-italic">SMARTER</em>
            <br>
            LIVE
            <br>
            <em class="text-[#c8f135] not-italic">STRONGER</em>
        </h1>
        <p class="hero-desc text-sm leading-[1.7] text-gray-400 max-w-[380px] mb-12">超過 500 個專業訓練動作、1200 道健身食譜、個人化 TDEE 計算，
      讓每一次訓練都精準有效，打造你理想中的體態。</p>
        <div class="hero-ctas flex gap-4">
            <button type="button" class="px-6 py-2.5 bg-[#c8f135] text-black text-sm leading-none cursor-pointer rounded-sm">開始訓練</button>
            <button type="button" class="px-6 py-2.5 bg-transparent rounded-sm text-white text-sm leading-none border border-[#ffffff4d] cursor-pointer">了解更多</button>
        </div>
        <div class="hero-stats flex gap-10 mt-4 border-t-1 border-[#ffffff1a] pt-2">
            <div>
                <div class="hero-stat-num text-xl text-[#c8f135]">500+</div>
                <div class="hero-stat-label text-xs text-gray-400 mt-0.5">訓練動作</div>
            </div>
            <div>
               <div class="hero-stat-num text-xl text-[#c8f135]">1,200+</div>
                <div class="hero-stat-label text-xs text-gray-400 mt-0.5">健身食譜</div> 
            </div>
            <div>
                <div class="hero-stat-num text-xl text-[#c8f135]">50,000+</div>
                <div class="hero-stat-label text-xs text-gray-400 mt-0.5">活躍用戶</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

</script>