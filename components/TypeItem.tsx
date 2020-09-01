import React, { ReactElement } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { em } from '../config/units';
import colors from '../config/colors';
import BasicText from './basics/BasicText';
import { fontSize, fontWeight } from '../config/fonts';

interface ComponentProps {
  onPress?: (event: GestureResponderEvent) => void;
  active?: boolean;
  name: string;
}

interface StyledProps {
  active?: boolean;
}

// #region

const Button = styled(TouchableOpacity)`
  background-color: ${({ active }: StyledProps): string =>
    active ? colors.secondary : colors.transparent};
  border-radius: ${em(3)};
  justify-content: center;
  align-items: center;
  padding: ${em(0.25)} ${em(1)};
  border: 2px solid
    ${({ active }: StyledProps): string => (active ? colors.secondary : colors.greyLight)};
  margin: 0 ${em(0.25)};
`;
// #endregion

const TypeItem = ({ onPress, active, name }: ComponentProps): ReactElement => {
  return (
    <Button active={active} onPress={onPress}>
      <BasicText
        text={name}
        textAlign="center"
        uppercase
        size={fontSize.F10}
        letterSpacing={1}
        weight={active ? fontWeight.bold : fontWeight.medium}
        color={active ? colors.white : colors.greyMed}
      />
    </Button>
  );
};

export default TypeItem;
