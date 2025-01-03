import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    textWhite: '#fff',
    primaryBackGround: '#e1e4e8 ',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    tabTitle: 20,
  },

  fonts: {
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
