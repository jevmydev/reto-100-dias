import Timer from "../components/Hero/Timer";

import { useEffect } from "react";
import { useEventDate } from "../hooks/useEventDate";

const DEFAULT_DATE_PAES = "2025-12-01";

export function TimerPAES() {
    const { eventDate, updateEventDate } = useEventDate();

    useEffect(() => {
        updateEventDate(DEFAULT_DATE_PAES);
    }, []);

    return (
        <main>
            <section>
                <div className="max-w-screen-md h-screen mx-auto p-4 gap-4 flex flex-col justify-center items-center md:items-start">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">Contador hasta la PAES</h1>
                    <Timer eventDate={eventDate} />
                </div>
            </section>
        </main>
    );
}

export default TimerPAES;
