/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import Home from './src/pages/Home';
import { SafeAreaView, View } from 'react-native';
import { AppStyles } from './src/styles/styles';
import TaskProvider from './src/context/TaskContext';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <TaskProvider>
      <SafeAreaView style={AppStyles.mainContainer}>
        <View style={AppStyles.viewContainer}>
          <Home />
        </View>
      </SafeAreaView>
    </TaskProvider>

  );
}

export default App;
