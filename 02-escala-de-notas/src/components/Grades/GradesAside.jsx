import { UpIcon, DownIcon } from "../../elements/Icons";

import { inputGrades } from "../../mocks/inputGrades";

export const GradesAside = () => {
    return (
        <aside className="w-1/5 h-full">
            <form className="flex gap-6 flex-col items-start" method="GET">
                {inputGrades.map((input) => {
                    const { id, label, name, type, defaultValue, min, max } = input;

                    return (
                        <label key={id} className="flex items-center justify-between gap-4 w-full">
                            {label}
                            <input
                                className="flex justify-center items-center bg-slate-100 text-slate-950 p-2 w-16 h-full leading-8 outline-none border-2 border-transparent rounded-xl transition-all hover:bg-slate-50 focus:border-purple-600 focus:ring-2 focus:ring-indigo-400"
                                autoComplete="off"
                                name={name}
                                type={type}
                                defaultValue={defaultValue}
                                min={min}
                                max={max}
                            />
                        </label>
                    );
                })}
                <label className="flex items-center justify-between gap-4 w-full">
                    Incremento
                    <input className="w-full h-2 bg-slate-100 rounded-xl appearance-none cursor-pointer accent-purple-600" type="range" min="1" max="10" defaultValue="1" />
                </label>
                <div className="flex gap-4">
                    <label className="flex items-center justify-between gap-2 w-full">
                        <span>Orden</span>
                        <UpIcon />
                        <input className="accent-purple-600 rounded-xl cursor-pointer" name="order" value="increasing" type="radio" defaultChecked />
                    </label>
                    <label className="flex items-center justify-between gap-2 w-full">
                        <DownIcon />
                        <input className="accent-purple-600 rounded-xl cursor-pointer" name="order" value="decreasing" type="radio" />
                    </label>
                </div>
                <button
                    className="w-full bg-transparent text-indigo-400 border border-indigo-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                    type="submit"
                >
                    <span className="bg-indigo-400 shadow-indigo-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Generar tabla
                </button>
            </form>
        </aside>
    );
};

export default GradesAside;
