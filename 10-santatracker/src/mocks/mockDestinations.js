export const mockDestinations = [
    {
        id: 1,
        arrival: new Date(Date.now() - 5000).toISOString(), // Llegada hace 5 segundos
        departure: new Date(Date.now() - 10000).toISOString(), // Salida en 5 segundos
        city: "North Pole",
        region: "Arctic",
        population: 1000,
        presentsDelivered: 100,
        lat: 84.6,
        lng: 168,
        photo: "https://example.com/northpole.jpg"
    },
    {
        id: 2,
        arrival: new Date(Date.now() + 10000).toISOString(), // Llegada en 10 segundos
        departure: new Date(Date.now() + 20000).toISOString(), // Salida en 20 segundos
        city: "New York",
        region: "USA",
        population: 8500000,
        presentsDelivered: 2000,
        lat: 64.436249,
        lng: -173.233337,
        photo: "https://example.com/newyork.jpg"
    },
    {
        id: 3,
        arrival: new Date(Date.now() + 20000).toISOString(), // Llegada en 30 segundos
        departure: new Date(Date.now() + 40000).toISOString(), // Salida en 40 segundos
        city: "London",
        region: "UK",
        population: 9000000,
        presentsDelivered: 3000,
        lat: 64.736656,
        lng: 177.477371,
        photo: "https://example.com/london.jpg"
    }
];
