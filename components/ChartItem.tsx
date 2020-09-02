import React, { ReactElement } from 'react';
import styled from 'styled-components/native';
import { em } from '../config/units';
import colors from '../config/colors';
import BasicText from './basics/BasicText';
import { fontSize, fontWeight } from '../config/fonts';
import Holder from './basics/layout/Holder';

interface ComponentProps {
  name: string;
  value: number;
  progress: number;
}

// #region

const Wrapper = styled(Holder)`
  border-radius: 6px;
`;

const Progress = styled(Holder)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

// #endregion

const ChartItem = ({ name, value, progress }: ComponentProps): ReactElement => {
  return (
    <Holder align="center">
      <BasicText
        text={`${name}:`}
        weight={fontWeight.semiBold}
        letterSpacing={1}
        uppercase
        size={fontSize.F10}
        width={em(5)}
      />
      <BasicText
        text={value}
        marginLeft={em(1)}
        weight={fontWeight.bold}
        color={colors.secondary}
      />
      <Wrapper width="50%" height="6px" bgColor={colors.secondary} marginLeft={em(1)}>
        <Progress width={`${progress}%`} bgColor={colors.primary} />
      </Wrapper>
    </Holder>
  );
};

export default ChartItem;
