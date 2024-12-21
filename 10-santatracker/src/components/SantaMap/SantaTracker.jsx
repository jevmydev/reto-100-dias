import SantaStatus from "./SantaStatus";

import { Marker, Polyline } from "react-leaflet";
import { SANTA_ICON } from "../../constants/const";
import { useSantaTracker } from "../../hooks/useSantaTracker";

export function SantaTracker({ destinations }) {
    const { position, trails } = useSantaTracker(destinations);

    return (
        <>
            {position && trails && (
                <>
                    <SantaStatus position={position} trails={trails} destinations={destinations} />
                    <Marker position={position} icon={SANTA_ICON} />
                    <Polyline positions={trails} color="red" weight={2} />
                </>
            )}
        </>
    );
}

export default SantaTracker;
