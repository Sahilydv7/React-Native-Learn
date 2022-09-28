/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {

  useColorScheme,

} from 'react-native';

import HookDrawerEx from './src/components/HooksDrawer/HookDrawer';

const App = () => {

  const data = "this is passed through props";
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <HookDrawerEx />
  );
};



export default App;
