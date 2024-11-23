import { v4 as uuid } from "uuid";

export const navItems = [
    {
        id: uuid(),
        title: "Vehículos",
        element: "button"
    },
    {
        id: uuid(),
        title: "Energía",
        element: "button"
    },
    {
        id: uuid(),
        title: "Carga",
        element: "button"
    },
    {
        id: uuid(),
        title: "Descubrir",
        element: "button"
    },
    {
        id: uuid(),
        title: "We, Robot",
        element: "anchor",
        href: "https://www.tesla.com/es_cl/we-robot"
    }
];
