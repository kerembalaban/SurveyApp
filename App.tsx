import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RNBootSplash from "react-native-bootsplash";
import { HomeNavigator } from './src/navigations';
import { AppProvider } from './src/contextApi';

const App: FC = () => {

  return (
    <AppProvider>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <HomeNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;