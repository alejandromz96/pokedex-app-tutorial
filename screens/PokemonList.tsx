import React, { ReactElement } from 'react';
import { ScrollView } from 'react-native';
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

// #region

// #endregion

const PokemonList = (): ReactElement => {
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
        <Logo height={em(3)} />
      </Holder>
      <SearchInput />
      <Holder width={`${screen.width}px`} marginTop={`${screen.height * 0.025}px`}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: screen.width * 0.05 }}
        >
          <TypeItem name="Bug" />
          <TypeItem name="Dark" active />
          <TypeItem name="Dragon" />
          <TypeItem name="Electric" />
          <TypeItem name="Fairy" />
          <TypeItem name="Fighting" />
          <TypeItem name="Fire" />
          <TypeItem name="Flying" />
          <TypeItem name="Ghost" />
        </ScrollView>
      </Holder>
      <Divider marginVertical={`${screen.height * 0.005}px`} />
      {/* TODO: Nacho, aquí lo mejor es usar un FlatList, pero como es una formación mejor que lo metan ellos */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Holder
          column
          width={`${screen.width}px`}
          marginTop={`${screen.height * 0.025}px`}
          paddingBottom={`${screen.height * 0.025}px`}
        >
          <PokemonItem name="Charmander" />
          <Divider />
          <PokemonItem name="Charmander" />
          <Divider />
          <PokemonItem name="Charmander" />
          <Divider />
          <PokemonItem name="Charmander" />
          <Divider />
          <PokemonItem name="Charmander" />
          <Divider />
          <PokemonItem name="Charmander" />
          <Divider />
          <PokemonItem name="Charmander" />
          <Divider />
          <PokemonItem name="Charmander" />
          <Divider />
          <PokemonItem name="Charmander" />
          <Divider />
          <PokemonItem name="Charmander" />
          <Divider />
          <PokemonItem name="Charmander" />
        </Holder>
      </ScrollView>
    </Wrapper>
  );
};

export default PokemonList;
