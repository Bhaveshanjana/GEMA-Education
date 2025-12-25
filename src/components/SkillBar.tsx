type SkillBarProps = {
    label: string;
    score: number;
    maxScore: number;
};

const SkillBar = ({ label, score, maxScore }: SkillBarProps) => {
    const percentage = (score / maxScore) * 100;

    return (
        <div className="space-y-1">
            <div className="flex justify-between text-sm font-medium">
                <span className="capitalize">{label}</span>
                <span>
                    {score} / {maxScore}
                </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default SkillBar;