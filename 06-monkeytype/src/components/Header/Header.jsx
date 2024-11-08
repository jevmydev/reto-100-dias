import { FavIcon } from "../../elements/Icons";

export function Header() {
    return (
        <header className="w-full fixed z-10">
            <div className="max-w-screen-xl mx-auto p-4 py-6">
                <nav className="flex">
                    <a className="flex items-center" href="#">
                        <FavIcon />
                        <h1 className="text-dark">monkeytype</h1>
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
