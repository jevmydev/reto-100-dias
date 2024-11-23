import NavIcon from "./NavIcon";
import NavItems from "./NavItems";
import NavItemsAlt from "./NavItemsAlt";

export function Nav() {
    return (
        <nav className="flex items-center justify-between w-full px-10 py-4">
            <NavIcon />
            <NavItems />
            <NavItemsAlt />
        </nav>
    );
}

export default Nav;
