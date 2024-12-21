import { MapContainer, TileLayer } from "react-leaflet";
import { useDestinations } from "../../hooks/useDestinations";
import { DEFAULT_PROPS_MAP } from "../../constants/const";
import { MAP_URL } from "../../constants/api";

import ControlBar from "./ControlBar";
import Destinations from "./Destinations";
import SantaTracker from "./SantaTracker";

import "leaflet/dist/leaflet.css";

function SantaMap() {
    const { destinations } = useDestinations();

    return (
        <section>
            <div className="h-screen w-screen">
                <MapContainer className="h-full w-full" {...DEFAULT_PROPS_MAP}>
                    <TileLayer url={MAP_URL} />
                    <ControlBar defaultCenter={DEFAULT_PROPS_MAP.center} defaultZoom={DEFAULT_PROPS_MAP.zoom} />
                    {destinations && (
                        <>
                            <Destinations destinations={destinations} />
                            <SantaTracker destinations={destinations} />
                        </>
                    )}
                </MapContainer>
            </div>
        </section>
    );
}

export default SantaMap;
