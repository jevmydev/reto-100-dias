import Nav from "./Nav/Nav";

export function Header({ isTopHeader, isScrollingUp }) {
    const headerDefaultClass = "fixed z-10 w-full transition-header";
    const headerTopClass = isTopHeader ? " bg-transparent text-white" : " bg-white text-main-dark";
    const headerScrollingUp = isScrollingUp ? " top-0" : " -top-20";
    const headerClass = headerDefaultClass + headerTopClass + headerScrollingUp;

    return (
        <header className={headerClass}>
            <Nav />
        </header>
    );
}

export default Header;
