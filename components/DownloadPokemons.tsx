import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { View, StyleProp, ViewStyle } from 'react-native';
import usePokemonDownloader from '../hooks/usePokemonDownloader';

const Container = styled.View`
  flex: 1;
  background-color: #41b673;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
color: #9fed03;
font-size: 20px;
margin: 10px;
font-weight: bold;
`;

const ProgressStatus = styled.Text`
color: #087e36;
font-size: 12px;
margin: 3px;
`;

const ProgressBar = styled.View`
  width: 70%;
  background-color: #beffd7;
  border: 2px;
  border-color: #087e36;
  border-radius: 10px;
  padding: 2px;
`;

const DownloadingImage = styled.Image`
 width: 100px;
 height: 100px;
 margin-top: 20px;
`;

const DownloadPokemons = (): JSX.Element => {
  const downloadStatus = usePokemonDownloader();

  const progressStyle: StyleProp<ViewStyle> = {
    width: `${downloadStatus.percent}%`,
    height: 5,
    backgroundColor: '#087e36',
    borderRadius: 4,
  };

  return (
    <Container>
      <Title>POKEDEX</Title>
      <ProgressStatus>{`Descargando ${downloadStatus.downloaded} de ${downloadStatus.total}`}</ProgressStatus>
      <ProgressBar>
        <View style={progressStyle} />
      </ProgressBar>
      <StatusBar style="auto" />
      <DownloadingImage source={require('../assets/downloading.gif')} />
    </Container>
  )
};

export default DownloadPokemons;