import Link from "../../elements/Link";

import { FavIcon } from "../../elements/Icons";

export const Header = () => {
    return (
        <header className="border-b border-slate-900">
            <div className="max-w-screen-2xl mx-auto p-4 flex items-center justify-between">
                <nav className="flex justify-between w-full">
                    <Link href="/" title="Escala de notas">
                        <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-400">Escala de notas</h1>
                    </Link>
                    <Link href="/" title="Escala de notas">
                        <FavIcon />
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
