import { useState } from "react";

import { GRADE_DATA_DEFAULT, INCREMENT_DEFAULT } from "../constants/defaultValues";
import { formatGrade } from "../utils/formats";

export const useGradesData = () => {
    const [gradeData, setGradeData] = useState(GRADE_DATA_DEFAULT);
    const [increment, useIncrement] = useState(INCREMENT_DEFAULT);

    const updateIncrement = (e) => useIncrement(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newGradeData = Object.fromEntries(formData);

        const formatNewGradeData = formatGrade({ gradeData: newGradeData });

        setGradeData(formatNewGradeData);
    };

    return { gradeData, increment, updateIncrement, handleSubmit };
};
