import { useMap } from "react-leaflet";
import { UbicationIcon } from "../../elements/Icons";

function ControlBar({ defaultCenter, defaultZoom }) {
    const map = useMap();
    const resetMap = () => map.setView(defaultCenter, defaultZoom);

    return (
        <div className="fixed bottom-0 z-[9999] ml-[10px] mb-[10px]">
            <button className="p-2 bg-white text-black rounded-full border-2 border-zinc-400 hover:bg-zinc-100" onClick={resetMap}>
                <UbicationIcon />
            </button>
        </div>
    );
}

export default ControlBar;
