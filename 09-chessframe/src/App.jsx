import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";

const HomePage = lazy(() => import("./pages/HomePage"));
const SavePage = lazy(() => import("./pages/SavePage"));
const GamesPage = lazy(() => import("./pages/GamesPage"));

const App = () => {
    const [location, setLocation] = useLocation();

    useEffect(() => {
        const hasGames = localStorage.length > 0;

        if (hasGames && location !== "/save") setLocation("/games");
        else if (location === "/save") setLocation(location + window.location.search);
        else setLocation("/");
    }, [location]);

    return (
        <Suspense>
            <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/save" component={SavePage} />
                <Route path="/games" component={GamesPage} />
            </Switch>
        </Suspense>
    );
};

export default App;
