import React, { ReactElement } from 'react';
import { ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import Wrapper from '../components/basics/layout/Wrapper';
import useDimensions from '../hooks/useDimensions';
import Holder from '../components/basics/layout/Holder';
import Logo from '../components/basics/Logo';
import colors from '../config/colors';
import { em } from '../config/units';
import SearchInput from '../components/basics/SearchInput';
import TypeItem from '../components/TypeItem';
import PokemonItem from '../components/PokemonItem';
import Divider from '../components/basics/Divider';
import LongArrowLeft from '../components/basics/icons/LongArrowLeft';
import BasicText from '../components/basics/BasicText';
import { fontWeight, fontSize } from '../config/fonts';

// #region

const StyledImage = styled(Image)`
  width: ${em(15)};
  height: ${em(15)};
`;

// #endregion

const PokemonDetail = (): ReactElement => {
  const screen = useDimensions();

  return (
    <Wrapper justify="flex-start" paddingTop={`${screen.height * 0.16}px`}>
      <Holder
        width={`${screen.width}px`}
        paddingTop={`${screen.height * 0.062}px`}
        paddingBottom={em(1)}
        bgColor={colors.secondary}
        position="absolute"
        top={0}
      >
        <Holder
          position="absolute"
          top={`${screen.height * 0.08}px`}
          left={`${screen.width * 0.025}px`}
          zIndex={1}
        >
          <LongArrowLeft type="button" color={colors.white} />
        </Holder>
        <Logo height={em(3)} />
      </Holder>
      <StyledImage resizeMode="cover" source={require('../assets/images/charmander.png')} />
      <ScrollView>
        <Holder
          bgColor={colors.greyLightest}
          width={`${screen.width}px`}
          paddingTop={`${screen.height * 0.025}px`}
          paddingBottom={`${screen.height * 0.025}px`}
          align="center"
          column
        >
          <BasicText
            text="Charmander"
            weight={fontWeight.bold}
            size={fontSize.F20}
            color={colors.secondary}
          />
          <Divider marginVertical={`${screen.height * 0.025}px`} />
          <BasicText text="info" />
          <BasicText text="info" />
          <BasicText text="info" />
          <BasicText text="info" />
          <BasicText text="info" />
          <Holder marginTop={`${screen.height * 0.025}px`}>
            <TypeItem name="Fire" active />
          </Holder>
        </Holder>
      </ScrollView>
    </Wrapper>
  );
};

export default PokemonDetail;
