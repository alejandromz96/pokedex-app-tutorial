import { Platform } from 'react-native';
import { em } from './units';

// FONT WEIGHT

export const fontWeight = Platform.select({
  ios: {
    black: 'Montserrat-Black',
    bold: 'Montserrat-Bold',
    extraBold: 'Montserrat-ExtraBold',
    extraLight: 'Montserrat-ExtraLight',
    light: 'Montserrat-Light',
    regular: 'Montserrat-Regular',
    italic: 'Montserrat-Italic',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
  },
  android: {
    black: 'Montserrat-Black',
    bold: 'Montserrat-Bold',
    extraBold: 'Montserrat-ExtraBold',
    extraLight: 'Montserrat-ExtraLight',
    light: 'Montserrat-Light',
    regular: 'Montserrat-Regular',
    italic: 'Montserrat-Italic',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
  },
  default: {
    black: 'Montserrat-Black',
    bold: 'Montserrat-Bold',
    extraBold: 'Montserrat-ExtraBold',
    extraLight: 'Montserrat-ExtraLight',
    light: 'Montserrat-Light',
    regular: 'Montserrat-Regular',
    italic: 'Montserrat-Italic',
    medium: 'Montserrat-Medium',
    semiBold: 'Montserrat-SemiBold',
  },
});

// FONT STYLE

export const fontStyle = {
  normal: 'normal',
  italic: 'italic',
};

// FONT SIZE

export const fontSize = {
  F70: em(4.375) /* 70pts */,
  F69: em(4.312) /* 69pts */,
  F53: em(3.3125) /* 53pts */,
  F47: em(2.9375) /* 47pts */,
  F45: em(2.8125) /* 45pts */,
  F40: em(2.5) /* 40pts */,
  F37: em(2.31) /* 37pts */,
  F35: em(2.1875) /* 37pts */,
  F32: em(2) /* 32pts */,
  F30: em(1.875) /* 30pts */,
  F29: em(1.8125) /* 29pts */,
  F28: em(1.75) /* 28pts */,
  F27: em(1.6875) /* 27pts */,
  F26: em(1.625) /* 26pts */,
  F25: em(1.5625) /* 25pts */,
  F24: em(1.5) /* 24pts */,
  F23: em(1.4375) /* 23pts */,
  F22: em(1.375) /* 22pts */,
  F21: em(1.3125) /* 21pts */,
  F20: em(1.25) /* 20pts */,
  F19: em(1.1875) /* 19pts */,
  F18: em(1.125) /* 18pts */,
  F17: em(1.0625) /* 17pts */,
  F16: em(1) /* 16pts */,
  F15: em(0.9375) /* 15pts */,
  F14: em(0.875) /* 14pts */,
  F13: em(0.8125) /* 13pts */,
  F12: em(0.75) /* 12pts */,
  F11: em(0.6875) /* 11pts */,
  F10: em(0.625) /* 10pts */,
  F09: em(0.5625) /* 9pts */,
  F08: em(0.5) /* 8pts */,
  F07: em(0.43) /* 7pts */,
};
