import { Dimensions } from 'react-native';

// PROP

export type Prop = string | number;

// EM

const { width, height } = Dimensions.get('window');

const parameterToCalculateSizesFrom = Math.min(width, height);

const aspectRatio = parameterToCalculateSizesFrom / Math.max(width, height);

let ratioX: number;
if (parameterToCalculateSizesFrom < 375) {
  if (parameterToCalculateSizesFrom < 320) {
    ratioX = 0.75;
  } else {
    ratioX = 0.875;
  }
} else {
  ratioX = 1;
}

let baseUnit: number;
if (parameterToCalculateSizesFrom < 376) {
  baseUnit = 16;
} else if (parameterToCalculateSizesFrom < 415) {
  baseUnit = 17;
} else if (parameterToCalculateSizesFrom < 1024) {
  baseUnit = 20;
} else {
  baseUnit = 25;
}

const unit = baseUnit * ratioX;
const aspectRatioUnit = baseUnit * aspectRatio;

export function em(value: number, noUnits = false, useAspectRatio = false): Prop {
  if (noUnits) {
    return unit * value;
  }
  if (useAspectRatio) {
    return aspectRatioUnit * value;
  }
  return `${unit * value}px`;
}

// Seconds to text hh:mm:ss

const toDoubleDigit = (number: number): string => `0${number}`.slice(-2);

export const formatToSeconds = (s: number): string => {
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s - hours * 3600) / 60);
  const seconds = s - hours * 3600 - minutes * 60;
  let text = '';
  if (hours) {
    text += `${hours}:`;
  }
  if (minutes < 10 && hours) {
    text += `${toDoubleDigit(minutes)}:`;
  } else {
    text += `${minutes}:`;
  }
  text += `${toDoubleDigit(seconds)}`;
  return text;
};
