import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import * as FileSystem from 'expo-file-system';

const StyledView = styled.View`
  flex: 1;
  background-color: #030912;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

const app = (): JSX.Element => {
  const { documentDirectory } = FileSystem;
  return (
    <StyledView>
      <Text style={{ color: '#ff7' }}>Open up App.tsx to start working on your app!</Text>
      <View
        style={{
          height: 10,
          width: '100%',
          backgroundColor: '#557',
          margin: 10,
          padding: 2,
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 1,
        }}
      >
        <View style={{ height: 4, width: '30%', backgroundColor: '#ee5', borderRadius: 4 }} />
      </View>
      <Text style={{ color: '#fff' }}>{documentDirectory}</Text>
      <StatusBar style="auto" />
    </StyledView>
  );
};

export default app;
