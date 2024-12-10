import { useState } from "react";

export const useUnits = (measurements) => {
    const [measureSelect, setMeasureSelect] = useState(measurements[0]);
    const { units } = measureSelect;

    const [conversion, setConversion] = useState({
        firstInputValue: 1,
        firstInputUnit: units[0],
        secondInputValue: units[0].baseUnitFormula(1),
        secondInputUnit: units[1]
    });

    const handleInput = (e, isFirstInput) => {
        const { value } = e.target;

        if (isFirstInput)
            setConversion((prev) => ({
                ...prev,
                firstInputValue: value,
                secondInputValue: prev.secondInputUnit.formula(prev.firstInputUnit.baseUnitFormula(value))
            }));
        else
            setConversion((prev) => ({
                ...prev,
                firstInputValue: prev.firstInputUnit.formula(prev.secondInputUnit.baseUnitFormula(value)),
                secondInputValue: value
            }));
    };

    const updateMeasureSelect = (e) => {
        const { value } = e.target;
        const newMeasureSelect = measurements.find((measure) => measure.title === value);
        const newUnits = newMeasureSelect.units;

        setMeasureSelect(newMeasureSelect);

        setConversion(() => ({
            firstInputValue: 1,
            firstInputUnit: newUnits[0],
            secondInputValue: newUnits[0].baseUnitFormula(1),
            secondInputUnit: newUnits[1]
        }));
    };

    const updateUnitsSelect = (e, isFirstInput) => {
        const { value } = e.target;
        const newUnitSelect = units.find((unit) => unit.title === value);

        if (isFirstInput)
            setConversion((prev) => ({
                ...prev,
                secondInputValue: prev.firstInputUnit.formula(newUnitSelect.baseUnitFormula(prev.secondInputValue)),
                firstInputUnit: newUnitSelect
            }));
        else
            setConversion((prev) => ({
                ...prev,
                firstInputValue: prev.firstInputUnit.formula(newUnitSelect.baseUnitFormula(prev.secondInputValue)),
                secondInputUnit: newUnitSelect
            }));
    };

    return { measureSelect, units, conversion, handleInput, updateMeasureSelect, updateUnitsSelect };
};
