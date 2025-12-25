export type ExamType = "SPEECHACE" | "CEFR" | "IELTS" | "PTE" | "TOEFL" | "TOEIC";

export const SCORE_SCALES: Record<
    ExamType,
    { label: string; max: number }
> = {
    SPEECHACE: { label: "SpeechAce", max: 9 },
    IELTS: { label: "IELTS", max: 9 },
    PTE: { label: "PTE", max: 90 },
    TOEFL: { label: "TOEFL", max: 120 },
    TOEIC: { label: "TOEIC", max: 990 },
    CEFR: { label: "CEFR", max: 9 }, // CEFR mapped from 0–9
};
