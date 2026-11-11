export interface WeightRecord {
    id: number,
    motion: string,
    muscleGroup: string,
    weightKg: number,
    recordedAt: string,
    reps: number
    remark?: string
}

//範例資料
export const weightRecords: WeightRecord[] = [
{
    id: 0,
    motion: '保加利亞分腿蹲',
    muscleGroup: '腿部',
    weightKg: 2,
    recordedAt: '2026-09-01',
    reps: 10,
    remark: '有做到力竭。'
},
{
    id: 1,
    motion: '保加利亞分腿蹲',
    muscleGroup: '腿部',
    weightKg: 4,
    recordedAt: '2026-10-03',
    reps: 10,
    remark: '有做到力竭。'
},
{
    id: 2,
    motion: '保加利亞分腿蹲',
    muscleGroup: '腿部',
    weightKg: 6,
    recordedAt: '2026-11-05',
    reps: 8,
    remark: '有做到力竭。'
},
]