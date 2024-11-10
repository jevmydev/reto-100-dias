import TypingText from "./TypingText";
import TypingKeyBoard from "./TypingKeyBoard";
import Loading from "../../elements/Loading";
import GameOver from "../../elements/GameOver";

import { useQuote } from "../../hooks/useQuote";
import { useTyping } from "../../hooks/useTyping";
import { formatWordsTyping } from "../../utils/formats";

export function Typing() {
    const { quote } = useQuote();

    const text = quote?.content || null;
    const words = formatWordsTyping(text);

    const { gameOver, typing, keyDown, isKeyUp } = useTyping(words);
    const { key } = keyDown;

    return (
        <section>
            <div className="h-screen max-w-screen-lg mx-auto p-4 py-6">
                <div className="h-full pt-40 flex flex-col gap-14 justify-center items-center">
                    {!gameOver && text ? (
                        <>
                            <TypingText words={words} typing={typing} />
                            <TypingKeyBoard keyDown={key} isKeyUp={isKeyUp} />{" "}
                        </>
                    ) : !gameOver && !text ? (
                        <Loading />
                    ) : (
                        <GameOver />
                    )}
                </div>
            </div>
        </section>
    );
}

export default Typing;
