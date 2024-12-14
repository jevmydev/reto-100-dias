export const Button = ({ title, isRemoved = false, isDisabled, onClick, children }) => {
    const classIsRemoved = isRemoved ? "bg-red-400" : "bg-neutral-950";

    return (
        <button
            title={title}
            onClick={onClick}
            disabled={isDisabled}
            className={`${classIsRemoved} flex justify-center items-center text-amber-50 px-4 py-2 rounded-md transition-all duration-300 ease-out cursor-pointer hover:ring-2 hover:bg-neutral-900 hover:ring-neutral-900 hover:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-10 disabled:hover:bg-none disabled:hover:ring-0 disabled:hover:ring-offset-0`}
        >
            <span>{children}</span>
        </button>
    );
};
