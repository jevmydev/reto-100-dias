export const FavIcon = ({ width = "w-11", height = "h-11" }) => {
    return <img className={`${width} ${height} aspect-square rounded object-cover`} src="/favicon.webp" alt="Icono de NoteScale" decoding="async" />;
};
