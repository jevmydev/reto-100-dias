export function NavMarker({ markerRef }) {
    return (
        <div
            ref={markerRef}
            className="absolute bg-hover backdrop-blur-lg rounded translate-x-[var(--left)] translate-y-[var(--top)] left-0 top-0 w-[var(--width)] h-[var(--height)] transition-all duration-300 ease-in-out opacity-0 -z-10"
        />
    );
}

export default NavMarker;
