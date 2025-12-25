import type { ReportData } from "../types/ReportData";

type Props = {
    data: ReportData;
};

const getFeedbackMessage = (score: number): string => {
    if (score >= 8) {
        return "Excellent performance with strong control.";
    } else if (score >= 6) {
        return "Good performance with minor inaccuracies.";
    } else {
        return "Needs improvement.";
    }
};

const Feedback = ({ data }: Props) => {
    const { overallScore, skills } = data;

    // Calculate overall feedback
    const dynamicOverallDescription = getFeedbackMessage(overallScore);

    return (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
            <h1 className="p-4 text-xs sm:text-lg">Descriptive feedback</h1>
            {/* Overall Section */}
            <div className="p-6 border-b border-t border-gray-200 hover:bg-gray-100">
                <div className="flex justify-between items-start gap-4 mb-3">
                    <p className="text-sm text-gray-800 font-bold mt-1">Overall</p>
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-sm">
                        {overallScore}
                    </span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                    {dynamicOverallDescription}
                </p>
            </div>

            {/* Skills */}
            <div className="divide-y divide-gray-300">
                {Object.entries(skills).map(([key, value]) => {
                    const skillFeedback = getFeedbackMessage(value.score);
                    return (
                        <div key={key} className="p-6 hover:bg-gray-100 transition-colors duration-200">
                            <div className="flex justify-between items-center mb-3">
                                <h4 className="text-base font-bold text-gray-800 capitalize">
                                    {key}
                                </h4>
                                <span className="px-3 py-1 bg-green-100 text-green-700 font-bold rounded-lg text-sm">
                                    {value.score}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {skillFeedback}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Feedback;