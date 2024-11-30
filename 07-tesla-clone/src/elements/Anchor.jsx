export function Anchor({ href, title, target, isActivePrimary = false, isActiveSecondary = false, isRemovePad = false, isRemoveHover = false, isIcon = false, ...props }) {
    let anchorClass = "max-w-64 max-h-10 h-full w-full flex items-center justify-center rounded transition-all ease-in-out duration-300";
    anchorClass += !isRemovePad && !isIcon ? " px-4 py-2" : "";
    anchorClass += isIcon ? " px-1 py-1" : "";
    anchorClass += !isRemoveHover ? " hover:backdrop-blur-lg hover:bg-hover" : "";
    anchorClass += isActivePrimary || isActiveSecondary ? "  border-4 focus:shadow-inner-focus" : "";
    anchorClass += isActivePrimary ? " bg-main-blue text-white border-main-blue hover:bg-main-blue" : isActiveSecondary ? " bg-white border-white text-main-dark hover:bg-white" : "";

    return <a className={anchorClass} href={href} title={title} target={target} {...props} />;
}
