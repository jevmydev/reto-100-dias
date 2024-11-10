import { DEFAULT_QUOTABLE_URL } from "../utils/constants";

function compromiseQuote(quote) {
    return {
        author: quote?.author,
        content: quote.content,
        length: quote?.length
    };
}

export async function getRandomQuote() {
    const res = await fetch(DEFAULT_QUOTABLE_URL);
    const quote = await res.json();

    return compromiseQuote(quote);
}
