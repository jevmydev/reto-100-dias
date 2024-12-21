import { DESTINATIONS } from "../constants/api";
// import { mockDestinations } from "../mocks/mockDestinations";

const contractDestinations = (destinationsRes) => {
    const { destinations } = destinationsRes;

    return destinations.map((destination) => {
        return {
            id: destination?.id,
            arrival: destination?.arrival,
            departure: destination?.departure,
            city: destination?.city,
            region: destination?.region,
            population: destination?.population,
            presentsDelivered: destination?.presentsDelivered,
            lat: destination?.location?.lat,
            lng: destination?.location?.lng,
            photo: destination?.details?.photos[0]?.url
        };
    });
};

export const getDestinations = async () => {
    const res = await fetch(DESTINATIONS);
    const destinationsRes = await res.json();

    // return mockDestinations;
    return contractDestinations(destinationsRes);
};
