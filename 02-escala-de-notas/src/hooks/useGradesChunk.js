import { useState } from "react";

import { CHUNK_GRADES_DEFAULT } from "../constants/defaultValues";
import { trunc, chunkArray } from "../utils/functions";

export const useGradesChunk = () => {
    const [gradesChunk, setGradesChunk] = useState([]);

    const getSortedGrades = ({ newGrades, order }) => (order === "increasing" ? newGrades : newGrades.reverse());

    const getGradesChunk = ({ newGrades }) => chunkArray(newGrades, CHUNK_GRADES_DEFAULT);

    const updateGradesChunk = ({ grades }) => {
        const { maxScore, maxGrade, minGrade, approvalGrade, increment, exigency, order } = grades;
        const newGrades = [];

        for (let score = 0; score <= maxScore; score += increment) {
            let note = null;
            const exigencyScore = exigency * maxScore;

            if (score < exigencyScore) note = (approvalGrade - minGrade) * (score / exigencyScore) + minGrade;
            else note = (maxGrade - approvalGrade) * ((score - exigencyScore) / (maxScore * (1 - exigency))) + approvalGrade;

            note = parseFloat(trunc(note, 2).toFixed(1));
            if (isNaN(note)) note = 7;

            const grade = {
                score,
                note,
                isBelowApprove: note < approvalGrade,
                isOdd: score % 2 === 1
            };

            newGrades.push(grade);
        }

        const sortedGrades = getSortedGrades({ newGrades, order });
        const newGradesChunk = getGradesChunk({ newGrades: sortedGrades });

        setGradesChunk(newGradesChunk);
    };

    return { gradesChunk, updateGradesChunk };
};
