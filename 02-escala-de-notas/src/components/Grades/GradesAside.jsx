import GradesForm from "./GradesForm";

export const GradesAside = ({ handleSubmit, increment, updateIncrement }) => {
    return (
        <aside className="md:w-1/3 lg:w-1/5 h-full">
            <GradesForm handleSubmit={handleSubmit} increment={increment} updateIncrement={updateIncrement} />
        </aside>
    );
};

export default GradesAside;
