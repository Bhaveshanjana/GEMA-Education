import { useEffect, useState } from "react";
import type { ReportData } from "../types/ReportData";
import ScoreSummary from "./ScoreSummary";
import Feedback from "./FeedBack";

const ReportPage = () => {
    const [data, setData] = useState<ReportData | null>(null);

    useEffect(() => {
        fetch("/report.json")
            .then((res) => res.json())
            .then((json: ReportData) => setData(json));
    }, []);

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading report...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-2xl font-bold text-center">
                    Speaking Tests Report
                </h1>

                <ScoreSummary data={data} />
                <Feedback data={data} />
            </div>
        </div>
    );
};

export default ReportPage;
