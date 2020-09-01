import { Platform, Dimensions, ScaledSize, StatusBar } from 'react-native';
import { fontSize } from './fonts';
import { em } from './units';

// DEVICE SIZES

export function isIPhoneXSize(dim: ScaledSize): boolean {
  return dim.height === 812 || dim.width === 812;
}

export function isIPhoneXrSize(dim: ScaledSize): boolean {
  return dim.height === 896 || dim.width === 896;
}

let cachedDimension: ScaledSize;
export function isIPhoneX(): boolean {
  if (!cachedDimension) {
    cachedDimension = Dimensions.get('window');
  }

  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(cachedDimension) || isIPhoneXrSize(cachedDimension))
  );
}

export function isIPhoneXR(): boolean {
  if (!cachedDimension) {
    cachedDimension = Dimensions.get('window');
  }

  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    isIPhoneXrSize(cachedDimension)
  );
}

export function isXSmall(): boolean {
  if (!cachedDimension) {
    cachedDimension = Dimensions.get('window');
  }

  return cachedDimension.height <= 600 && cachedDimension.width < 570;
}

export function isSmall(): boolean {
  if (!cachedDimension) {
    cachedDimension = Dimensions.get('window');
  }

  return (
    cachedDimension.height <= 800 &&
    cachedDimension.width <= 412 &&
    cachedDimension.height > 500 &&
    cachedDimension.width > 374
  );
}

export function isPlus(): boolean {
  if (!cachedDimension) {
    cachedDimension = Dimensions.get('window');
  }

  return cachedDimension.height === 736 && cachedDimension.width === 414;
}

export function isTablet(): boolean {
  if (!cachedDimension) {
    cachedDimension = Dimensions.get('window');
  }

  return cachedDimension.height >= 768 && cachedDimension.width >= 768;
}

// STATUS BAR

export function getCurrentStatusBarHeight(screenHeight: number): number {
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight ? StatusBar.currentHeight + screenHeight * 0.015 : 0;
  }
  return screenHeight * (isIPhoneX() ? 0.06 : 0.05);
}

// ICON SIZE

export const iconSize = {
  tiny: fontSize.F15 /* 15pts */,
  small: fontSize.F20 /* 20pts */,
  regular: fontSize.F24 /* 24pts */,
  medium: fontSize.F37 /* 30pts */,
  large: em(2.625) /* 42pts */,
  big: em(4.25) /* 68pts */,
  huge: em(6) /* 96pts */,
};

// LOGO SIZE

export const logoSize = {
  small: fontSize.F26 /* 26pts */,
  medium: em(4) /* 64pts */,
  large: em(6.85) /* 110pts */,
};
