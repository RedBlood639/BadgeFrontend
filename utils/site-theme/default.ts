const baseColor = {
  white: '#ffffff',
  black: { regular: '#000000', 100: '#140A01', 200: '#434343' },
  gray: {
    regular: '#A28888',
    normal: '#ABB1BB',
    100: '#fAfAfA',
    200: '#F8F8F8',
    300: '#f4f4f4',
    400: '#F3F3F3',
    500: '#F2F2F2',
    600: '#EdEdEd',
    700: '#E0E0E0',
    750: '#C8BEBE',
    800: '#BDBDBD',
    900: '#828282',
    1000: '#4F4F4F',
  },
  transparent: 'transparent',
  primary: {
    regular: '#F00000',
    hover: '#da2f17',
    alternate: '#FA4C4C',
    light: '#FC7171',
  },
  secondary: {
    regular: '#ff5b60',
    hover: '#FF282F',
    alternate: '#fc5c63',
  },
  yellow: {
    regular: '#FF7A00',
    hover: '#FFB369',
    alternate: '#f4c243',
  },

  green: {
    regular: '#27AE60',
    normal: '#4ECDC4',
    dark: '#166A1F',
  },
  pink: {
    highlight: '#FC7171',
  },
  fog: {
    regular: '#DCDCFF',
    light: '#F8F8FF',
    alternate: '#F3F3FF',
  },
  blue: {
    regular: '#36558F',
    dark: '#284376',
    light: '#2D9CDB',
    link: '#004FB9',
  },
  orange: {
    regular: '#F77D0E',
    dark: '#DC6E0A',
  },
  red: '#BE0000',
  price: '#EF3900',
  badge: '#CA180077',
  success: '',
  warning: '',
  muted: '',
  highlight: '',
  background: '#F2F2F2',
}

export const defaultTheme = {
  colors: {
    ...baseColor,
    body: {
      bg: 'white',
    },
    borderColor: 'gray.500',
    headingsColor: 'text.bold',
    subheadingsColor: '',
    textColor: 'text.regular',
    buttonColor: 'white',
    buttonBgColor: 'orange.regular',
    buttonBgHoverColor: 'orange.hover',
    buttonBorderColor: 'orange.regular',
    linkColor: 'orange.regular',
  },
  // btnBorderRadius: '',
  breakpoints: ['767px', '991px', '70em', '90em'],
  // space: [0, 4, 8, 10, 15, 20, 25, 30, 40, 56],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // export const space = [0, 0.25, 0.5, 1, 1.5, 3].map(n => n + 'rem')

  // fontSizes: [10, 13, 15, 19, 21, 30, 45],
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontSizes: {
    ms: 10,
    xs: 12,
    sm: 14,
    base: 16,
    mm: 18,
    md: 19,
    badge: 17,
    lg: 21,
    xl: 24,
    xl2: 27,
    '2xl': 30,
    '3xl': 36,
    '4xl': 42,
    '5xl': 48,
  },
  // fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontWeights: {
    body: 400,
    heading: 700,
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    bolder: 800,
  },
  fonts: {
    base: 'Montserrat',
    montserrat: 'Montserrat',
  },

  // Custom Theme keys
  customs: {
    transition: '0.35s ease',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  boxSizing: 'border-box',
  shadows: {
    base: '0 3px 6px rgba(0, 0, 0, 0.16)',
    medium: '0 6px 12px rgba(0, 0, 0, 0.16)',
    big: '0 21px 36px rgba(0, 0, 0, 0.16)',
    header: '0 1px 2px rgba(0, 0, 0, 0.06)',
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
}
// xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px

// 0  375 480 768 992 1200 1400
