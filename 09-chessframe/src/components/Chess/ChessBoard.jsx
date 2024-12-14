import { Chessboard } from "react-chessboard";
import { useChessBoard } from "../../hooks/useChessBoard";
import { Button } from "../../elements/Button";
import { RedoIcon, UndoIcon } from "../../elements/Icons";

export function ChessBoard({ pgn }) {
    const { game, history, historyIndex, highlightedSquares, handlePieceDrop, handleSquareClick, handleUndoMove, handleRedoMove } = useChessBoard(pgn);

    const isUndoDisabled = historyIndex === 0;
    const isRedoDisabled = historyIndex === history.length;

    return (
        <div className="flex flex-col justify-center gap-2 w-full h-full">
            <Chessboard position={game.fen()} customSquareStyles={highlightedSquares} onPieceDrop={handlePieceDrop} onSquareClick={handleSquareClick} />
            <div className="flex justify-end gap-2">
                <Button title="Retroceder movimiento" onClick={handleUndoMove} isDisabled={isUndoDisabled}>
                    <UndoIcon />
                </Button>
                <Button title="Siguiente movimiento" onClick={handleRedoMove} isDisabled={isRedoDisabled}>
                    <RedoIcon />
                </Button>
            </div>
        </div>
    );
}
