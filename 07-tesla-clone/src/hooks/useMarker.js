export const useMarker = (markerRef) => {
    const handleMouseEnter = (e) => {
        const marker = markerRef.current;
        const { left, top, width, height } = e.target.getBoundingClientRect();

        marker.style.setProperty("--left", `${left}px`);
        marker.style.setProperty("--top", `${top}px`);
        marker.style.setProperty("--width", `${width}px`);
        marker.style.setProperty("--height", `${height}px`);

        marker.style.setProperty("opacity", 1);
        marker.style.setProperty("visibility", "visible");
    };

    const handleMouseLeave = () => {
        const marker = markerRef.current;

        marker.style.setProperty("opacity", 0);
        marker.style.setProperty("visibility", "hidden");
    };

    return { handleMouseEnter, handleMouseLeave };
};
