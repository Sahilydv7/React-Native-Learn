import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';

import HomeNavigator from "./HomeNavigator";
import { HOME_NAVIGATOR } from '../constents/RouteNames';


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: true }} >
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;