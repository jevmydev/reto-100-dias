function TypingLetter({ letter, letterIndex, wordIndex, typing }) {
    const { positionLetter, positionWord, errors } = typing;

    const isCurrentWord = wordIndex === positionWord;
    const isCurrentLetter = letterIndex === positionLetter && isCurrentWord;
    const isTypedLetter = wordIndex < positionWord || (isCurrentWord && letterIndex < positionLetter);

    const hasError = errors.some((error) => error.wordIndex === wordIndex && error.letterIndex === letterIndex);

    let letterClass = "h-[36px] border-l-2 transition duration-75 ";

    if (isCurrentLetter) letterClass += "text-light border-dark animate-pulse";
    else if (isTypedLetter) letterClass += hasError ? "text-failure border-transparent" : "text-dark border-transparent";
    else letterClass += "text-light border-transparent";

    return <span className={letterClass}>{letter}</span>;
}

function TypingWord({ word, wordIndex, typing }) {
    return (
        <div className="flex">
            {word.split("").map((letter, letterIndex) => (
                <TypingLetter letter={letter} letterIndex={letterIndex} wordIndex={wordIndex} typing={typing} key={`Letter ${letter}#${letterIndex}`} />
            ))}
        </div>
    );
}

export function TypingText({ words, typing }) {
    return (
        <div className="w-full flex justify-center items-center max-w-screen-md">
            <div className="flex flex-wrap justify-center items-center gap-x-3 w-full font-bold text-justify text-3xl">
                {words.map((word, wordIndex) => (
                    <TypingWord word={word} wordIndex={wordIndex} typing={typing} key={`Word ${word}#${wordIndex}`} />
                ))}
            </div>
        </div>
    );
}

export default TypingText;
