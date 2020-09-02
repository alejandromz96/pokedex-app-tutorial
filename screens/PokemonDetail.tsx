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
import LongArrowRight from '../components/basics/icons/LongArrowRight';
import ChartItem from '../components/ChartItem';

// #region

const StyledImage = styled(Image)`
  width: ${em(15)};
  height: ${em(15)};
`;

// #endregion

const PokemonDetail = (): ReactElement => {
  const screen = useDimensions();

  return (
    <Wrapper
      justify="flex-start"
      paddingTop={`${screen.height * 0.14}px`}
      bgColor={colors.greyLightest}
    >
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
      <Holder
        width={`${screen.width}px`}
        align="center"
        justify="space-around"
        bgColor={colors.white}
      >
        <Holder>
          <LongArrowLeft type="button" />
        </Holder>
        <StyledImage resizeMode="cover" source={require('../assets/images/charmander.png')} />
        <Holder>
          <LongArrowRight type="button" />
        </Holder>
      </Holder>

      <ScrollView>
        <Holder
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
          <Divider marginVertical={`${screen.height * 0.025}px`} />
          <Holder column>
            <ChartItem name="HP" value={80} progress={80} />
            <ChartItem name="Attack" value={80} progress={80} />
            <ChartItem name="Defense" value={80} progress={80} />
            <ChartItem name="Sp. Atk" value={80} progress={80} />
            <ChartItem name="Sp Def" value={80} progress={80} />
            <ChartItem name="Speed" value={80} progress={80} />
          </Holder>
          <Holder marginTop={`${screen.height * 0.025}px`}>
            <TypeItem name="Fire" active />
            <TypeItem name="Fire" active />
          </Holder>
        </Holder>
      </ScrollView>
    </Wrapper>
  );
};

export default PokemonDetail;
