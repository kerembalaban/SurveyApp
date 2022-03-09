import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RNBootSplash from "react-native-bootsplash";
import AppProvider from './src/contextApi/appContext';
import { BottomTabNavigator } from './src/navigations';

const App: FC = () => {

  return (
    <AppProvider>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;