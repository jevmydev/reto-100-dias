import { Anchor } from "../../../elements/Anchor";
import { Button } from "../../../elements/Button";
import { navItems } from "../../../mocks/navItems";

export function NavItems({ handleMouseEnter, handleMouseLeave }) {
    return (
        <div>
            <ul className="flex flex-col w-full h-full justify-center md:flex-row md:w-auto md:h-full">
                {navItems.map((item) => {
                    const { id, title, element } = item;

                    if (element === "button") {
                        return (
                            <li className="border-b md:border-0" key={id}>
                                <Button title={title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isRemoveHover>
                                    {title}
                                </Button>
                            </li>
                        );
                    } else if (element === "anchor") {
                        const { href } = item;

                        return (
                            <li className="border-b md:border-0" key={id}>
                                <Anchor title={title} href={href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isRemoveHover>
                                    {title}
                                </Anchor>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}

export default NavItems;
