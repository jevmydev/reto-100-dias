import TypingText from "./TypingText";
import TypingKeyBoard from "./TypingKeyBoard";

import { useTyping } from "../../hooks/useTyping";
import { formatWordsTyping } from "../../utils/formats";

export function Typing() {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    const words = formatWordsTyping(text);

    const { typing, keyDown, isKeyUp } = useTyping(words);
    const { key } = keyDown;

    return (
        <section>
            <div className="h-screen max-w-screen-lg mx-auto p-4 py-6">
                <div className="h-full pt-40 flex flex-col gap-14 justify-center items-center">
                    <TypingText words={words} typing={typing} />
                    <TypingKeyBoard keyDown={key} isKeyUp={isKeyUp} />
                </div>
            </div>
        </section>
    );
}

export default Typing;
