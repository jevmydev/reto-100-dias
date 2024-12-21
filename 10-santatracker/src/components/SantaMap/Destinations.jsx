import { Marker, Popup } from "react-leaflet";
import { MARKER_ICON } from "../../constants/const";

export function Destinations({ destinations }) {
    return destinations.map((destination) => {
        const { id, city, region, population, presentsDelivered, lat, lng, photo } = destination;

        return (
            <Marker key={id} position={[lat, lng]} icon={MARKER_ICON}>
                <Popup>
                    <div className="flex flex-col gap-4">
                        <div>{photo && <img className="w-full h-full bg-cover" src={photo} loading="lazy" decoding="async"></img>}</div>
                        <div>
                            <h3 className="font-bold">{`${city} (${region})`}</h3>
                            <p>{`En ${city} con más de ${population} personas, Santa ha entregado ${presentsDelivered} regalos`}</p>
                        </div>
                    </div>
                </Popup>
            </Marker>
        );
    });
}

export default Destinations;
