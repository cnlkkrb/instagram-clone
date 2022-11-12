import {createTheme} from '@shopify/restyle';

const themeSpacing = {
  none: 0,
  auto: 'auto',
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
  xxl: 140,
  xxxl: 160,
  cardP: 20,
  camera: 90,
  logo: 120,
  medium: 80
};

const palette = {
  black: '#060608',
  red: '#EB2359',
  white: '#fff',
  slate: '#333B48',
  grey: '#363636',
  blue: '#0095f6',
  lightblue: '#F0F3FF',
  ligthgrey: '#878787'
};

const theme = createTheme({
  colors: {
    mainBackground: palette.black,
    mainBackground2: palette.red,
    white: palette.white,
    slate: palette.slate,
    grey: palette.grey,
    blue: palette.blue,
    lightblue: palette.lightblue,
    ligthgrey: palette.ligthgrey
  },
  spacing: themeSpacing,
  breakpoints: {},
  textVariants: {
    jumbo: {
      fontWeight: "700",
      fontSize: 32,
    },
    featuredCardEventHeading: {
      fontWeight: "700",
      fontSize: 28,
      lineHeight: 28,
    },
    generalHeading: {
      fontWeight: "700",
      fontSize: 20,
      lineHeight: 24,
    },
    heading1: {
      fontSize: 50,
      fontFamily: 'BeautyMountainsPersonalUse-od7z'
    },
    heading2: {
      fontWeight: "700",
      fontSize: 18,
      lineHeight: 22,
      color: 'white'
    },
    heading3: {
      fontWeight: "700",
      fontSize: 16,
      color: 'white'
    },
    heading4: {
      fontWeight: "700",
      fontSize: 14,
      color: 'white'
    },
    heading5: {
      fontSize: 22,
      color: 'white'
    },
    small: {
      fontWeight: '500',
      fontSize: 12
    },
    smallBold: {
      fontWeight: '700',
      fontSize: 12
    },
    normal: {},
    subTitle: {
      fontSize: 15,
      fontWeight: "700",
      lineHeight: 25,
    },
    subTitleSmall: {
      fontSize: 14,
      fontWeight: "500",
    },
    defaults: {
      fontSize: 14,
    },
  },
  textWeights: {
    regular: {
      fontFamily: "BeautyMountainsPersonalUse-od7z",
    },
    medium: {
      fontFamily: "BeautyMountainsPersonalUse-od7z",
    },
    bold: {
      fontFamily: "BeautyMountainsPersonalUse-od7z",
    },
  },
  boxVariants: {
    card: {
      backgroundColor: "mainBackground2",
      borderRadius: 15,
      padding: "l",
    },
    defaults: {},
  },
  textInputVariants: {
    primary: {},
    success: {},
    error: {},
    defaults: { width: "100%", borderRadius: 8, color: "white" },
  },
  buttonVariants: {
    gradient: {},
    primary: {
      backgroundColor: "blue",
    },
    secondary: {
      backgroundColor: "slate",
    },
    primaryDisabled: {
      backgroundColor: "blue",
      opacity: 0.3,
    },
    danger: {
      backgroundColor: "red",
    },
    black: {
      backgroundColor: "black",
    },
    outline: {
      borderWidth: 1,
      borderColor: "white",
    },
    defaults: {
      paddingHorizontal: "l",
      paddingVertical: "m",
      borderRadius: 8,
      overflow: "hidden",
    },
  },
});

export type Theme = typeof theme;
export default theme;
