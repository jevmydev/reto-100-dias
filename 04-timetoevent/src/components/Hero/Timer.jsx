import { useEffect, useState } from "react";

export function Timer({ eventDate }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const { date } = eventDate;

        if (!date) return;

        const timer = setInterval(() => {
            const actualDate = new Date();
            const diff = Math.max(0, date - actualDate);

            const diffSeconds = Math.floor((diff / 1000) % 60);
            const diffMinutes = Math.floor((diff / (1000 * 60)) % 60);
            const diffHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

            setTimeLeft({
                days: diffDays,
                hours: diffHours,
                minutes: diffMinutes,
                seconds: diffSeconds
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [eventDate]);

    return (
        <div className="flex justify-center w-full pb-16 gap-1 text-gray-100 md:justify-start">
            <div className="flex flex-col">
                <span className="text-6xl sm:text-8xl md:text-9xl">{String(timeLeft.days).padStart(2, "0")}:</span>
                <span>Días</span>
            </div>
            <div className="flex flex-col">
                <span className="text-6xl sm:text-8xl md:text-9xl">{String(timeLeft.hours).padStart(2, "0")}:</span>
                <span>Horas</span>
            </div>
            <div className="flex flex-col">
                <span className="text-6xl sm:text-8xl md:text-9xl">{String(timeLeft.minutes).padStart(2, "0")}:</span>
                <span>Minutos</span>
            </div>
            <div className="flex flex-col">
                <span className="text-6xl sm:text-8xl md:text-9xl">{String(timeLeft.seconds).padStart(2, "0")}</span>
                <span>Segundos</span>
            </div>
        </div>
    );
}

export default Timer;
