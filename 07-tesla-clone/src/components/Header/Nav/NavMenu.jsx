import NavIcon from "./NavIcon";

import { Button } from "../../../elements/Button";

export function NavMenu({ isMenuOpen, updateMenu }) {
    const isMenuOpenTitle = !isMenuOpen ? "Menú" : "Cerrar menú";

    return (
        <div className={`relative w-full flex justify-between z-20 md:hidden ${isMenuOpen ? "text-main-dark" : ""}`}>
            <NavIcon />
            <div>
                <Button onClick={updateMenu} title={isMenuOpenTitle} isActive>
                    {isMenuOpenTitle}
                </Button>
            </div>
        </div>
    );
}

export default NavMenu;
