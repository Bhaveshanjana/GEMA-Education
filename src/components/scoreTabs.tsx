import type { ExamType } from "../constants/scoreScale";

const tabs: ExamType[] = [
    "SPEECHACE",
    "CEFR",
    "IELTS",
    "PTE",
    "TOEFL",
    "TOEIC",
];

type Props = {
    active: ExamType;
    onChange: (tab: ExamType) => void;
};

const ScoreTabs = ({ active, onChange }: Props) => {
    return (
        <div className="flex gap-2 mb-6 flex-wrap">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition
            ${active === tab
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default ScoreTabs;
