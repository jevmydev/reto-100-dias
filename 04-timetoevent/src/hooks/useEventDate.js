import { useState } from "react";

export const useEventDate = () => {
    const [eventDate, setEventDate] = useState("");

    const updateEventDate = (date) => {
        if (!date) return;

        const newEventDate = {
            date: new Date(date),
            value: date
        };

        setEventDate(newEventDate);
    };

    return { eventDate, updateEventDate };
};
