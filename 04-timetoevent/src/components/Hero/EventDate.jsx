import { SendIcon } from "../../elements/Icons";
import { parseDate } from "../../tools/functions";

export function EventDate({ eventDate, updateEventDate, setParams }) {
    const actualDate = new Date();
    const parsedDate = parseDate({ date: actualDate });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDate = new FormData(e.target);
        const eventDate = formDate.get("eventDate");

        setParams({
            date: eventDate
        });
        updateEventDate(eventDate);
    };

    return (
        <>
            <div className="flex flex-col gap-6 items-center md:items-start">
                <div className="max-w-prose flex flex-col gap-1 text-center md:text-start">
                    <h1 className="text-gray-100 text-4xl font-bold">TimeToEvent</h1>
                    <h2 className="text-xl">Elige la fecha de tu próximo evento y espérala con esta cuenta regresiva</h2>
                </div>
                <form className="flex flex-col gap-4 items-center sm:flex-row" action="GET" onSubmit={handleSubmit}>
                    <input
                        className="w-full justify-center px-6 py-2 outline-none rounded-full bg-gray-100 text-gray-600 ring-offset-4 ring-gray-100 ring-offset-black duration-300 focus:ring-2 sm:w-auto sm:justify-start"
                        type="datetime-local"
                        name="eventDate"
                        min={parsedDate}
                        defaultValue={eventDate?.value}
                    />
                    <button
                        className="w-full justify-center text-gray-300 px-4 py-2 flex items-center gap-2 cursor-pointer border-2 border-gray-600 rounded-full duration-300 hover:gap-3 hover:translate-x-3 hover:border-gray-100 hover:text-gray-100 sm:w-auto sm:justify-start"
                        type="submit"
                    >
                        Enviar
                        <SendIcon />
                    </button>
                </form>
            </div>
        </>
    );
}

export default EventDate;
