import { useState } from "react";
import { SCORE_SCALES, type ExamType } from "../constants/scoreScale";
import type { ReportData } from "../types/ReportData";
import { convertScore } from "../utils/scoreConverter";
import SkillBar from "./SkillBar";

type ScoreSummaryProps = {
    data: ReportData;
};

const tabs: ExamType[] = [
    "SPEECHACE",
    "CEFR",
    "IELTS",
    "PTE",
    "TOEFL",
    "TOEIC",
];

const ScoreSummary = ({ data }: ScoreSummaryProps) => {
    const { skills } = data;
    const [exam, setExam] = useState<ExamType>("SPEECHACE");

    const skillValues = Object.values(skills);
    const totalRawScore = skillValues.reduce((acc, skill) => acc + skill.score, 0);
    const calculatedRawAverage = totalRawScore / skillValues.length;

    const overallConverted = convertScore(calculatedRawAverage, exam);

    const maxScore = SCORE_SCALES[exam].max;
    const getScoreColor = (score: number, max: number) => {
        const percentage = (score / max) * 100;
        if (percentage < 60) return "bg-red-500";
        if (percentage < 80) return "bg-yellow-500";
        return "bg-green-500";
    };
    const circleColor = getScoreColor(overallConverted as number, maxScore);

    return (
        <div className="bg-white rounded-xl shadow p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    Summary of Scores
                </h2>

                <div className="flex gap-2 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setExam(tab)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer
                                ${exam === tab
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
                {/* Overall Score Circle */}
                <div className="flex flex-col items-center mb-6 sm:mb-2">
                    <div className="relative">
                        <div className={`w-48 h-48 rounded-full ${circleColor} flex flex-col items-center justify-center shadow-lg text-white`}>
                            <div className="text-xs font-medium mb-1 tracking-wide">
                                <span className="text-xs sm:text-lg mt-1">
                                    {SCORE_SCALES[exam].label}
                                </span>
                            </div>

                            <div className="flex items-baseline">
                                <span className="text-5xl font-bold">
                                    {typeof overallConverted === 'number'
                                        ? Math.round(overallConverted)
                                        : overallConverted}
                                </span>
                                {typeof overallConverted === "number" && (
                                    <span className="text-2xl ml-1">/{SCORE_SCALES[exam].max}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skill Scores */}
                <div className="space-y-5">
                    {Object.entries(skills).map(([key, value]) => {
                        const converted = convertScore(value.score, exam);

                        if (typeof converted === "number") {
                            return (
                                <SkillBar
                                    key={key}
                                    label={key}
                                    score={converted}
                                    maxScore={maxScore}
                                />
                            );
                        }

                        return (
                            <div key={key} className="flex justify-between mb-1 text-sm">
                                <span className="capitalize">{key}</span>
                                <span className="font-medium">{converted}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ScoreSummary;