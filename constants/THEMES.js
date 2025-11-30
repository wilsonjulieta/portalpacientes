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
        colorPrimary: "#073763",
        colorSecondary: "#f44336",
        colorNeutral: "#d6d9ed",
        colorSuccess: "green",
        cardHeaderPrimaryGradientColors: ["#073763", "#839bb1"],
        cardHeaderSecondaryGradientColors: ["#a30000", "#db4c4c"],
    },
    {
        ...DEFAULT,
        colorPrimary: "#539DD9",
        colorSecondary: "#19B882",
        colorNeutral: "#d6d9ed",
        colorSuccess: "green",
        cardHeaderPrimaryGradientColors: ["#539DD9", "#2952C0"],
        cardHeaderSecondaryGradientColors: ["#19B882", "#66B882"],
    },
    {
        ...DEFAULT,
        colorPrimary: "#3c689e",
        colorSecondary: "#6e9322",
        colorNeutral: "#d6d9ed",
        colorSuccess: "green",
        cardHeaderPrimaryGradientColors: ["#3c689e", "#cdd7e1"],
        cardHeaderSecondaryGradientColors: ["#6e9322", "#c0ce94"],
    },
    {
        ...DEFAULT,
        colorPrimary: "#121492ff",
        colorSecondary: "#26967eff",
        colorNeutral: "#d6d9ed",
        colorSuccess: "green",
        cardHeaderPrimaryGradientColors: ["#121492ff", "#cdd7e1"],
        cardHeaderSecondaryGradientColors: ["#26967eff", "#c0ce94"],
    },
    {
        ...DEFAULT,
        colorPrimary: "#121492ff",
        colorSecondary: "#26967eff",
        colorNeutral: "#d6d9ed",
        colorSuccess: "green",
        cardHeaderPrimaryGradientColors: ["#121492ff", "#cdd7e1"],
        cardHeaderSecondaryGradientColors: ["#26967eff", "#c0ce94"],
    },
    {
        ...DEFAULT,
        colorPrimary: "turquoise",
        colorSecondary: "orangeRed",
        cardHeaderPrimaryGradientColors: ["turquoise", "cyan"],
    }

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