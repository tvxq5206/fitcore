export const recipeBtns = ['全部', '減脂餐', '增肌餐', '早餐', '訓練前', '訓練後']

export interface RecipeDetail {
  recipeImg: string,
  category: string,
  foodName: string,
  foodDesc: string,
  cal: number,
  protein: number,
  carb: number,
  fat: number  
}

export const getRecipeDetail: RecipeDetail[] = [
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '減脂 · 午餐',
    foodName: '藜麥雞胸沙拉',
    foodDesc: '低卡高纖，搭配希臘優格醬，飽足感十足同時兼顧減脂需求。',
    cal: 380,
    protein: 36,
    carb: 32,
    fat: 8
},
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '增肌 · 早餐',
    foodName: '嫩蛋牛肉燕麥粥',
    foodDesc: '高蛋白搭配複合碳水，緩慢釋放能量，適合訓練前補充體力。',
    cal: 420,
    protein: 32,
    carb: 45,
    fat: 12
},
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '減脂 · 晚餐',
    foodName: '清蒸鱸魚時蔬',
    foodDesc: '低脂高蛋白，搭配大量纖維蔬菜，晚餐吃也不怕熱量超標。',
    cal: 310,
    protein: 38,
    carb: 18,
    fat: 7
},
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '增肌 · 午餐',
    foodName: '雞胸糙米蛋炒飯',
    foodDesc: '雞胸肉丁搭配糙米飯與雙蛋，紮實蛋白質來源，適合訓練後補充。',
    cal: 520,
    protein: 42,
    carb: 58,
    fat: 14
},
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '減脂 · 早餐',
    foodName: '希臘優格莓果碗',
    foodDesc: '高蛋白優格搭配新鮮莓果與堅果，低卡又能補充抗氧化營養。',
    cal: 260,
    protein: 22,
    carb: 28,
    fat: 6
},
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '維持 · 午餐',
    foodName: '牛肉番茄義大利麵',
    foodDesc: '瘦牛絞肉搭配全麥麵條與番茄醬汁，均衡三大營養素的一餐。',
    cal: 480,
    protein: 34,
    carb: 55,
    fat: 13
},
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '減脂 · 晚餐',
    foodName: '香煎豆腐時蔬盅',
    foodDesc: '植物性蛋白為主，低脂清爽，適合晚間輕食需求。',
    cal: 290,
    protein: 24,
    carb: 20,
    fat: 9
},
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '增肌 · 晚餐',
    foodName: '雙蛋牛排藜麥盤',
    foodDesc: '完整蛋白質來源搭配藜麥，適合訓練日晚餐補充肌肉修復所需營養。',
    cal: 550,
    protein: 45,
    carb: 40,
    fat: 18
},
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '維持 · 早餐',
    foodName: '全麥吐司佐酪梨蛋',
    foodDesc: '好脂肪搭配優質蛋白質，簡單快速的均衡早餐選擇。',
    cal: 350,
    protein: 20,
    carb: 30,
    fat: 16
},
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '減脂 · 午餐',
    foodName: '鮪魚藜麥沙拉',
    foodDesc: '低卡高蛋白，搭配藜麥補充膳食纖維，飽足又不增加負擔。',
    cal: 340,
    protein: 30,
    carb: 25,
    fat: 10
},
{
    recipeImg: 'https://picsum.photos/300/200',
    category: '增肌 · 早餐',
    foodName: '花生醬香蕉燕麥',
    foodDesc: '天然糖分搭配優質脂肪與蛋白質，訓練前補充能量的好選擇。',
    cal: 400,
    protein: 18,
    carb: 52,
    fat: 15
}
]