export interface FilterGroup {
    key: 'difficulty' | 'equipment' | 'muscle'
    label: string
    options: string[]
    single?: boolean //true = 單選
}

export const filterGroups: FilterGroup[] = [
    { key: 'difficulty', label: '難度', options: ['初階', '中階', '高階'], single: true },
    { key: 'equipment', label: '器材', options: ['槓鈴', '啞鈴', '自身體重', '彈力帶', '機器']},
    { key: 'muscle', label: '肌群', options: ['胸', '背', '腿', '肩', '手臂', '核心']}
]