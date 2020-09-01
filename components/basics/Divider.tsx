import React, { ReactElement } from 'react';
import styled from 'styled-components/native';
import { ViewStyle, View } from 'react-native';
import { Prop } from '../../config/units';
import { MarginStyles, MarginProps } from '../../config/styles';
import colors from '../../config/colors';

interface SeparatorProps extends MarginProps {
  style?: ViewStyle;
  vertical?: boolean;
  thickness?: Prop;
  color?: string;
  length?: Prop;
  flex?: Prop;
  marginVertical?: Prop;
  marginHorizontal?: Prop;
}

const StyledDivider = styled(View)<SeparatorProps>`
  background-color: ${({ color }: SeparatorProps): string => color || colors.greyLighter};
  height: ${({ vertical, thickness, length }: SeparatorProps): Prop =>
    vertical ? length || '100%' : `${thickness || 1}px`};
  width: ${({ vertical, thickness, length }: SeparatorProps): Prop =>
    !vertical ? length || '100%' : `${thickness || 1}px`};
  border-radius: 2px;
  ${({ flex }: SeparatorProps): Prop => (flex ? `flex: ${flex}` : '')};
  ${MarginStyles};
`;

const Divider = ({
  style,
  vertical,
  thickness,
  color,
  length,
  flex,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: SeparatorProps): ReactElement => {
  return (
    <StyledDivider
      style={style}
      vertical={vertical}
      thickness={thickness}
      color={color}
      length={length}
      flex={flex}
      marginTop={marginVertical || marginTop}
      marginRight={marginHorizontal || marginRight}
      marginBottom={marginVertical || marginBottom}
      marginLeft={marginHorizontal || marginLeft}
    />
  );
};

export default Divider;
