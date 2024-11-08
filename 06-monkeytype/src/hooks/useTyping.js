import { useEffect, useState, useCallback } from "react";

export const useTyping = () => {
    const [keyDown, setKeyDown] = useState({ key: "" });
    const [isKeyUp, setIsKeyUp] = useState(false);

    const updateKeyDown = useCallback((newKeyDown) => setKeyDown(newKeyDown), []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const { key, code } = e;

            const newCode = code.toLowerCase();
            const newKeyDown = newCode === "space" ? newCode : key.toLowerCase();

            setIsKeyUp(true);
            updateKeyDown({ key: newKeyDown });
        };

        const handleKeyUp = () => setIsKeyUp(false);

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return { keyDown, isKeyUp, updateKeyDown };
};
