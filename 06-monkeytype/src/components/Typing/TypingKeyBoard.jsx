import { KEY_ROWS } from "../../mocks/keyRows";

export function TypingKeyBoard({ keyDown, isKeyUp }) {
    return (
        <div className="flex flex-col items-center gap-2">
            {KEY_ROWS.map((keyRow, index) => {
                return (
                    <div className="flex flex-1 justify-center items-center gap-2 text-xs text-dark" key={`KeyRow ${index}`}>
                        {keyRow.map((key) => {
                            const isPressed = key === keyDown && isKeyUp;

                            const classIsPressKey = isPressed ? "bg-keypress" : "bg-keys";
                            const classIsSpaceKey = key === " " ? "px-20" : "px-2 sm:px-4";

                            return (
                                <button className={`flex items-center py-3 rounded-md duration-75 ${classIsPressKey} ${classIsSpaceKey}`} key={`Key ${key}`}>
                                    {key === " " ? "space" : key}
                                </button>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default TypingKeyBoard;
