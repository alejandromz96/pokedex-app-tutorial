import React, { ReactElement } from 'react';
import { GestureResponderEvent, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { em } from '../config/units';
import colors from '../config/colors';
import BasicText from './basics/BasicText';
import { fontSize, fontWeight } from '../config/fonts';
import Holder from './basics/layout/Holder';
import TypeItem from './TypeItem';

interface ComponentProps {
  onPress?: (event: GestureResponderEvent) => void;
  name: string;
}

// #region

const Button = styled(TouchableOpacity)`
  background-color: ${colors.transparent};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
// #endregion

const PokemonItem = ({ onPress, name }: ComponentProps): ReactElement => {
  return (
    <Button onPress={onPress}>
      <Holder align="center">
        <Image source={require('../assets/images/charmander.png')} />
        <BasicText
          text={name}
          textAlign="left"
          size={fontSize.F14}
          weight={fontWeight.semiBold}
          letterSpacing={1}
        />
      </Holder>
      <Holder marginRight={em(1)}>
        <TypeItem name="Fire" />
      </Holder>
    </Button>
  );
};

export default PokemonItem;
