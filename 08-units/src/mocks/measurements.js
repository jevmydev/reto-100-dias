import { v4 as uuid } from "uuid";

/* 
    Always the second position in units, is the default. 
*/

export const measurements = [
    {
        id: uuid(),
        title: "Longitud",
        units: [
            {
                id: uuid(),
                title: "Kilómetro",
                baseUnitFormula: (value) => value * 1000,
                formula: (value) => value / 1000
            },
            {
                id: uuid(),
                title: "Metro",
                baseUnitFormula: (value) => value,
                formula: (value) => value
            },
            {
                id: uuid(),
                title: "Centímetro",
                baseUnitFormula: (value) => value / 100,
                formula: (value) => value * 100
            },
            {
                id: uuid(),
                title: "Milímetro",
                baseUnitFormula: (value) => value / 1000,
                formula: (value) => value * 1000
            },
            {
                id: uuid(),
                title: "Micrómetro",
                baseUnitFormula: (value) => value / 1000000,
                formula: (value) => value * 1000000
            },
            {
                id: uuid(),
                title: "Nanómetro",
                baseUnitFormula: (value) => value / 1000000000,
                formula: (value) => value * 1000000000
            }
        ]
    },
    {
        id: uuid(),
        title: "Masa",
        units: [
            {
                id: uuid(),
                title: "Tonelada",
                baseUnitFormula: (value) => value * 1000,
                formula: (value) => value / 1000
            },
            {
                id: uuid(),
                title: "Kilogramo",
                baseUnitFormula: (value) => value,
                formula: (value) => value
            },
            {
                id: uuid(),
                title: "Gramo",
                baseUnitFormula: (value) => value / 1000,
                formula: (value) => value * 1000
            },
            {
                id: uuid(),
                title: "Miligramo",
                baseUnitFormula: (value) => value / 1000000,
                formula: (value) => value * 1000000
            },
            {
                id: uuid(),
                title: "Microgramo",
                baseUnitFormula: (value) => value / 1000000000,
                formula: (value) => value * 1000000000
            }
        ]
    },
    {
        id: uuid(),
        title: "Tiempo",
        units: [
            {
                id: uuid(),
                title: "Día",
                baseUnitFormula: (value) => value * 86400,
                formula: (value) => value / 86400
            },
            {
                id: uuid(),
                title: "Hora",
                baseUnitFormula: (value) => value,
                formula: (value) => value
            },
            {
                id: uuid(),
                title: "Minuto",
                baseUnitFormula: (value) => value * 60,
                formula: (value) => value / 60
            },
            {
                id: uuid(),
                title: "Segundo",
                baseUnitFormula: (value) => value / 3600,
                formula: (value) => value * 3600
            },
            {
                id: uuid(),
                title: "Milisegundo",
                baseUnitFormula: (value) => value / 1000,
                formula: (value) => value * 1000
            },
            {
                id: uuid(),
                title: "Microsegundo",
                baseUnitFormula: (value) => value / 1000000,
                formula: (value) => value * 1000000
            }
        ]
    },
    {
        id: uuid(),
        title: "Volumen",
        units: [
            {
                id: uuid(),
                title: "Metro cúbico",
                baseUnitFormula: (value) => value * 1000,
                formula: (value) => value / 1000
            },
            {
                id: uuid(),
                title: "Litro",
                baseUnitFormula: (value) => value,
                formula: (value) => value
            },
            {
                id: uuid(),
                title: "Mililitro",
                baseUnitFormula: (value) => value / 1000,
                formula: (value) => value * 1000
            },
            {
                id: uuid(),
                title: "Centímetro cúbico",
                baseUnitFormula: (value) => value / 1000000,
                formula: (value) => value * 1000000
            },
            {
                id: uuid(),
                title: "Milímetro cúbico",
                baseUnitFormula: (value) => value / 1000000000,
                formula: (value) => value * 1000000000
            }
        ]
    },
    {
        id: uuid(),
        title: "Área",
        units: [
            {
                id: uuid(),
                title: "Kilómetro cuadrado",
                baseUnitFormula: (value) => value * 1000000,
                formula: (value) => value / 1000000
            },
            {
                id: uuid(),
                title: "Metro cuadrado",
                baseUnitFormula: (value) => value,
                formula: (value) => value
            },
            {
                id: uuid(),
                title: "Centímetro cuadrado",
                baseUnitFormula: (value) => value / 10000,
                formula: (value) => value * 10000
            },
            {
                id: uuid(),
                title: "Milímetro cuadrado",
                baseUnitFormula: (value) => value / 1000000,
                formula: (value) => value * 1000000
            }
        ]
    },
    {
        id: uuid(),
        title: "Energía",
        units: [
            {
                id: uuid(),
                title: "Kilojulio",
                baseUnitFormula: (value) => value * 1000,
                formula: (value) => value / 1000
            },
            {
                id: uuid(),
                title: "Julio",
                baseUnitFormula: (value) => value,
                formula: (value) => value
            },
            {
                id: uuid(),
                title: "Kilocaloría",
                baseUnitFormula: (value) => value * 4184,
                formula: (value) => value / 4184
            },
            {
                id: uuid(),
                title: "Caloría",
                baseUnitFormula: (value) => value * 4.184,
                formula: (value) => value / 4.184
            }
        ]
    }
];
