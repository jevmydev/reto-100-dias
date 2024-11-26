import { v4 as uuid } from "uuid";

export const homeItems = [
    {
        id: uuid(),
        title: "Model 3",
        imageSrc: "/assets/home-page/model-3.webp",
        isDisabledOrder: false
    },
    {
        id: uuid(),
        title: "Model Y",
        imageSrc: "/assets/home-page/model-y.webp",
        isDisabledOrder: false
    },
    {
        id: uuid(),
        title: "Model X",
        imageSrc: "/assets/home-page/model-x.webp",
        isDisabledOrder: true
    },
    {
        id: uuid(),
        title: "Model S",
        imageSrc: "/assets/home-page/model-s.webp",
        isDisabledOrder: true
    }
];
