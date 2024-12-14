export const Blur = ({ direction = "l" }) => {
    const classDirection = direction === "l" ? "left-0 pr-48 bg-gradient-to-r" : "right-0 pl-48 bg-gradient-to-l";

    return <div className={`${classDirection} absolute top-0 -z-10 p-16 h-full blur-3xl from-amber-700 to-amber-50 to-primary-pink opacity-15`}></div>;
};
