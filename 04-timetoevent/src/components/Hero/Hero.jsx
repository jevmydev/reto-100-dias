import Timer from "./Timer";
import EventDate from "./EventDate";
import Blur from "../../elements/Blur";

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useEventDate } from "../../hooks/useEventDate";

export function Hero() {
    const { eventDate, updateEventDate } = useEventDate();
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        if (params.size === 0) return;

        updateEventDate(params.get("date"));
    }, []);

    return (
        <>
            <section>
                <div className="max-w-screen-md h-screen mx-auto p-4 gap-4 flex flex-col justify-center items-center md:items-start">
                    <Timer eventDate={eventDate} />
                    <EventDate eventDate={eventDate} updateEventDate={updateEventDate} setParams={setParams} />
                    <Blur bottom={"bottom-20"} right="right-96" />
                </div>
            </section>
        </>
    );
}

export default Hero;
