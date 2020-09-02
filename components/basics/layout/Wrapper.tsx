import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components/native';
import useDimensions from '../../../hooks/useDimensions';
import colors from '../../../config/colors';
import Holder, { HolderProps } from './Holder';

interface ComponentProps extends HolderProps {
  children: ReactNode;
  bgColor?: string;
}

interface StyledProps {
  bgColor?: string;
}

// #region

const StyledWrapper = styled(Holder)`
  flex: 1;
  align-items: center;
  background-color: ${({ bgColor }: StyledProps): string => bgColor || colors.white};
`;

// #endregion

const Wrapper = ({
  children,
  justify,
  paddingTop,
  paddingBottom,
  bgColor,
}: ComponentProps): ReactElement => {
  const screen = useDimensions();

  return (
    <StyledWrapper
      column
      height={`${screen.height}px`}
      justify={justify || 'flex-start'}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      bgColor={bgColor}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
