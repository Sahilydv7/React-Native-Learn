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
import Tabs from './src/components/BottomTabNavigationExample';
import DrawerExample from './src/components/DrawerExample';
import FlexExample from './src/components/FlexExample';
import FormExample from './src/components/FormExample';

import Login from './src/components/Login';
import Register from './src/components/Register';



const App = () => {

  const data = "this is passed through props";
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <FormExample />
    // <Login />
    // <Register />
    // <FlexExample />
    <DrawerExample />
    // <Tabs />
  );
};



export default App;
