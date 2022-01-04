module.exports = {
  safelist: [
    'bg-primary',
    'bg-secondary',
    {
      pattern: /bg-kanoma-(yellow|purple)-\d{3}/,
    },
  ],
  theme: {
    colors: {
      primary: '#43338E',
      secondary: '#F6D330',
      'kanoma-purple': {
        100: '#eceaf3',
        200: '#d9d6e8',
        300: '#c6c1dd',
        400: '#b3add1',
        500: '#a199c6',
        600: '#8e84bb',
        700: '#7b70af',
        800: '#685ba4',
        900: '#554799',
      },
      'kanoma-yellow': {
        100: '#fefaea',
        200: '#fdf6d5',
        300: '#fcf1c0',
        400: '#fbedac',
        500: '#fae997',
        600: '#f9e482',
        700: '#f8e06e',
        800: '#f7db59',
        900: '#f6d744',
      },
    },
  },
};
