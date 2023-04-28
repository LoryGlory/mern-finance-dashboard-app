export const tokens = {
    grey: {
        100: "#F4F5F6",
        200: "#D3D5D9",
        300: "#D3D5D9",
        400: "#B3B6BD",
        500: "#9297A0",
        600: "#727883",
        700: "#4C5057",
        800: "#393C41",
        900: "#26282C",
    },
    primary: {
        // blue/petrol
        100: "#EBF9FE",
        200: "#9DDFFB",
        300: "#62CCF9",
        400: "#089AD9",
        500: "#067EB1",
        600: "#045477",
        700: "#034663",
        800: "#02384F",
        900: "#022B3C",
    },
    secondary: {
        // gold
        100: "#FFF9EB",
        200: "#FFEDC2",
        300: "#FFDA85",
        400: "#FFC847",
        500: "#f2b455",
        600: "#FFBC1F",
        700: "#F5AB00",
        800: "#CC8F00",
        900: "#A37200",
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
