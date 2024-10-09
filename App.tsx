/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './src/pages/Home';
import { TasksContext, TasksProvider } from './src/context/TasksContext';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const App: React.FC = () => {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}

export default App;
