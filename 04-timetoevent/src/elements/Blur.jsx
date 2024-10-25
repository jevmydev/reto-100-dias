export const Blur = ({ top = "top-auto", bottom = "bottom-auto", left = "left-auto", right = "right-auto" }) => {
    return <div className={`p-32 absolute -z-10 blur-3xl opacity-20 bg-gradient-to-r from-purple-600 to-pink-600 ${left} ${right} ${top} ${bottom}`}></div>;
};

export default Blur;
