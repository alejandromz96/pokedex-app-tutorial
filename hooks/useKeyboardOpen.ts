import { useState, useCallback, useEffect } from 'react';
import { Keyboard, Platform, Animated, Easing } from 'react-native';

interface HookReturn {
  isOpen: boolean;
  value: Animated.Value;
}

/**
 * animation duration for android, where keyboardDidShow doesn't provide timing
 */
const DEFAULT_DURATION = 250;

const useKeyboardOpen = (onKeyboardHide?: () => void): HookReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [value] = useState<Animated.Value>(new Animated.Value(1));

  const onKeyboardWillShow = useCallback((e) => {
    console.log({ e });
    Animated.timing(value, {
      duration: e.duration || DEFAULT_DURATION,
      toValue: 0,
      easing: Easing.elastic(1),
      useNativeDriver: false,
    }).start();
    setIsOpen(true);
  }, []);
  const onKeyboardWillHide = useCallback(
    (e) => {
      Animated.timing(value, {
        duration: e.duration || DEFAULT_DURATION,
        toValue: 1,
        easing: Easing.elastic(1),
        useNativeDriver: false,
      }).start();
      if (onKeyboardHide) {
        onKeyboardHide();
      }
      setIsOpen(false);
    },
    [onKeyboardHide],
  );
  useEffect(() => {
    const willShowSub = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      onKeyboardWillShow,
    );
    const willHideSub = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      onKeyboardWillHide,
    );
    return (): void => {
      willShowSub.remove();
      willHideSub.remove();
    };
  }, [onKeyboardWillHide, onKeyboardWillShow]);
  return { isOpen, value };
};

export default useKeyboardOpen;
