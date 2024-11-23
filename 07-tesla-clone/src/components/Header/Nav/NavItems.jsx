import { Anchor } from "../../../elements/Anchor";
import { Button } from "../../../elements/Button";
import { navItems } from "../../../mocks/navItems";

export function NavItems() {
    return (
        <div>
            <ul className="flex">
                {navItems.map((item) => {
                    const { id, title, element } = item;

                    if (element === "button") {
                        return (
                            <li key={id}>
                                <NavButton title={title}>{title}</NavButton>
                            </li>
                        );
                    } else if (element === "anchor") {
                        const { href } = item;

                        return (
                            <li key={id}>
                                <NavAnchor title={title} href={href}>
                                    {title}
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

export default NavItems;
