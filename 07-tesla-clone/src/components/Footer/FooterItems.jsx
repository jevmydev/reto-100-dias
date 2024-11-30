import { Anchor } from "../../elements/Anchor";
import { footerItems } from "../../mocks/footerItems";

export function FooterItems() {
    return (
        <ul className="flex justify-center items-center gap-4">
            {footerItems.map((item) => {
                const { id, title, href } = item;
                return (
                    <li key={id}>
                        <Anchor className="text-main-dark text-xs" title={title} href={href}>
                            {title}
                        </Anchor>
                    </li>
                );
            })}
        </ul>
    );
}

export default FooterItems;