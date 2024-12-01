import { useState } from "react";

export const useMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const updateMenu = () => {
        const newIsMenuOpen = !isMenuOpen;

        if (newIsMenuOpen) document.body.classList.add("overflow-hidden", "sm:overflow-auto");
        else document.body.classList.remove("overflow-hidden", "sm:overflow-auto");

        setIsMenuOpen(newIsMenuOpen);
    };

    return { isMenuOpen, updateMenu };
};
