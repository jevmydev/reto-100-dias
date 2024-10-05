import { useState } from "react";
import { defaultGradeData } from "../constants/defaultValues";

export const useGradesData = () => {
    const [gradeData, setGradeData] = useState(defaultGradeData);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newGradeData = Object.fromEntries(formData);

        newGradeData.maxScore = parseFloat(newGradeData.maxScore);
        newGradeData.maxGrade = parseFloat(newGradeData.maxGrade);
        newGradeData.minGrade = parseFloat(newGradeData.minGrade);
        newGradeData.approvalGrade = parseFloat(newGradeData.approvalGrade);
        newGradeData.exigency = parseFloat(newGradeData.exigency) / 100;
        newGradeData.increment = parseFloat(newGradeData.increment);

        setGradeData(newGradeData);
    };

    return { gradeData, handleSubmit };
};
