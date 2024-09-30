import GradesAside from "./GradesAside";
import GradesTable from "./GradesTable";

export const Grades = () => {
    return (
        <section>
            <div className="max-w-screen-2xl mx-auto p-4 pl-6 pt-6 flex items-center justify-between h-screen">
                <div className="flex gap-16 justify-between w-full h-full">
                    <GradesAside />
                    <GradesTable />
                </div>
            </div>
        </section>
    );
};

export default Grades;
