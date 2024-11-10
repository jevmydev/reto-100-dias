import Confetti from "react-confetti";

export function GameOver() {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-hidden">
            <p>GG</p>
            <Confetti />
        </div>
    );
}

export default GameOver;
