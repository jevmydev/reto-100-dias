export function Button({ title, isRemovePad = false, isActive, isRemoveHover = false, isIcon = false, ...props }) {
    let buttonClass = "md:max-w-64 max-h-10 w-full h-full flex items-center rounded transition-colors ease-in-out duration-300";
    buttonClass += !isRemovePad && !isIcon ? " px-4 py-2" : "";
    buttonClass += isIcon ? " px-1 py-1" : "";
    buttonClass += !isRemoveHover ? " hover:backdrop-blur-lg hover:bg-hover" : "";
    buttonClass += isActive ? "  bg-hover backdrop-blur-lg" : "";

    return <button className={buttonClass} title={title} {...props} />;
}
