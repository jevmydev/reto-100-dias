import L from "leaflet";

export const DEFAULT_PROPS_MAP = {
    center: [20, 0],
    maxBounds: [
        [-Infinity, -180],
        [Infinity, 180]
    ],
    zoom: [2],
    minZoom: [2],
    maxZoom: [10],
    maxBoundsViscosity: 1
};

export const SANTA_ICON = new L.Icon({
    iconUrl: "/santa.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

export const MARKER_ICON = new L.Icon({
    iconUrl: "/marker.png",
    iconSize: [30, 30],
    iconAnchor: [20, 40]
});
