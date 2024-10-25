export const SendIcon = ({ width = "w-5", height = "h-5", stroke = "stroke-current" }) => {
    return (
        <svg className={`${width} ${height} ${stroke}`} strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
            <path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" strokeLinejoin="round" strokeLinecap="round"></path>
        </svg>
    );
};
