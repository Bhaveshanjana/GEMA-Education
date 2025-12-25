import type { ExamType } from "../constants/scoreScale";
import { SCORE_SCALES } from "../constants/scoreScale";

export const convertScore = (baseScore: number, exam: ExamType) => {
    if (exam === "CEFR") {
        if (baseScore >= 8) return "C1-C2";
        if (baseScore >= 6) return "B2";
        if (baseScore >= 4) return "B1";
        return "A2";
    }

    const max = SCORE_SCALES[exam].max;
    return Math.round((baseScore / 9) * max);
};
