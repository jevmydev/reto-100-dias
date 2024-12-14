import { useState, useEffect } from "react";
import { Chess } from "chess.js";

export const useChessBoard = (pgn) => {
    const [game, setGame] = useState(new Chess());
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [highlightedSquares, setHighlightedSquares] = useState({});

    const handleLoadGame = (pgn) => {
        if (!pgn) return;

        try {
            game.loadPgn(pgn);

            setGame(new Chess(game.fen()));
            setHistory(game.history());
            setHistoryIndex(game.history().length);
        } catch (e) {
            console.log("Invalid PGN format");
        }
    };

    const handleRedoMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (historyIndex === history.length) return;

        const newGame = new Chess();
        const movesToPlay = history.slice(0, historyIndex + 1);
        newGame.loadPgn(movesToPlay.join(" "));

        setGame(newGame);
        setHistoryIndex(historyIndex + 1);
    };

    const handleUndoMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (historyIndex === 0) return;

        const newGame = new Chess();
        const movesToUndo = history.slice(0, historyIndex - 1);
        newGame.loadPgn(movesToUndo.join(" "));

        setGame(newGame);
        setHistoryIndex(historyIndex - 1);
    };

    const handlePieceDrop = (sourceSquare, targetSquare) => {
        try {
            const move = game.move({
                from: sourceSquare,
                to: targetSquare,
                promotion: "q"
            });

            const updatedHistory = [...history.slice(0, historyIndex), move.san];

            setHistory(updatedHistory);
            setHistoryIndex(updatedHistory.length);
            setGame(new Chess(game.fen()));
        } catch (e) {
            console.log("Invalid Move");
        } finally {
            setHighlightedSquares({});
        }
    };

    const handleSquareClick = (square) => {
        if (highlightedSquares[square]) {
            const fromSquare = Object.keys(highlightedSquares).find((sq) => highlightedSquares[sq].backgroundColor === "#b45309");
            handlePieceDrop(fromSquare, square);
        }

        const piece = game.get(square);
        const highlights = {};

        if (!piece) return setHighlightedSquares({});

        const moves = game.moves({ square, verbose: true });
        moves.forEach((move) => {
            const isCapture = game.get(move.to);

            highlights[move.to] = {
                backgroundColor: !isCapture ? "#fffbeb" : "transparent",
                opacity: !isCapture ? ".6" : "1",
                border: isCapture ? "2px solid #fffbeb" : "",
                borderRadius: "9999rem",
                scale: !isCapture ? "0.3" : "1"
            };
        });

        highlights[square] = {
            backgroundColor: "#b45309"
        };

        setHighlightedSquares(highlights);
    };

    useEffect(() => handleLoadGame(pgn), [pgn]);

    return { game, history, historyIndex, highlightedSquares, handlePieceDrop, handleSquareClick, handleUndoMove, handleRedoMove };
};
