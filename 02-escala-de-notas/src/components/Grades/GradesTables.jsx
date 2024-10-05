import { trunc } from "../../constants/functions";

const GradesRow = ({ grade }) => {
    const { score, note, isOdd, isBelowApprove } = grade;

    const classRowOdd = isOdd ? "bg-slate-700" : "bg-inherit";
    const classBelowApprove = isBelowApprove ? "text-red-500" : "text-inherit";

    return (
        <tr className={`grid grid-cols-2 w-full border-b-2 border-slate-950 ${classRowOdd}`}>
            <td className="p-1 border-r border-slate-950">{score}</td>
            <td className={`p-1 border-l border-slate-950 ${classBelowApprove}`}>{note}</td>
        </tr>
    );
};

const GradesTable = ({ grades }) => {
    return (
        <table className="table-auto text-center h-max">
            <thead className="bg-slate-800">
                <tr className="grid grid-cols-2 border-b-2 w-full border-slate-950">
                    <th className="p-4 border-r border-slate-950">Puntaje</th>
                    <th className="p-4 border-l border-slate-950">Nota</th>
                </tr>
            </thead>
            <tbody className="bg-slate-800">
                {grades.map((grade) => (
                    <GradesRow key={grade.score} grade={grade} />
                ))}
            </tbody>
        </table>
    );
};

export const GradesTables = ({ gradeData }) => {
    const { maxScore, maxGrade, minGrade, approvalGrade, exigency, increment, order } = gradeData;
    const grades = [];

    for (let score = 0; score <= maxScore; score += increment) {
        let note = null;
        const exigencyScore = exigency * maxScore;

        if (score < exigencyScore) note = (approvalGrade - minGrade) * (score / exigencyScore) + minGrade;
        else note = (maxGrade - approvalGrade) * ((score - exigencyScore) / (maxScore * (1 - exigency))) + approvalGrade;

        note = parseFloat(trunc(note, 2).toFixed(1));

        const grade = {
            score,
            note,
            isBelowApprove: note < approvalGrade,
            isOdd: score % 2 === 1
        };

        grades.push(grade);
    }

    const sortedGrades = order === "increasing" ? grades : grades.reverse();

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const gradesChunks = chunkArray(sortedGrades, 10);

    return (
        <div className="w-4/5 h-full flex gap-6 flex-col border-l border-slate-900 pl-6">
            <div>
                <h2 className="text-3xl font-bold text-slate-100">Tabla de notas</h2>
            </div>
            <div className="flex gap-4 flex-wrap text-sm">
                {gradesChunks.map((chunk, index) => (
                    <GradesTable key={index} grades={chunk} />
                ))}
            </div>
        </div>
    );
};

export default GradesTables;