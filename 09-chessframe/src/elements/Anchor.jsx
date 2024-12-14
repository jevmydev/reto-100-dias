export const Anchor = ({ href, title, target = "_self", isBoard = false, children }) => {
    const classIsBoard = isBoard ? "bg-neutral-950 p-6" : "max-w-52 bg-amber-700 px-4 py-2";

    return (
        <a
            href={href}
            title={title}
            target={target}
            className={`${classIsBoard} text-amber-50 flex justify-center items-center overflow-hidden group relative rounded-md transition-all duration-300 ease-out cursor-pointer hover:ring-2 hover:bg-amber-600 hover:ring-amber-600 hover:ring-offset-2`}
        >
            {!isBoard && <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-amber-50 opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>}
            <span>{children}</span>
        </a>
    );
};
