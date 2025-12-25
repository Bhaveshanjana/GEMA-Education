// src/types/ReportData.ts

export type SkillData = {
    score: number;
    description: string;
};

export type ReportData = {
    studentName: string;
    overallScore: number;
    overallDescription: string; // Added this
    skills: {
        pronunciation: SkillData; // Changed from number to SkillData
        fluency: SkillData;
        vocabulary: SkillData;
        grammar: SkillData;
    };
};