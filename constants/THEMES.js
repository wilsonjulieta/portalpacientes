const DEFAULT = {
    colorPrimary: "#e0115f",
    colorSecondary: "blue",
    colorNeutral: "#ddd",
    colorError: "#aa0000",
    colorError2: "#ffaaaa",
    colorSuccess: "green",
    cardHeaderPrimaryGradientColors: ["purple", "violet"],
    cardHeaderSecondaryGradientColors: ["#ff66cc", "pink"],
    turnStatusColors: {
        COMPLETED: "green",
        CANCELLED: "orange",
        ABSENT: "red"
    }
};

const THEMES = [
    {
        ...DEFAULT,
        colorPrimary: "#073763",
        colorSecondary: "#f44336",
        colorNeutral: "#d6d9ed",
        colorSuccess: "green",
        cardHeaderPrimaryGradientColors: ["#073763", "#839bb1"],
        cardHeaderSecondaryGradientColors: ["#a30000", "#db4c4c"],
    },
    {
        ...DEFAULT,
        colorPrimary: "purple",
        colorSecondary: "violet",
        colorError: "orange",
    },
    {
        ...DEFAULT,
        colorPrimary: "orange",
        colorSecondary: "brown",
        cardHeaderPrimaryGradientColors: ["orange", "yellow"],
        cardHeaderSecondaryGradientColors: ["brown", "orange"],
    },
    {
        ...DEFAULT,
        colorPrimary: "turquoise",
        colorSecondary: "orangeRed",
        cardHeaderPrimaryGradientColors: ["turquoise", "cyan"],
    },
    {
        ...DEFAULT,
        colorPrimary: "purple",
        colorSecondary: "magenta",
        colorNeutral: "#f6d1de",
        colorError: "red",
        colorSuccess: "green",
        cardHeaderPrimaryGradientColors: ["purple", "#c8a2c8"],
        cardHeaderSecondaryGradientColors: ["magenta", "pink"],
    },
    {
        ...DEFAULT,
        colorPrimary: "#087C9F",
        colorSecondary: "#C62828",
        colorError: "red",
        colorSuccess: "green",
        cardHeaderPrimaryGradientColors: ["#087C9F", "#00a9a9"],
        cardHeaderSecondaryGradientColors: ["#C62828", "red"],
    },
    {
        ...DEFAULT,
        colorPrimary: "#087C9F",
        colorSecondary: "#C62828",
        colorError: "red",
        colorSuccess: "green",
        cardHeaderPrimaryGradientColors: ["#087C9F", "#00a9a9"],
        cardHeaderSecondaryGradientColors: ["blue", "lightblue"],
    },
    {
        ...DEFAULT,
        colorPrimary: "red",
        colorSecondary: "purple",
        colorError: "red",
        colorSuccess: "green",
        cardHeaderPrimaryGradientColors: ["yellow", "red"],
        cardHeaderSecondaryGradientColors: ["blue", "lightblue"],
        turnStatusColors: {
            COMPLETED: "black",
            CANCELLED: "pink",
            ABSENT: "violet"
        }
    },
]

//PARA QUE FUNCIONEN LAS BOX SHADOWS, LOS COLORES DEBERIAN ESTAR EN HEXA

const chroma = require('chroma-js');

function colorToHex(color) {
    const colorObj = chroma(color);
    return colorObj.hex();
}

THEMES.forEach((elem, index) => {
    THEMES[index] = {
        ...THEMES[index],
        colorPrimary: colorToHex(elem.colorPrimary),
        colorSecondary: colorToHex(elem.colorSecondary),
        colorNeutral: colorToHex(elem.colorNeutral),
        colorError: colorToHex(elem.colorError),
        colorError2: colorToHex(elem.colorError2),
        colorSuccess: colorToHex(elem.colorSuccess),
        cardHeaderPrimaryGradientColors: [colorToHex(elem.cardHeaderPrimaryGradientColors[0]), colorToHex(elem.cardHeaderPrimaryGradientColors[1])],
        cardHeaderSecondaryGradientColors: [colorToHex(elem.cardHeaderSecondaryGradientColors[0]), colorToHex(elem.cardHeaderSecondaryGradientColors[1])],
    }
});

export default THEMES;