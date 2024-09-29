export const Link = ({ href, title, target, onClick, children }) => {
    return (
        <a className="flex items-center gap-1 transition-transform hover:scale-95" href={href} title={title} target={target} rel="noopener noreferrer" onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;
