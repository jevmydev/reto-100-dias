import { ChessBoard } from "../Chess/ChessBoard";
import { Anchor } from "../../elements/Anchor";
import { Blur } from "../../elements/Blur";

function Hero() {
    return (
        <section>
            <div className="max-w-screen-lg mx-auto p-4 pt-20 h-screen flex gap-4 items-center justify-between flex-col md:flex-row">
                <div className="flex flex-col gap-8 order-2 md:order-1">
                    <h2 className="text-4xl max-w-sm md:max-w-auto lg:text-6xl font-bold">Guarda tus mejores partidas en ajedrez</h2>
                    <Anchor title="¡Comienza Ya!" href="/save">
                        ¡Comienza Ya!
                    </Anchor>
                </div>
                <div className="flex items-center w-full h-full max-w-80 md:max-w-md order-1 md:order-2">
                    <ChessBoard />
                </div>
                <Blur direction="r" />
            </div>
        </section>
    );
}

export default Hero;
