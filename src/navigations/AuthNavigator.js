import { createStackNavigator } from "@react-navigation/stack";
// import { Text, View } from "react-native";
import React from 'react';
import { LOGIN, REGISTER } from "../constents/RouteNames";
import Login from "../screens/Login";
import SignUp from "../screens/Register";





const AuthNavigator = () => {
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={SignUp}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;