export const GradesAside = () => {
    return (
        <aside className="w-1/4 h-full">
            <form className="flex gap-4 flex-col justify-start items-start" method="GET">
                <label>
                    Puntaje máximo
                    <input type="number" />
                </label>
                <label>
                    Nota máxima
                    <input type="number" />
                </label>
                <label>
                    Nota mínima
                    <input type="number" />
                </label>
                <label>
                    Nota aprobación
                    <input type="number" />
                </label>
                <label>
                    Exigencia
                    <input type="number" />
                </label>
                <label>
                    Incremento de puntaje
                    <input type="range" />
                </label>
                <label>
                    Orden
                    <input type="radio" />
                    <input type="radio" />
                </label>
                <input type="submit" value="Generar tabla" title="Generar tabla" />
            </form>
        </aside>
    );
};

export default GradesAside;
