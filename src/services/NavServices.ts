export interface NavLink {
    label: string
    path?: string
}

export const navColumn = [
    {
        label: '訓練動作',
        path: '/training'
    },
    {
        label: '健身食譜',
        path: '/recipe'
    },
    {
        label: 'TDEE 計算',
        path: '/tdeecal'
    },
    {
        label: '最大重量',
        path: 'weightrecord'
    },
    {
        label: '關於我們',
        path: '/about'
    }
]