export function formatWordsTyping(text) {
    if (!text) return;

    const wordsSplit = text.split(" ");
    const words = [];

    for (let i = 0; i < wordsSplit.length; i++) {
        words.push(wordsSplit[i]);
        if (i < wordsSplit.length - 1) {
            words.push(" ");
        }
    }

    return words;
}
