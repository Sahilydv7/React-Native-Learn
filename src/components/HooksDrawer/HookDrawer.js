import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Text, View } from 'react-native';


function FirstScreen() {
    return (
        <View>
            <FontAwesome5 name={'comments'} size={100} />
            <FontAwesome5 name={'download'} size={100} />
            <Text style={{ fontSize: 40 }}>This is First Screen</Text>
        </View>
    );
}

const HookDrawer = createDrawerNavigator();

function HookDrawer() {
    return (
        <NavigationContainer>
            <HookDrawer.Navigator initialRouteName='Home'>
                <HookDrawer.Screen name='Home' component={FirstScreen} />
            </HookDrawer.Navigator>
        </NavigationContainer>
    )
}

export default HookDrawer;