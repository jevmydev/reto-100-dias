export function SantaStatus({ position, destinations }) {
    const { lat: latPos } = position;
    const destination = destinations.find(({ lat }) => lat === latPos);

    if (!destination) {
        return <div className="fixed top-0 right-0 bg-white p-4 rounded-sm z-[9999] mr-[10px] mt-[10px]">No destination found</div>;
    }

    const arrivalTime = new Date(destination.arrival).toLocaleTimeString();
    const departureTime = new Date(destination.departure).toLocaleTimeString();

    return (
        <div className="fixed top-0 right-0 bg-white p-4 rounded-sm z-[9999] mr-[10px] mt-[10px] shadow-lg border border-gray-300">
            <div className="mt-2">
                <h1 className="font-bold text-xl">Santa Tracker</h1>
                <h2 className="font-bold text-xl">
                    {destination.city}, {destination.region}
                </h2>
                <p>Llegada: {arrivalTime}</p>
                <p>Salida: {departureTime}</p>
                <p className="max-w-60">{`En ${destination.city} con más de ${destination.population} personas, Santa ha entregado ${destination.presentsDelivered} regalos`}</p>
            </div>
        </div>
    );
}

export default SantaStatus;
