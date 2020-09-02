import { StatusBar } from 'expo-status-bar';
import React, { ReactElement, useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { View } from 'react-native';
import styled from 'styled-components';
import PokemonList from './screens/PokemonList';
import PokemonDetail from './screens/PokemonDetail';

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

async function loadResourcesAsync(): Promise<void> {
  await Promise.all([
    Font.loadAsync({
      'Montserrat-Black': require('./assets/fonts/montserrat/Montserrat-Black.ttf'),
      'Montserrat-Black-Italic': require('./assets/fonts/montserrat/Montserrat-BlackItalic.ttf'),
      'Montserrat-Bold': require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
      'Montserrat-Bold-Italic': require('./assets/fonts/montserrat/Montserrat-BoldItalic.ttf'),
      'Montserrat-ExtraBold': require('./assets/fonts/montserrat/Montserrat-ExtraBold.ttf'),
      'Montserrat-ExtraBold-Italic': require('./assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf'),
      'Montserrat-ExtraLight': require('./assets/fonts/montserrat/Montserrat-ExtraLight.ttf'),
      'Montserrat-ExtraLightItalic': require('./assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf'),
      'Montserrat-Italic': require('./assets/fonts/montserrat/Montserrat-Italic.ttf'),
      'Montserrat-Light': require('./assets/fonts/montserrat/Montserrat-Light.ttf'),
      'Montserrat-LightItalic': require('./assets/fonts/montserrat/Montserrat-LightItalic.ttf'),
      'Montserrat-Regular': require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
      'Montserrat-Medium': require('./assets/fonts/montserrat/Montserrat-Medium.ttf'),
      'Montserrat-MediumItalic': require('./assets/fonts/montserrat/Montserrat-MediumItalic.ttf'),
      'Montserrat-SemiBold': require('./assets/fonts/montserrat/Montserrat-SemiBold.ttf'),
      'Montserrat-SemiBoldItalic': require('./assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf'),
    }),
  ]).catch((ex) => {
    console.warn(ex);
  });
}

function handleLoadingError(error: Error): void {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

const app = (): ReactElement => {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onFinish={(): void => setIsReady(true)}
        onError={handleLoadingError}
      />
    );
  }

  return (
    <Container>
      {/* <PokemonList /> */}
      <PokemonDetail />
      <StatusBar style="auto" />
    </Container>
  );
};

export default app;
