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
                                <Button title={title}>{title}</Button>
                            </li>
                        );
                    } else if (element === "anchor") {
                        const { href } = item;

                        return (
                            <li key={id}>
                                <Anchor title={title} href={href}>
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
