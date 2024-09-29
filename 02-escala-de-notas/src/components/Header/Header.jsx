import Link from "../../elements/Link";
import { FavIcon } from "../../elements/Icons";

export const Header = () => {
    return (
        <header>
            <div className="max-w-screen-2xl mx-auto p-4 flex items-center justify-between">
                <nav>
                    <Link href="/" title="NoteScale">
                        <FavIcon />
                        <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-400">Escala de notas</h1>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
