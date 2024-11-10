import { useState, useEffect } from "react";

import { getRandomQuote } from "../services/quotable";

export const useQuote = () => {
    const [quote, setQuote] = useState({});

    const getQuote = async () => {
        try {
            const newQuote = await getRandomQuote();
            setQuote(newQuote);
        } catch (err) {
            console.log(`Error fetching quote: ${err}`);
        }
    };

    useEffect(() => {
        getQuote();
    }, []);

    return { quote };
};
