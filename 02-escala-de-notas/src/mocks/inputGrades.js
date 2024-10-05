import { v4 as uuid } from "uuid";

export const inputGrades = [
    {
        id: uuid(),
        label: "Puntaje máximo",
        name: "maxScore",
        type: "number",
        defaultValue: 100,
        min: 0
    },
    {
        id: uuid(),
        label: "Nota máxima",
        name: "maxGrade",
        type: "number",
        defaultValue: 7.0,
        min: 0
    },
    {
        id: uuid(),
        label: "Nota mínima",
        name: "minGrade",
        type: "number",
        defaultValue: 1.0,
        min: 0
    },
    {
        id: uuid(),
        label: "Nota aprobación",
        name: "approvalGrade",
        type: "number",
        defaultValue: 4.0,
        min: 0
    },
    {
        id: uuid(),
        label: "Exigencia (%)",
        name: "exigency",
        type: "number",
        defaultValue: 60,
        min: 0,
        max: 100
    }
];
