export const formatPGNForDisplay = (pgn) => {
    const format = pgn?.replace(/\\"/g, "\"").replace(/\\n/g, "\n");
    return format?.substring(1, format.length - 1);
};

export const validateTitle = (title) => {
    const maxLength = 100;
    const invalidChars = /[<>]/;

    return title && title.length <= maxLength && !invalidChars.test(title);
};

export const validatePGN = (pgn) => {
    const validMoves = /(\d+\.\s*[a-h1-8KQRNBxO\-+=#]+\s*[a-h1-8KQRNBxO\-+=#]*)/g;
    return validMoves.test(pgn);
};
