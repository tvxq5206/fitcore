export interface FooterLink { //定義link裡面要包含什麼資料
    label: string
    path?: string // 有值代表是內部路由，用 RouterLink
}

export interface FooterColumn {
    title: string
    links: FooterLink[] //帶到上面的footerlink資料
}

export const footerColumns: FooterColumn[] = [ //輸出footer columns資料
    {
        title: '訓練',
        links: [
            {
                label: '訓練動作庫',
                path: '/training'
            },
            {
                label: '徒手替代動作',
                path: '/subworkout'
            },
            {
                label: '最大重量紀錄',
                path: '/weightrecord'
            },  
            {
                label: '肌群圖解',
            },
            {
                label: '體態紀錄',
                path: '/physictracker'
            }    
        ]
    },
    {
        title: '飲食',
        links: [
            {
                label: '健身食譜',
                path: '/recipe'
            },
            {
                label: '卡路里計算',
                path: '/caloriecal'
            },
            {
                label: '營養成分計算',
                path: '/nutrical'
            },
            {
                label: 'TDEE 計算',
                path: '/tdeecal'
            }
        ]
    },
    {
        title: '公司',
        links: [
            {
                label: '關於我們',
                path: '/about'
            },
            {
                label: '教練團隊'
            },
            {
                label: '部落格'
            },
            {
                label: '聯絡我們'
            }
        ]
    }
]

export const footerSocials = ['IG', 'FB', 'YT', 'LINE']