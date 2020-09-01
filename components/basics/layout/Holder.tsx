import styled from 'styled-components/native';
import { View } from 'react-native';
import {
  MarginStyles,
  PaddingStyles,
  PositionStyles,
  MarginProps,
  PaddingProps,
  PositionProps,
  setProperty,
} from '../../../config/styles';
import { Prop } from '../../../config/units';
import colors from '../../../config/colors';

type BaseProps = 'center' | 'flex-start' | 'flex-end' | 'baseline';

export type AlignProps = BaseProps | 'stretch';

export type JustifyProps = BaseProps | 'space-between' | 'space-around' | 'space-evenly';

export interface HolderProps extends MarginProps, PaddingProps, PositionProps {
  column?: boolean;
  direction?: string;
  wrap?: boolean;
  justify?: JustifyProps;
  align?: AlignProps;
  alignSelf?: AlignProps;
  flex?: Prop;
  bgColor?: string;
  width?: Prop;
  height?: Prop;
  position?: string;
  zIndex?: number;
}

export default styled(View)<HolderProps>`
  flex-direction: ${({ column, direction }: HolderProps): string => {
    if (direction) {
      return direction;
    }
    if (column) {
      return 'column';
    }
    return 'row';
  }};
  flex-wrap: ${({ wrap }): string => (wrap ? 'wrap' : 'nowrap')};
  ${({ justify }: HolderProps): Prop => (justify ? `justify-content: ${justify}` : '')};
  ${({ align }: HolderProps): Prop => (align ? `align-items: ${align}` : '')};
  ${({ alignSelf }: HolderProps): Prop => (alignSelf ? `align-self: ${alignSelf}` : '')};
  ${({ flex }: HolderProps): Prop => (flex ? `flex: ${flex}` : '')};
  ${MarginStyles};
  ${PaddingStyles};
  background-color: ${({ bgColor }: HolderProps): string =>
    bgColor || colors.transparent.toString()};
  ${({ width }: HolderProps): Prop => (width ? `width: ${setProperty(width)}` : '')};
  ${({ height }: HolderProps): Prop => (height ? `height: ${setProperty(height)}` : '')};
  ${({ position }: HolderProps): Prop => (position ? `position: ${position}` : '')};
  ${({ zIndex }: HolderProps): Prop => (zIndex ? `z-index: ${zIndex}` : '')};
  ${PositionStyles};
`;
