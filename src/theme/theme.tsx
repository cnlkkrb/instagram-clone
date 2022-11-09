import {createTheme} from '@shopify/restyle';

const palette = {
  grey: '#D1D6DB',
  red: '#EB2359',
};

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
};

const theme = createTheme({
  colors: {
    mainBackground: palette.grey,
    mainBackground2: palette.red,
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
      fontWeight: "700",
      fontSize: 24,
      lineHeight: 24,
    },
    heading2: {
      fontWeight: "700",
      fontSize: 18,
      lineHeight: 22,
    },
    heading3: {
      fontWeight: "700",
      fontSize: 16,
    },
    normal: {},
    subTitle: {
      fontSize: 15,
      fontWeight: "500",
      lineHeight: 25,
    },
    subTitleSmall: {
      fontSize: 14,
      fontWeight: "500",
    },
    defaults: {
      fontSize: 14,
      fontFamily: "Cera Pro",
    },
  },
  textWeights: {
    regular: {
      fontFamily: "InstagramSansHeadline-Regular",
    },
    medium: {
      fontFamily: "InstagramSansHeadline-Regular",
    },
    bold: {
      fontFamily: "InstagramSansHeadline-Regular",
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
});

export type Theme = typeof theme;
export default theme;
