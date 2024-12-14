import { useState, useEffect } from "react";
import { navigate } from "wouter/use-browser-location";
import { validateTitle, validatePGN, formatPGNForDisplay } from "../utils/utils";
import { setStorage } from "../storage/local";

export const useSaveGame = () => {
    const [game, setGame] = useState(null);
    const [pgn, setPgn] = useState({ pgn: "", isValid: false });
    const [error, setError] = useState(null);

    const handleChangePgn = (e) => {
        const { value } = e.target;
        setPgn({ pgn: value, isValid: validatePGN(value) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const game = Object.fromEntries(formData);

        if (!game.title || !game.pgn) return setError("Por favor, rellena todos los campos.");

        if (!validateTitle(game.title)) return setError("El título no es válido. No puede estar vacío ni contener caracteres especiales como '<' o '>'.");

        if (!validatePGN(game.pgn)) return setError("El PGN no es válido. Asegúrate de que los movimientos estén en notación algebraica estándar.");

        setStorage({ key: game.title, value: JSON.stringify(game.pgn) });
        setGame(game);

        navigate("/games");
    };

    useEffect(() => {
        let params = new URLSearchParams(window.location.search);

        const title = params.get("title");
        const pgn = formatPGNForDisplay(params.get("pgn"));

        if (title && pgn) {
            setGame({ title, pgn });
            setPgn({ pgn, isValid: true });
        }
    }, []);

    return { game, pgn, error, handleChangePgn, handleSubmit };
};
