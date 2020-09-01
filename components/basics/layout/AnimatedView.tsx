import React, { ReactElement } from 'react';
import { Animated, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Prop } from '../../../config/units';

export interface AnimatedProps {
  align?: string;
  justify?: string;
  width?: Prop;
  height?: Prop;
  flex?: number | string;
  marginTop?: Prop;
  marginLeft?: Prop;
  marginRight?: Prop;
  marginBottom?: Prop;
  bottom?: Prop;
  left?: Prop;
  right?: Prop;
  top?: Prop | Animated.AnimatedInterpolation;
  zIndex?: number;
  animation?: Record<string, unknown>;
  style?: StyleProp<ViewStyle>;
  children?: ReactElement | string | ReactElement[];
  absolute?: boolean;
}

const AnimatedView = ({
  children,
  width,
  height,
  flex,
  style,
  align,
  justify = 'center',
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  bottom,
  left,
  right,
  top,
  zIndex,
  animation,
  absolute = false,
}: AnimatedProps): ReactElement => {
  const styles = StyleSheet.create({
    animatedStyle: {
      width,
      height,
      position: absolute ? 'absolute' : 'relative',
    },
  });
  return (
    <Animated.View
      style={[styles.animatedStyle, animation, style]}
      width={width}
      height={height}
      flex={flex}
      align={align}
      justify={justify}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      bottom={bottom}
      top={top}
      left={left}
      right={right}
      zIndex={zIndex}
      animation={animation}
      pointerEvents="box-none"
    >
      {children}
    </Animated.View>
  );
};

export default AnimatedView;
