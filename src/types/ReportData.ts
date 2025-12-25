export type SkillData = {
    score: number;
    description: string;
};

export type ReportData = {
    studentName: string;
    overallScore: number;
    overallDescription: string;
    skills: {
        pronunciation: SkillData;
        fluency: SkillData;
        vocabulary: SkillData;
        grammar: SkillData;
    };
};