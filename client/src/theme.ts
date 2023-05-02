export const tokens = {
  grey: {
    100: '#f3f6f9',
    200: '#d0dde7',
    300: '#a7c0d2',
    400: '#789eb8',
    500: '#5782a0',
    600: '#446985',
    700: '#38556c',
    800: '#31485b',
    900: '#2d3e4d',
    950: '#1e2933',
  },
  primary: {
    // blue/petrol
    100: '#e4eefa',
    200: '#c2ddf5',
    300: '#8cc3ed',
    400: '#4fa3e1',
    500: '#2988ce',
    600: '#1a6baf',
    700: '#16558e',
    800: '#164976',
    900: '#183e62',
    950: '#0a1929',
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
    500: '#8B85C1',
  },
  background: {
    light: '#001e3c',
    main: '#0a1929',
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
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h2: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h3: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
