import { ChessBoard } from "../Chess/ChessBoard";
import { useSaveGame } from "../../hooks/useSaveGame";
import { Button } from "../../elements/Button";
import { Blur } from "../../elements/Blur";

export function Save() {
    const { game, pgn, error, handleChangePgn, handleSubmit } = useSaveGame();

    return (
        <section>
            <div className="max-w-screen-lg mx-auto p-4 pt-28 h-screen flex flex-col gap-16">
                <div>
                    <h2 className="text-5xl sm:text-6xl font-bold">Guarda tu partida</h2>
                </div>
                <div className="flex gap-4 items-start justify-between flex-col md:flex-row">
                    <form className="flex flex-col gap-4 w-full max-w-lg order-2 md:order-1" method="GET" onSubmit={handleSubmit}>
                        <label className="flex flex-col gap-2">
                            Título del juego
                            <input
                                className="w-full outline-none py-2 px-4 bg-transparent text-amber-50 ring-2 ring-neutral-900 rounded-md transition-all duration-300 ease-out focus:bg-neutral-950"
                                type="text"
                                placeholder="Escribe un título para tu juego"
                                name="title"
                                defaultValue={game?.title}
                                required
                            />
                        </label>

                        <label className="flex flex-col gap-2">
                            PGN (notación de partida)
                            <textarea
                                className="w-full outline-none py-2 px-4 h-44 bg-transparent text-amber-50 ring-2 ring-neutral-900 rounded-md transition-all duration-300 ease-out focus:bg-neutral-950"
                                type="text"
                                placeholder="Escribe la notación PGN de tu partida"
                                name="pgn"
                                onChange={handleChangePgn}
                                value={pgn?.pgn}
                                required
                            >
                                {pgn?.pgn}
                            </textarea>
                        </label>

                        {error && <span className="text-red-400">{error}</span>}
                        <Button title="Guardar Partida">Guardar Partida</Button>
                    </form>
                    {pgn?.isValid && (
                        <div className="w-full max-w-72 order-1 md:order-2 lg:max-w-96">
                            <span>Preview</span>
                            <ChessBoard pgn={pgn?.pgn} />
                        </div>
                    )}
                </div>
            </div>
            <Blur direction="l" />
        </section>
    );
}

export default Save;
