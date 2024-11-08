import TypingText from "./TypingText";
import TypingKeyBoard from "./TypingKeyBoard";

import { useTyping } from "../../hooks/useTyping";

export function Typing() {
    const { keyDown, isKeyUp } = useTyping();
    const { key } = keyDown;

    return (
        <section>
            <div className="h-screen max-w-screen-lg mx-auto p-4 py-6">
                <div className="h-full pt-40 flex flex-col gap-14 justify-center items-center">
                    <TypingText />
                    <TypingKeyBoard keyDown={key} isKeyUp={isKeyUp} />
                </div>
            </div>
        </section>
    );
}

export default Typing;
