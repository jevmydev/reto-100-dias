import { useRef } from "react";

import NavIcon from "./NavIcon";
import NavItems from "./NavItems";
import NavItemsAlt from "./NavItemsAlt";
import NavMenu from "./NavMenu";
import NavMarker from "./NavMarker";

import { useMarker } from "../../../hooks/useMarker";
import { useMenu } from "../../../hooks/useMenu";

export function Nav() {
    const markerRef = useRef();
    const { handleMouseEnter, handleMouseLeave } = useMarker(markerRef);

    const { isMenuOpen, updateMenu } = useMenu();
    const isMenuOpenClass = !isMenuOpen ? "-top-[200vh]" : "top-0";

    return (
        <nav className="relative flex items-center justify-between w-full px-10 py-3">
            <div
                className={`${isMenuOpenClass} p-4 pt-20 flex gap-12 flex-col justify-center fixed top-0 left-0 z-10 w-screen h-screen bg-white text-main-dark md:flex-row md:justify-between md:static md:w-full md:h-full md:items-center md:bg-transparent md:text-white md:p-0 md:gap-0`}
            >
                <div className="hidden md:block">
                    <NavIcon />
                </div>
                <NavItems handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
                <NavItemsAlt handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            </div>
            <NavMenu isMenuOpen={isMenuOpen} updateMenu={updateMenu} />
            <NavMarker markerRef={markerRef} />
        </nav>
    );
}

export default Nav;
