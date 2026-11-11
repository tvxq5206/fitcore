export const exerciseBtns = ['全部動作', '胸肌', '背部', '腿部', '肩部', '手臂', '核心', '全身']

export type Level = '初階' | '中階' | '高階'
export type Equipment = '槓鈴' | '啞鈴' | '徒手' | '器械' | '壺鈴' | '彈力帶'
export type Category = '胸肌' | '背部' | '腿部' |'肩部' | '手臂' | '核心' | '全身'
export type FilterGroup = 'level' | 'equipment' | 'category'

 
export interface Exercise {
    trainingImg: string
    category: string
    exercise: string
    equipment: Equipment
    level: Level
}

export const getExercise: Exercise[] = [
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '腿部',
        exercise: '槓鈴深蹲',
        equipment: '槓鈴',
        level: '中階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '背部',
        exercise: '硬舉',
        equipment: '槓鈴',
        level: '高階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '胸肌',
        exercise: '槓鈴臥推',
        equipment: '槓鈴',
        level: '中階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '肩部',
        exercise: '啞鈴側平舉',
        equipment: '啞鈴',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '背部',
        exercise: '引體向上',
        equipment: '徒手',
        level: '高階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '腿部',
        exercise: '腿伸屈機',
        equipment: '器械',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '胸肌',
        exercise: '伏地挺身',
        equipment: '徒手',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '手臂',
        exercise: '啞鈴二頭彎舉',
        equipment: '啞鈴',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '核心',
        exercise: '棒式撐體',
        equipment: '徒手',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '腿部',
        exercise: '保加利亞分腿蹲',
        equipment: '啞鈴',
        level: '中階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '肩部',
        exercise: '槓鈴肩推',
        equipment: '槓鈴',
        level: '中階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '背部',
        exercise: '坐姿划船',
        equipment: '器械',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '手臂',
        exercise: '三頭肌下壓',
        equipment: '器械',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '腿部',
        exercise: '腿彎舉',
        equipment: '器械',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '核心',
        exercise: '懸吊抬腿',
        equipment: '徒手',
        level: '高階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '胸肌',
        exercise: '啞鈴飛鳥',
        equipment: '啞鈴',
        level: '中階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '腿部',
        exercise: '槓鈴臀推',
        equipment: '槓鈴',
        level: '中階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '肩部',
        exercise: '前平舉',
        equipment: '啞鈴',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '背部',
        exercise: '槓鈴划船',
        equipment: '槓鈴',
        level: '中階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '核心',
        exercise: '捲腹',
        equipment: '徒手',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '全身',
        exercise: '壺鈴擺盪',
        equipment: '壺鈴',
        level: '中階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '背部',
        exercise: '彈力帶划船',
        equipment: '彈力帶',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '胸肌',
        exercise: '彈力帶胸推',
        equipment: '彈力帶',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '腿部',
        exercise: '彈力帶側向走',
        equipment: '彈力帶',
        level: '初階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '肩部',
        exercise: '彈力帶面拉',
        equipment: '彈力帶',
        level: '中階'
    },
    {
        trainingImg: 'https://picsum.photos/300/200',
        category: '核心',
        exercise: '彈力帶抗旋轉推（Pallof Press）',
        equipment: '彈力帶',
        level: '中階'
    }
]