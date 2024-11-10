export function Loading() {
    return (
        <div className="absolute top-0 h-full flex justify-center items-center">
            <div className="border-4 border-dark rounded-full w-16 h-16 animate-spin border-t-light"></div>
        </div>
    );
}

export default Loading;
