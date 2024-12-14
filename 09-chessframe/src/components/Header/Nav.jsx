import { FavIcon } from "../../elements/Icons";

function Nav() {
    return (
        <nav>
            <div className="max-w-screen-lg mx-auto p-4 flex">
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-700 to-amber-50 text-transparent bg-clip-text pr-20">
                    <a className="flex items-center gap-2" href="/">
                        <FavIcon />
                        Chessframe
                    </a>
                </h1>
            </div>
        </nav>
    );
}

export default Nav;
