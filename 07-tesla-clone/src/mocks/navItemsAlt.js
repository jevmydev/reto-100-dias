import { v4 as uuid } from "uuid";
import { AccountIcon, HelpIcon, LanguageIcon } from "../elements/Icons";

export const navItemsAlt = [
    {
        id: uuid(),
        title: "Ayuda",
        element: "anchor",
        href: "https://www.tesla.com/es_cl/support/faq",
        Icon: HelpIcon
    },
    {
        id: uuid(),
        title: "Lenguaje",
        element: "button",
        Icon: LanguageIcon
    },
    {
        id: uuid(),
        title: "Cuenta",
        element: "anchor",
        href: "https://www.tesla.com/es_cl/teslaaccount",
        Icon: AccountIcon
    }
];
