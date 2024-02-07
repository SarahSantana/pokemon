import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { MainContainer } from './App.style'
import Home from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <MainContainer>
        <Home />
      </MainContainer>
    </SafeAreaView>
  );
}

export default App;
