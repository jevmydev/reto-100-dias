import { v4 as uuid } from "uuid";
import { APPROVAL_GRADE_DEFAULT, EXIGENCY_DEFAULT, MAX_GRADE_DEFAULT, MAX_SCORE_DEFAULT, MIN_GRADE_DEFAULT } from "../constants/defaultValues";

export const inputGrades = [
    {
        id: uuid(),
        label: "Puntaje máximo",
        name: "maxScore",
        type: "number",
        defaultValue: MAX_SCORE_DEFAULT,
        min: 0
    },
    {
        id: uuid(),
        label: "Nota máxima",
        name: "maxGrade",
        type: "number",
        defaultValue: MAX_GRADE_DEFAULT,
        min: 0
    },
    {
        id: uuid(),
        label: "Nota mínima",
        name: "minGrade",
        type: "number",
        defaultValue: MIN_GRADE_DEFAULT,
        min: 0
    },
    {
        id: uuid(),
        label: "Nota aprobación",
        name: "approvalGrade",
        type: "number",
        defaultValue: APPROVAL_GRADE_DEFAULT,
        min: 0
    },
    {
        id: uuid(),
        label: "Exigencia (%)",
        name: "exigency",
        type: "number",
        defaultValue: EXIGENCY_DEFAULT,
        min: 0,
        max: 100
    }
];
