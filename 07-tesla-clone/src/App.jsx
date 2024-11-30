import { useRef } from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import { useHeaderScroll } from "./hooks/useHeaderScroll";

export function App() {
    const mainRef = useRef();
    const { isScrollingUp, isTopHeader } = useHeaderScroll(mainRef);

    return (
        <>
            <Header isTopHeader={isTopHeader} isScrollingUp={isScrollingUp} />
            <main ref={mainRef} className="snap-y snap-mandatory scroll-smooth overflow-y-auto h-screen">
                <Home />
            </main>
            <Footer />
        </>
    );
}

export default App;
