import { Animated, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useState } from 'react';

const useScroll = (
  maxScrollValue = 100,
  endTranslateY = -100,
  endRotation = '0deg',
  endTranslateX = 0,
  endScale = 1,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): [any, (ev: NativeSyntheticEvent<NativeScrollEvent>) => void] => {
  const [frame] = useState<Animated.Value>(new Animated.Value(1));

  const scrollEvent = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const value = event.nativeEvent.contentOffset.y;
    if (value < maxScrollValue) {
      frame.setValue(1 - Math.max(value, 0) / maxScrollValue);
    } else {
      frame.setValue(0);
    }
  };

  const style = {
    transform: [
      {
        translateY: frame.interpolate({
          inputRange: [0, 1],
          outputRange: [endTranslateY, 0],
        }),
      },
      {
        translateX: frame.interpolate({
          inputRange: [0, 1],
          outputRange: [endTranslateX, 0],
        }),
      },
      {
        rotate: frame.interpolate({
          inputRange: [0, 1],
          outputRange: [endRotation, '0deg'],
        }),
      },
      {
        scale: frame.interpolate({
          inputRange: [0, 1],
          outputRange: [endScale, 1],
        }),
      },
    ],
  };

  return [style, scrollEvent];
};

export default useScroll;
