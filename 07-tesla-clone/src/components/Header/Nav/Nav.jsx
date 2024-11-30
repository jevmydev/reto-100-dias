import { useRef } from "react";

import NavIcon from "./NavIcon";
import NavItems from "./NavItems";
import NavItemsAlt from "./NavItemsAlt";
import NavMarker from "./NavMarker";

import { useMarker } from "../../../hooks/useMarker";

export function Nav() {
    const markerRef = useRef();
    const { handleMouseEnter, handleMouseLeave } = useMarker(markerRef);

    return (
        <nav className="relative flex items-center justify-between w-full px-10 py-3">
            <NavIcon />
            <NavItems handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            <NavItemsAlt handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
            <NavMarker markerRef={markerRef} />
        </nav>
    );
}

export default Nav;
