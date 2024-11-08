export function FavIcon({ width = "w-12", height = "h-12" }) {
    return <img className={`${width} ${height} aspect-square rounded object-cover`} src="/favicon.webp" alt="Icono de MonkeyType" decoding="async" />;
}
