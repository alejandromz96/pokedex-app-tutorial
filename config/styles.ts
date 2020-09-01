import { css } from 'styled-components/native';
import { Prop } from './units';

export const setProperty = (prop: number | string): string => {
  if (typeof prop === 'number') {
    return `${prop}px`;
  }
  return prop;
};

// MARGIN

export interface MarginProps {
  marginBottom?: Prop;
  marginTop?: Prop;
  marginLeft?: Prop;
  marginRight?: Prop;
}

export const MarginStyles = css<MarginProps>`
  ${({ marginBottom }): string => (marginBottom ? `margin-bottom: ${marginBottom}` : '')};
  ${({ marginTop }): string => (marginTop ? `margin-top: ${marginTop}` : '')};
  ${({ marginLeft }): string => (marginLeft ? `margin-left: ${marginLeft}` : '')};
  ${({ marginRight }): string => (marginRight ? `margin-right: ${marginRight}` : '')};
`;

// PADDING

export interface PaddingProps {
  paddingBottom?: Prop;
  paddingTop?: Prop;
  paddingLeft?: Prop;
  paddingRight?: Prop;
}

export const PaddingStyles = css<PaddingProps>`
  ${({ paddingBottom }): string => (paddingBottom ? `padding-bottom: ${paddingBottom}` : '')};
  ${({ paddingTop }): string => (paddingTop ? `padding-top: ${paddingTop}` : '')};
  ${({ paddingLeft }): string => (paddingLeft ? `padding-left: ${paddingLeft}` : '')};
  ${({ paddingRight }): string => (paddingRight ? `padding-right: ${paddingRight}` : '')};
`;

// POSITION

export interface PositionProps {
  top?: Prop;
  bottom?: Prop;
  left?: Prop;
  right?: Prop;
}

export const PositionStyles = css<PositionProps>`
  ${({ top }): string => (top ? `top: ${top}` : '')};
  ${({ bottom }): string => (bottom ? `bottom: ${bottom}` : '')};
  ${({ left }): string => (left ? `left: ${left}` : '')};
  ${({ right }): string => (right ? `right: ${right}` : '')};
`;
