import Timer from "../components/Hero/Timer";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useEventDate } from "../hooks/useEventDate";

export function TimerPage() {
    const { eventDate, updateEventDate } = useEventDate();
    const [params] = useSearchParams();

    useEffect(() => {
        if (params.size === 0) return;

        updateEventDate(params.get("date"));
    }, []);

    return (
        <main>
            <section>
                <div className="max-w-screen-md h-screen mx-auto p-4 gap-4 flex flex-col justify-center items-center md:items-start">
                    <Timer eventDate={eventDate} />
                </div>
            </section>
        </main>
    );
}

export default TimerPage;
