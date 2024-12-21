import { useState, useEffect, useRef } from "react";
import { getSantaConfig, setSantaConfig } from "../utils/storage";

export const useSantaTracker = (destinations) => {
    const [position, setPosition] = useState(null);
    const [trails, setTrails] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);

    const currentIndex = useRef(0);
    const trackingInterval = useRef(null);

    const initializeCurrentIndex = () => {
        const now = new Date();

        for (let i = 0; i < destinations.length; i++) {
            const arrivalTime = new Date(destinations[i].arrival);
            const departureTime = new Date(destinations[i].departure);

            if (now >= arrivalTime && now <= departureTime) {
                return i;
            }
            if (now < arrivalTime) {
                return Math.max(0, i - 1);
            }
        }
        return destinations.length;
    };

    const updateSantaPosition = () => {
        const now = new Date();

        const updatedTrails = destinations
            .filter((destination, index) => {
                const departureTime = new Date(destination.departure);
                return now > departureTime || index <= currentIndex.current;
            })
            .map((destination) => ({ lat: destination.lat, lng: destination.lng }));

        setTrails(updatedTrails);

        if (currentIndex.current >= destinations.length) {
            setIsCompleted(true);
            setSantaConfig({ ...getSantaConfig(), isCompleted: true });
            clearInterval(trackingInterval.current);
            return;
        }

        const destination = destinations[currentIndex.current];
        const arrivalTime = new Date(destination.arrival);
        const departureTime = new Date(destination.departure);

        if (now >= arrivalTime && now <= departureTime) {
            const currentPosition = {
                lat: destination.lat,
                lng: destination.lng
            };

            setPosition(currentPosition);
            setSantaConfig({
                position: currentPosition,
                trails: updatedTrails,
                currentIndex: currentIndex.current,
                isCompleted
            });
        } else if (now > departureTime) {
            currentIndex.current += 1;
        }
    };

    useEffect(() => {
        const santaConfig = getSantaConfig();

        if (santaConfig.position === null) {
            currentIndex.current = initializeCurrentIndex();
            setTrails(destinations.slice(0, currentIndex.current).map((destination) => ({ lat: destination.lat, lng: destination.lng })));
        } else {
            setPosition(santaConfig.position);
            setTrails(santaConfig.trails);
            setIsCompleted(santaConfig.isCompleted);
            currentIndex.current = santaConfig.currentIndex;
        }

        trackingInterval.current = setInterval(updateSantaPosition, 60000);

        return () => clearInterval(trackingInterval.current);
    }, []);

    return { position, trails, isCompleted };
};
