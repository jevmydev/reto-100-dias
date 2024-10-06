export const FavIcon = ({ width = "w-11", height = "h-11" }) => {
    return <img className={`${width} ${height} aspect-square rounded-xl object-cover`} src="../../favicon.webp" alt="Icono de NoteScale" decoding="async" />;
};

export const UpIcon = ({ width = "w-5", height = "h-5" }) => {
    return (
        <svg className={`${width} ${height} aspect-square rounded-xl object-cover`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
            />
        </svg>
    );
};

export const DownIcon = ({ width = "w-5", height = "h-5" }) => {
    return (
        <svg className={`${width} ${height} aspect-square rounded-xl object-cover`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3.293,14.707a1,1,0,0,1,1.414-1.414L11,19.586V2a1,1,0,0,1,2,0V19.586l6.293-6.293a1,1,0,0,1,1.414,1.414l-8,8a1,1,0,0,1-.325.216.986.986,0,0,1-.764,0,1,1,0,0,1-.325-.216Z" />
        </svg>
    );
};
