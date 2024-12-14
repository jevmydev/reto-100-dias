import { getStorageKeys } from "../storage/local";

export const useGames = () => {
    const titleGames = getStorageKeys();

    const removeGame = (e, title) => {
        e.stopPropagation();
        e.preventDefault();

        localStorage.removeItem(title);
        window.location.reload();
    };

    return { titleGames, removeGame };
};
