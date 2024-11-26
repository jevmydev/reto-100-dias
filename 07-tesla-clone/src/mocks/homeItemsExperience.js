import { v4 as uuid } from "uuid";

export const homeItemsExperience = [
    {
        id: uuid(),
        title: "Vive la experiencia Tesla",
        description: "Agenda hoy una prueba de manejo",
        isVideo: true,
        videoSrc: "/assets/home-page/tesla-experience.webm",
        anchor: {
            title: "Prueba de manejo",
            href: "https://www.tesla.com/es_cl/drive"
        }
    },
    {
        id: uuid(),
        title: "Energía solar y Powerwall",
        description: "Totalmente eléctrico",
        isVideo: false,
        imageSrc: "/assets/home-page/solar-panels.webp",
        anchor: {
            title: "Más información",
            href: "https://www.tesla.com/es_cl/energy"
        }
    }
];
