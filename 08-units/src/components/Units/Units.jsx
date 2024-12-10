import { useUnits } from "../../hooks/useUnits";
import { EqualIcon } from "../../elements/icons";
import { measurements } from "../../mocks/measurements";

function Units() {
    const { measureSelect, units, conversion, handleInput, updateMeasureSelect, updateUnitsSelect } = useUnits(measurements);

    return (
        <section className="units">
            <div className="units_center center">
                <div className="units_box">
                    <h2 className="units_subtitle subtitle">Conversor de Unidades</h2>
                    <div className="units_measure measure">
                        <select className="measure_select" defaultValue={measureSelect.title} onChange={updateMeasureSelect}>
                            {measurements.map((measure) => {
                                const { title, id } = measure;

                                return (
                                    <option key={id} value={title}>
                                        {title}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="units_converter converter">
                        <div className="converter_box">
                            <input className="converter_input" type="number" value={conversion.firstInputValue} onChange={(e) => handleInput(e, true)} />
                            <select className="converter_select" value={conversion.firstInputUnit.title} onChange={(e) => updateUnitsSelect(e, true)}>
                                {units.map((unit) => {
                                    const { title, id } = unit;

                                    return (
                                        <option key={id} value={title}>
                                            {title}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <EqualIcon />
                        <div className="converter_box">
                            <input className="converter_input" type="number" value={conversion.secondInputValue} onChange={(e) => handleInput(e, false)} />
                            <select className="converter_select" value={conversion.secondInputUnit.title} onChange={(e) => updateUnitsSelect(e, false)}>
                                {units.map((unit) => {
                                    const { title, id } = unit;

                                    return (
                                        <option key={id} value={title}>
                                            {title}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Units;
