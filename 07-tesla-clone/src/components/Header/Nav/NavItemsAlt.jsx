import { Anchor } from "../../../elements/Anchor";
import { Button } from "../../../elements/Button";
import { navItemsAlt } from "../../../mocks/navItemsAlt";

export function NavItemsAlt({ handleMouseEnter, handleMouseLeave }) {
    return (
        <div>
            <ul className="flex gap-1">
                {navItemsAlt.map((item) => {
                    const { id, title, element, Icon } = item;

                    if (element === "button") {
                        return (
                            <li key={id}>
                                <Button title={title} isIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isRemoveHover>
                                    <Icon />
                                </Button>
                            </li>
                        );
                    } else if (element === "anchor") {
                        const { href } = item;

                        return (
                            <li key={id}>
                                <Anchor title={title} href={href} isIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} isRemoveHover>
                                    <Icon />
                                </Anchor>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}

export default NavItemsAlt;
