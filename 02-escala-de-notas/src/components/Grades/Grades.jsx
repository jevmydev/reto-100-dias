import GradesAside from "./GradesAside";
import GradesTable from "./GradesTables";

import { useGradesData } from "../../hooks/useGradesData";

export const Grades = () => {
    const { gradeData, handleSubmit } = useGradesData();

    return (
        <section>
            <div className="max-w-screen-2xl mx-auto p-4 pl-6 pt-6 flex items-center justify-between h-screen">
                <div className="flex gap-16 justify-between w-full h-full">
                    <GradesAside handleSubmit={handleSubmit} />
                    <GradesTable gradeData={gradeData} />
                </div>
            </div>
        </section>
    );
};

export default Grades;
