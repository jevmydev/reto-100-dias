import { Anchor } from "../../../elements/Anchor";
import { Button } from "../../../elements/Button";
import { navItemsAlt } from "../../../mocks/navItemsAlt";

export function NavItemsAlt() {
    return (
        <div>
            <ul className="flex">
                {navItemsAlt.map((item) => {
                    const { id, title, element, Icon } = item;

                    if (element === "button") {
                        return (
                            <li key={id}>
                                <NavButton title={title}>
                                    <Icon />
                                </NavButton>
                            </li>
                        );
                    } else if (element === "anchor") {
                        const { href } = item;

                        return (
                            <li key={id}>
                                <NavAnchor title={title} href={href}>
                                    <Icon />
                                </NavAnchor>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
}

function NavButton({ title, children }) {
    return <Button title={title}>{children}</Button>;
}

function NavAnchor({ title, href, children }) {
    return (
        <Anchor title={title} href={href}>
            {children}
        </Anchor>
    );
}

export default NavItemsAlt;
