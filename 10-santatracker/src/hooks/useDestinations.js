import { useEffect, useState } from "react";

import { getDestinations } from "../services/destinations";

export const useDestinations = () => {
    const [destinations, setDestinations] = useState(null);

    const updateDestinations = async () => {
        try {
            const newDestinations = await getDestinations();
            setDestinations(newDestinations);
        } catch (err) {
            throw new Error(`Fetch resolve: ${err}`);
        }
    };

    useEffect(() => {
        updateDestinations();
    }, []);

    return { destinations };
};
