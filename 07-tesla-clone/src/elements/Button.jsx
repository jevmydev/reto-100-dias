export function Button({ title, isRemovePad = false, isRemoveHover = false, isIcon = false, ...props }) {
    let buttonClass = "flex items-center rounded transition-colors ease-in-out duration-200";
    buttonClass += !isRemovePad && !isIcon ? " px-4 py-2" : "";
    buttonClass += isIcon ? " px-1 py-1" : "";
    buttonClass += !isRemoveHover ? " hover:backdrop-blur-lg hover:bg-hover" : "";

    return <button className={buttonClass} title={title} {...props} />;
}
