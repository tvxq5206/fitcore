<template>
    <div class="weight-record px-25 py-12">
        <div class="weight-head">
            <span class="text-[#9fbf1a] font-bold border-b-2 border-[#c8f135] tracking-widest pb-1 mb-4">個人紀錄</span>
            <h2 class="text-6xl font-bold leading-none mt-4">最大重量<br>紀錄清單</h2>
            <p class="text-base text-[#5c5b56] mt-4 max-w-480px">追蹤每個動作的個人最佳紀錄，見證你的力量成長曲線。</p>
        </div>
        <div class="weight-mid-sec flex justify-between mt-10 mb-10">
            <p class="text-gray-600 text-sm">共 {{ weightRecords.length }} 個動作紀錄</p>
            <button class="px-6 py-3 bg-black text-[#c8f135] text-base rounded-lg cursor-pointer" @click="openWeightRecord">+ 新增紀錄</button>
        </div>
        <div class="weight-table border border-gray-200 overflow-hidden rounded-xl mb-12">
            <table class="w-full">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="text-start text-gray-400 text-xs py-4 px-5">動作名稱</th>
                        <th class="text-start text-gray-400 text-xs py-4 px-5">肌群</th>
                        <th class="text-start text-gray-400 text-xs py-4 px-5">重量記錄</th>
                        <th class="text-start text-gray-400 text-xs py-4 px-5">上次紀錄</th>
                        <th class="text-start text-gray-400 text-xs py-4 px-5">更新日期</th>
                        <th class="text-start text-gray-400 text-xs py-4 px-5">趨勢</th>
                        <th class="text-start text-gray-400 text-xs py-4 px-5">備註</th>
                        <th class="text-start text-gray-400 text-xs py-4 px-5"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="weightRecord in records" :key="weightRecord.id" class="hover:bg-gray-100">
                        <td class="py-4 px-5 text-sm border-t-1 border-gray-100"><strong>{{ weightRecord.motion }}</strong></td>
                        <td class="py-4 px-5 border-t-1 border-gray-100"><span class="text-sm font-bold rounded-2xl py-0.75 px-2.5 bg-[#c8f13526] text-[#9fbf1a]">{{ weightRecord.muscleGroup }}</span></td>
                        <td class="py-4 px-5 border-t-1 border-gray-100"><span class="text-normal">{{ weightRecord.weightKg }} kg</span></td>
                        <td class="py-4 px-5 text-sm border-t-1 border-gray-100">
                            <span v-if="getLastRecord(weightRecord)" class="text-gray-400">{{ getLastRecord(weightRecord)?.weightKg }} kg</span>
                            <span v-else>—</span>
                        </td>
                        <td class="py-4 px-5 text-sm border-t-1 border-gray-100"><span class="text-gray-400">{{ formatDate(weightRecord.recordedAt) }}</span></td>
                        <td class="py-4 px-5 text-sm border-t-1 border-gray-100">↑ +{{  }}kg</td>
                        <td class="py-4 px-5 text-sm border-t-1 border-gray-100">{{ weightRecord.remark }}</td>
                        <td class="py-4 px-5 border-t-1 border-gray-100"><button class="border border-gray-200 cursor-pointer rounded-md py-1.5 px-3 text-gray-600 hover:bg-black hover:text-[#c8f135] hover:border-black" @click="deleteWeightRecord(weightRecord.id)">刪除</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
<WeightRecordModal v-if="isWeightRecordOpen" @close="isWeightRecordOpen = false" @save="handleSave"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WeightRecordModal from './WeightRecordModal.vue';
import { weightRecords, type WeightRecord } from '../services/WeightRecordServices';

const records = ref<WeightRecord[]>(weightRecords);

const isWeightRecordOpen = ref(false);
function openWeightRecord(){
    isWeightRecordOpen.value = true;
};

//收到來自modal送來的紀錄
function handleSave(record: WeightRecord){
  records.value.push(record)
  isWeightRecordOpen.value = false
  console.log('剛新增的：', record)
  console.log('它的上次紀錄：', getLastRecord(record))
  console.log('趨勢:', getTrend(record));
  
}

//刪除記錄
function deleteWeightRecord(id: number){
  const proceed = confirm('確定要刪除此筆資料嗎?')
  if (!proceed) return
    records.value = records.value.filter((record) => record.id !== id)
}

//使顯示的日期格式化成方便閱讀的格式
function formatDate(iso: string){
   return new Date(iso).toLocaleDateString('zh-TW') 
}

//找上次紀錄
function getLastRecord(current: WeightRecord){
    const earlier = records.value.filter((data) => 
    data.motion === current.motion && data.id < current.id
    )
    return earlier[earlier.length -1 ]
}

//重量趨勢
function getTrend(current: WeightRecord){
    const last = getLastRecord(current)
    if(!last) return //先檢查last(有沒有上次紀錄)有沒有值
    const trendResult = current.weightKg - last.weightKg
    return Math.round(trendResult * 10) /10
}

</script>