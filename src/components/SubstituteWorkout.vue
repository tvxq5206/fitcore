<template>
    <section class="substitute-workout px-25 py-12">
        <div class="substitute-header flex items-center justify-between mb-8">
            <div>
                <span class="section-tag text-[#9fbf1a] font-bold border-b-2 border-[#c8f135] tracking-widest pb-1 mb-4">訓練動作</span>
                <h2 class="mt-2 text-5xl">徒手替代動作</h2>
            </div>
            <button type="button" class="flex gap-2 text-sm font-bold text-gray-600 cursor-pointer py-2 px-4 rounded-lg border border-gray-200 hover:bg-[#fafafa]">← 返回動作列表</button>
        </div>
        <div class="substitute-origin-card flex bg-black rounded-2xl py-7 px-8 gap-6 items-center mb-10 border border-[#c8f13526]">
            <div class="substitute-origin-icon flex w-[56px] h-[56px] rounded-xl bg-[#c8f1351a] border border-[#c8f13533] items-center justify-center  text-2xl">🏋️</div>
            <div>
                <div class="substitute-origin-label text-xs text-[#ffffff66] mb-1">目前選擇的動作</div>
                <div class="substitute-origin-name text-3xl text-white">槓鈴深蹲</div>
                <div class="substitute-origin-meta text-sm text-[#c8f135] mt-1">腿部 · 複合動作 · Targeting the same muscle group</div>
            </div>
        </div>
        <div class="substitute-intro text-md text-gray-600 mb-6 leading-[1.7]">以下動作針對相同肌群（股四頭肌、臀大肌、腿後腱），無需器材即可完成，適合居家訓練或無法上健身房時使用。</div>
        <div class="substitute-grid grid grid-flow-col gap-5">
            <div class="substitute-card rounded-2xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg">
                <div class="substitute-img flex h-[160px] w-full items-center justify-center text-sm text-[#ffffff80] bg-gradient-to-br from-[#2a2a28] to-[3d3d3a]">徒手深蹲</div>
                <div class="substitute-card-body p-4">
                    <span class="substitute-badge inline-block text-xs font-bold bg-[#c8f13526] text-[#9fbf1a] py-0.75 px-2.5 rounded-[20px] mb-2">自身體重</span>
                    <div class="substitute-card-name text-[15px] text-bold mb-1.5">徒手深蹲</div>
                    <div class="substitute-card-desc text-xs text-gray-600">最基礎的腿部訓練，不需任何器材，專注於股四頭肌與臀部發力，適合所有程度。建議 4 組 × 15–20 次。</div>
                </div>
            </div>
            <div class="substitute-card rounded-2xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg">
                <div class="substitute-img flex h-[160px] w-full items-center justify-center text-sm text-[#ffffff80] bg-gradient-to-br from-[#2a2a28] to-[3d3d3a]">保加利亞分腿蹲</div>
                <div class="substitute-card-body p-4">
                    <span class="substitute-badge inline-block text-xs font-bold bg-[#c8f13526] text-[#9fbf1a] py-0.75 px-2.5 rounded-[20px] mb-2">自身體重</span>
                    <div class="substitute-card-name text-[15px] text-bold mb-1.5">保加利亞分腿蹲</div>
                    <div class="substitute-card-desc text-xs text-gray-600">後腳抬高的單腿深蹲，大幅增加難度，有效鍛鍊臀肌與股四頭肌，同時挑戰平衡。建議 3 組 × 10 次（每側）。</div>
                </div>
            </div>
            <div class="substitute-card rounded-2xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg">
                <div class="substitute-img flex h-[160px] w-full items-center justify-center text-sm text-[#ffffff80] bg-gradient-to-br from-[#2a2a28] to-[3d3d3a]">跳躍深蹲</div>
                <div class="substitute-card-body p-4">
                    <span class="substitute-badge inline-block text-xs font-bold bg-[#c8f13526] text-[#9fbf1a] py-0.75 px-2.5 rounded-[20px] mb-2">自身體重 · 有氧</span>
                    <div class="substitute-card-name text-[15px] text-bold mb-1.5">跳躍深蹲</div>
                    <div class="substitute-card-desc text-xs text-gray-600">結合爆發力訓練的進階版本，強化快縮肌纖維，同時提升心肺功能。建議 4 組 × 10–12 次，注意落地緩衝。</div>
                </div>
            </div>
        </div>   
    </section>
</template>

<script>

</script>