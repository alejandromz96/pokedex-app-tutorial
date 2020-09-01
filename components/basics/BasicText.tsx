import React, { ReactElement } from 'react';
import { Text, TextProps } from 'react-native';
import styled from 'styled-components/native';
import { fontSize, fontWeight } from '../../config/fonts';
import { MarginProps, MarginStyles } from '../../config/styles';
import { Prop } from '../../config/units';
import colors from '../../config/colors';

type TextAlignProps = 'left' | 'center' | 'right';

/**
 * BasicText prop types
 *
 * @interface
 * @category PropTypes
 */

export interface BasicTextProps extends TextProps, MarginProps {
  text: Prop | string[];
  color?: string;
  size?: Prop;
  weight?: string;
  alignSelf?: string;
  textAlign?: TextAlignProps;
  uppercase?: boolean;
  lowercase?: boolean;
  letterSpacing?: number;
  opacity?: number;
  width?: Prop;
  height?: Prop;
  lineHeight?: Prop;
}

interface StyledProps extends MarginProps {
  color?: string;
  size?: Prop;
  weight?: string;
  alignSelf?: string;
  textAlign?: TextAlignProps;
  letterSpacing?: number;
  opacity?: number;
  width?: Prop;
  height?: Prop;
  lineHeight?: Prop;
  fontStyle?: string;
}

const StyledText = styled(Text)`
  color: ${({ color }: StyledProps): string => color || colors.greyMed};
  font-size: ${({ size }: StyledProps): Prop => size || fontSize.F16};
  font-family: ${({ weight }: StyledProps): string => weight || fontWeight.regular};
  text-align: ${({ textAlign }: StyledProps): string => textAlign || 'left'};
  letter-spacing: ${({ letterSpacing }: StyledProps): Prop =>
    letterSpacing ? `${letterSpacing}px` : 0};
  ${({ width }: StyledProps): Prop => (width ? `width: ${width}` : '')};
  ${({ height }: StyledProps): Prop => (height ? `height: ${height}` : '')};
  ${({ lineHeight }: StyledProps): Prop => (lineHeight ? `line-height: ${lineHeight}` : '')};
  ${({ opacity }: StyledProps): Prop => (opacity ? `opacity: ${opacity}` : '')};
  ${({ alignSelf }: StyledProps): Prop => (alignSelf ? `align-self: ${alignSelf}` : '')};
  ${MarginStyles};
`;

const BasicText = ({
  style,
  numberOfLines,
  ellipsizeMode = 'tail',
  allowFontScaling = false,
  maxFontSizeMultiplier,
  selectionColor,
  onPress,
  text,
  textAlign,
  weight,
  color,
  size,
  uppercase,
  lowercase,
  letterSpacing,
  opacity,
  width,
  height,
  lineHeight,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  alignSelf,
}: BasicTextProps): ReactElement => {
  return (
    <StyledText
      style={style}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      allowFontScaling={allowFontScaling}
      selectionColor={selectionColor}
      maxFontSizeMultiplier={maxFontSizeMultiplier}
      weight={weight}
      color={color}
      size={size}
      textAlign={textAlign}
      letterSpacing={letterSpacing}
      opacity={opacity}
      width={width}
      height={height}
      lineHeight={lineHeight}
      onPress={onPress}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      alignSelf={alignSelf}
    >
      {lowercase && !uppercase && text.toString().toLowerCase()}
      {uppercase && !lowercase && text.toString().toUpperCase()}
      {!uppercase && !lowercase && text}
    </StyledText>
  );
};

export default BasicText;
