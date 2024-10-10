/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Home from './src/pages/Home';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const App: React.FC = () => {
  return (
      <Home />
  );
}

export default App;
