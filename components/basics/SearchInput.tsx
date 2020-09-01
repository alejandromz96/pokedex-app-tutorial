import React, { ReactElement } from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';
import { em } from '../../config/units';
import Holder from './layout/Holder';
import colors from '../../config/colors';
import Search from './icons/Search';
import Input from './Input';
import useDimensions from '../../hooks/useDimensions';

interface ComponentProps {
  onPress?: (event: GestureResponderEvent) => void;
}

// #region

const Wrapper = styled(Holder)`
  background-color: ${colors.greyLightest};
  border-radius: ${em(3)};
  justify-content: space-between;
  align-items: center;
  padding-right: ${em(1)};
`;
// #endregion

const SearchInput = ({ onPress }: ComponentProps): ReactElement => {
  const screen = useDimensions();

  return (
    <Wrapper width={`${screen.width * 0.9}px`}>
      <Input placeholder="Buscar..." />
      <Search type="button" onPress={onPress} color={colors.secondary} />
    </Wrapper>
  );
};

export default SearchInput;
