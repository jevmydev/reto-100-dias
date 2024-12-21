export const getSantaConfig = () => {
    return (
        JSON.parse(localStorage.getItem("santaConfig")) || {
            position: null,
            trails: [],
            currentIndex: 0,
            isCompleted: false
        }
    );
};

export const setSantaConfig = (config) => {
    localStorage.setItem("santaConfig", JSON.stringify(config));
};
