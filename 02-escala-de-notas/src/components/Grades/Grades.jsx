import { useEffect } from "react";

import GradesAside from "./GradesAside";
import GradesTable from "./GradesTables";

import { useGradesData } from "../../hooks/useGradesData";
import { useGradesChunk } from "../../hooks/useGradesChunk";

export const Grades = () => {
    const { gradeData, handleSubmit, increment, updateIncrement } = useGradesData();
    const { gradesChunk, updateGradesChunk } = useGradesChunk();

    useEffect(() => {
        if (gradeData) updateGradesChunk({ grades: gradeData });
    }, [gradeData]);

    return (
        <section>
            <div className="max-w-screen-2xl mx-auto p-4 pl-6 pt-6 flex items-center justify-between">
                <div className="flex gap-16 justify-between w-full h-full">
                    <GradesAside handleSubmit={handleSubmit} increment={increment} updateIncrement={updateIncrement} />
                    <GradesTable gradesChunk={gradesChunk} />
                </div>
            </div>
        </section>
    );
};

export default Grades;
