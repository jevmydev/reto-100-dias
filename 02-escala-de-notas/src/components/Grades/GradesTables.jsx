import { v4 as uuid } from "uuid";

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
                    <GradesRow key={uuid()} grade={grade} />
                ))}
            </tbody>
        </table>
    );
};

export const GradesTables = ({ gradesChunk }) => {
    return (
        <div className="md:w-2/3 lg:w-4/5 h-full flex gap-6 flex-col sm:border-l sm:border-slate-900">
            <div className="flex justify-center">
                <h2 className="text-3xl font-bold text-slate-100">Tabla de notas</h2>
            </div>
            <div className="flex justify-center gap-4 flex-wrap text-sm">
                {gradesChunk.map((grades) => (
                    <GradesTable key={uuid()} grades={grades} />
                ))}
            </div>
        </div>
    );
};

export default GradesTables;
