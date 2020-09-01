import React, { ReactElement, ReactNode } from 'react';
import { StyleProp, GestureResponderEvent, ViewStyle } from 'react-native';
import Svg from 'react-native-svg';
import styled from 'styled-components/native';
import { iconSize } from '../../config/sizes';
import { Prop } from '../../config/units';
import { MarginProps, MarginStyles } from '../../config/styles';
import Holder from './layout/Holder';

type IconType = 'button' | 'big';

export interface IconProps extends MarginProps {
  children?: ReactNode;
  type?: IconType;
  rounded?: boolean;
  size?: Prop;
  bgColor?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  color?: string;
  viewBox?: string;
}

interface ButtonStyledProps extends MarginProps {
  size: Prop;
}

// #region

const Button = styled.TouchableOpacity<ButtonStyledProps>`
  justify-content: center;
  align-items: center;
  width: ${({ size }: ButtonStyledProps): Prop => size};
  height: ${({ size }: ButtonStyledProps): Prop => size};
  z-index: 100;
  ${MarginStyles}
`;

// #endregion

const Icon = ({
  type,
  size,
  onPress,
  style,
  children,
  viewBox,
  marginLeft,
  marginTop,
  marginRight,
  marginBottom,
}: IconProps): ReactElement => {
  switch (type) {
    case 'big': {
      return (
        <Holder height={size || iconSize.huge} width={size || iconSize.huge}>
          <Svg viewBox={viewBox || ' 0 0 185 185'} pointerEvents="none">
            {children}
          </Svg>
        </Holder>
      );
    }
    case 'button': {
      return (
        <Button
          onPress={onPress}
          size={size || iconSize.regular}
          style={style}
          marginLeft={marginLeft}
          marginTop={marginTop}
          marginRight={marginRight}
          marginBottom={marginBottom}
        >
          <Svg
            height={size || iconSize.regular}
            width={size || iconSize.regular}
            viewBox={viewBox || ' 0 0 24 24'}
            pointerEvents="none"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            {children}
          </Svg>
        </Button>
      );
    }
    default: {
      return (
        <Svg
          height={size || iconSize.regular}
          width={size || iconSize.regular}
          viewBox={viewBox || ' 0 0 24 24'}
          pointerEvents="none"
        >
          {children}
        </Svg>
      );
    }
  }
};

export default Icon;
