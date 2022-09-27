import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function FirstScreen() {
    return (
        <View>
            <Text style={{ fontSize: 40 }}>This is First Screen</Text>
        </View>
    );
}

function SecondScreen() {
    return (
        <View>
            <Text style={{ fontSize: 40 }}>This is Second Screen</Text>
        </View>
    );
}

function ThirdScreen() {
    return (
        <View>
            <Text style={{ fontSize: 40 }}>This is Third Screen</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();
function Tabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='FirstScreen' component={FirstScreen} />
                <Tab.Screen name='SecondScreen' component={SecondScreen} />
                <Tab.Screen name='ThirdScreen' component={ThirdScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs;