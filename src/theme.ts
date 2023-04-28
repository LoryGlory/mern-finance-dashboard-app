export const tokens = {
    grey: {
        100: '#e1e3e6',
        200: '#c2c7cd',
        300: '#9ca2ac',
        400: '#767f8b',
        500: '#5c6370',
        600: '#484f59',
        700: '#3c4049',
        800: '#33353c',
        900: '#26282c',
    },
    primary: {
        // blue/petrol
        100: '#d6f1f7',
        200: '#b2e2ef',
        300: '#7dcce3',
        400: '#41adcf',
        500: '#2691b4',
        600: '#247ba0',
        700: '#22607c',
        800: '#244f66',
        900: '#224357',
    },
    secondary: {
        // gold
        100: '#fff8c5',
        200: '#fff285',
        300: '#ffe446',
        400: '#ffd31b',
        500: '#f5ab00',
        600: '#e28800',
        700: '#bb5f02',
        800: '#984908',
        900: '#7c3c0b',
    },
    tertiary: {
        // indigo
        500: "#8B85C1",
    },
    background: {
        light: "#D7F2FE",
        main: "#022B3C",
    },
};

// mui theme settings
export const themeSettings = {
    palette: {
        primary: {
            ...tokens.primary,
            main: tokens.primary[500],
            light: tokens.primary[400],
        },
        secondary: {
            ...tokens.secondary,
            main: tokens.secondary[500],
        },
        tertiary: {
            ...tokens.tertiary,
        },
        grey: {
            ...tokens.grey,
            main: tokens.grey[500],
        },
        background: {
            default: tokens.background.main,
            light: tokens.background.light,
        },
    },
    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 32,
        },
        h2: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 24,
        },
        h3: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 20,
            fontWeight: 800,
            color: tokens.grey[200],
        },
        h4: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 14,
            fontWeight: 600,
            color: tokens.grey[300],
        },
        h5: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            fontWeight: 400,
            color: tokens.grey[500],
        },
        h6: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 10,
            color: tokens.grey[700],
        },
    },
};
