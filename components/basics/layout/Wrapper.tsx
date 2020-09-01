import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components/native';
import useDimensions from '../../../hooks/useDimensions';
import colors from '../../../config/colors';
import Holder, { HolderProps } from './Holder';

interface ComponentProps extends HolderProps {
  children: ReactNode;
  gradientOne?: string;
  gradientTwo?: string;
}

// #region

const StyledWrapper = styled(Holder)`
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
`;

// #endregion

const Wrapper = ({
  children,
  justify,
  paddingTop,
  paddingBottom,
}: ComponentProps): ReactElement => {
  const screen = useDimensions();

  return (
    <StyledWrapper
      column
      height={`${screen.height}px`}
      justify={justify || 'flex-start'}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
