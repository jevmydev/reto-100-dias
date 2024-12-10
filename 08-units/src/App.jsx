import Header from "./components/Header/Header";
import Units from "./components/Units/Units";

import { Blur } from "./elements/Blur";

function App() {
    return (
        <>
            <Header />
            <main>
                <Units />
            </main>
            <Blur />
        </>
    );
}

export default App;
