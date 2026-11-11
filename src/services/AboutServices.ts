import aboutTrainingImg from '../assets/aboutTrainingImg.png'
import aboutMealImg from '../assets/aboutmeal.jpg'
import aboutCoachSmilingImg from '../assets/aboutcoachsmiling.jpg'

interface AboutContent { //資料定型
  title: string
  tagtitle: string
  description: string
  imageSrc: string
  imageAlt: string
  aboutTrainingImg: string
  aboutMealImg: string
  aboutCoachSmilingImg: string
}

interface AboutDetails { //關於我們的about detail資料定型
  icon: string
  title: string
  legend: string  
}

export function getAboutContent(): AboutContent { //輸出函數(功能)
    return {
        title: '為台灣健身人打造的平台',
        tagtitle: '關於 FitCore',
        description: 'FitCore 由運動科學博士與資深健身教練共同創建，結合科學研究與實戰經驗， 提供最適合亞洲體型的訓練與飲食建議。',
        imageSrc: '',
        imageAlt: '',
        aboutTrainingImg,
        aboutMealImg,
        aboutCoachSmilingImg,
    }
}

export const getAboutDetail: AboutDetails[] = [ //輸出資料(陣列)
    {
     icon: '💪',
     title: '動作標準化',
     legend: '每個動作均由認證教練拍攝示範影片，附詳細文字說明，確保動作正確。'
    },
        {
     icon: '🥗',
     title: '台式食材優先',
     legend: '所有食譜以台灣常見食材為主，兼顧飲食文化，讓健身飲食融入日常生活。'
    },
        {
     icon: '📊',
     title: '數據驅動進步',
     legend: '記錄訓練數據與體態變化，TDEE 自動調整熱量目標，讓進步有跡可循。'
    },
]