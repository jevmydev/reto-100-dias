import { useState, useEffect, useCallback } from "react";

import { isValidKey } from "../utils/validate";
import { DEFAULT_IS_KEY_UP, DEFAULT_KEY_DOWN, DEFAULT_TYPING_POSITIONS } from "../utils/constants";

export const useTyping = (words) => {
    const [typing, setTyping] = useState(DEFAULT_TYPING_POSITIONS);
    const [keyDown, setKeyDown] = useState(DEFAULT_KEY_DOWN);
    const [isKeyUp, setIsKeyUp] = useState(DEFAULT_IS_KEY_UP);

    const updateKeyDown = useCallback((newKeyDown) => setKeyDown(newKeyDown), []);

    const handleBackspace = ({ positionLetter, positionWord, errors }) => {
        const lastErrorIndex = errors.findIndex((error) => error.wordIndex === positionWord && error.letterIndex === positionLetter - 1);

        if (lastErrorIndex !== -1) {
            const updatedErrors = errors.filter((_, index) => index !== lastErrorIndex);
            setTyping({
                ...typing,
                positionLetter: positionLetter - 1,
                errors: updatedErrors
            });
        }
    };

    const handleCorrectKey = ({ currentWord, positionLetter, positionWord, errors }) => {
        const isLastLetter = positionLetter === currentWord.length - 1;

        if (isLastLetter) {
            moveToNextWord(errors);
        } else {
            setTyping({
                positionLetter: positionLetter + 1,
                positionWord,
                errors
            });
        }
    };

    const handleIncorrectKey = ({ currentWord, positionWord, positionLetter, errors, key }) => {
        const isLastLetter = positionLetter === currentWord.length - 1;

        if ((currentWord[positionLetter] === " " && key !== " ") || (isLastLetter && currentWord[positionLetter - 1] !== key)) return;

        if (isLastLetter) {
            moveToNextWord(errors);
        } else {
            setTyping({
                positionLetter: positionLetter + 1,
                positionWord,
                errors: [...errors, { wordIndex: positionWord, letterIndex: positionLetter }]
            });
        }
    };

    const moveToNextWord = (errors) => {
        setTyping((prevTyping) => ({
            positionLetter: 0,
            positionWord: prevTyping.positionWord + 1,
            errors
        }));
    };

    const handleTyping = (key) => {
        const { positionLetter, positionWord, errors } = typing;

        const currentWord = words[positionWord];
        const currentLetter = currentWord[positionLetter];

        switch (key) {
            case "Backspace":
                handleBackspace({ positionLetter, positionWord, errors });
                return;

            default:
                if (!isValidKey(key)) return;

                if (key === currentLetter) handleCorrectKey({ currentWord, positionLetter, positionWord, errors });
                else handleIncorrectKey({ currentWord, positionLetter, positionWord, errors, key });
                break;
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const { key } = e;

            updateKeyDown({ key });
            handleTyping(key);
            setIsKeyUp(true);
        };

        const handleKeyUp = () => setIsKeyUp(false);

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [updateKeyDown, handleTyping]);

    return { typing, keyDown, isKeyUp, updateKeyDown };
};
