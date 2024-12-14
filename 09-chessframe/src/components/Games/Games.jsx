import { ChessBoard } from "../Chess/ChessBoard";
import { useGames } from "../../hooks/useGames";
import { getStorage } from "../../storage/local";
import { formatPGNForDisplay } from "../../utils/utils";
import { Anchor } from "../../elements/Anchor";
import { Button } from "../../elements/Button";

export function Games() {
    const { titleGames, removeGame } = useGames();

    return (
        <section>
            <div className="max-w-screen-lg mx-auto p-4 pt-28 h-screen">
                <div>
                    <h2 className="text-5xl sm:text-6xl font-bold">Tus Mejores Partidas</h2>
                </div>
                <div className="flex justify-center lg:justify-start flex-wrap gap-4 pt-12">
                    {titleGames?.map((title) => {
                        const pgn = getStorage({ key: title, isJSON: true });
                        const formatPGN = formatPGNForDisplay(pgn);

                        const formatHref = `/save?title=${title}&pgn=${encodeURIComponent(pgn)}`;

                        return (
                            <Anchor key={title} href={formatHref} title={title} isBoard>
                                <article className="flex flex-col gap-4">
                                    <header className="overflow-hidden whitespace-nowrap text-ellipsis max-w-72">
                                        <h3 className="text-xl font-bold">{title}</h3>
                                    </header>
                                    <section className="w-72">
                                        <ChessBoard pgn={formatPGN} />
                                    </section>
                                    <footer className="flex justify-end gap-4">
                                        <Button title="Eliminar" isRemoved onClick={(e) => removeGame(e, title)}>
                                            Eliminar
                                        </Button>
                                    </footer>
                                </article>
                            </Anchor>
                        );
                    })}
                </div>
                <div className="flex items-center justify-center lg:justify-start py-14">
                    <Anchor title="Agregar Otra Partida" href="/save">
                        Agregar Otra Partida
                    </Anchor>
                </div>
            </div>
        </section>
    );
}

export default Games;
