import GradesAside from "./GradesAside";
import GradesTables from "./GradesTables";

export const Grades = () => {
    return (
        <section>
            <div className="max-w-screen-2xl mx-auto p-4 pt-6 flex items-center justify-between h-screen">
                <div className="flex justify-between w-full h-full">
                    <GradesAside />
                    <GradesTables />
                </div>
            </div>
        </section>
    );
};

export default Grades;
