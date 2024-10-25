import App from "./App.jsx";
import TimerPage from "./pages/TimerPage.jsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/timer" element={<TimerPage />} />
                <Route path="/*" element={<App />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
