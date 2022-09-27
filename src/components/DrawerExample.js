import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ScrollViewExample from './ScrollViewExample';
import UseStateHooks from './UseStateHooksExample';
import FlatListExample from './FlatListExapmle';
import ApiCallExample from './ApiCallExample';
import FormValidationExample from './FormValidationExample';
import UseEffectHook from './UseEffectHookExample';
import ModalExample from './ModalExample';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AxiosExample from './AxiosExample';
import GeoLocationExample from './GeoLoctionExample';


function FirstScreen() {
    return (
        <View>
            <FontAwesome5 name={'comments'} size={100} />
            <FontAwesome5 name={'download'} size={100} />
            <Text style={{ fontSize: 40 }}>This is First Screen</Text>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function DrawerExample() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name='Home' component={FirstScreen} />
                <Drawer.Screen name='ScrollView' component={ScrollViewExample} />
                <Drawer.Screen name='UseStateHook' component={UseStateHooks} />
                <Drawer.Screen name='FlatList' component={FlatListExample} />
                <Drawer.Screen name='ApiCall' component={ApiCallExample} />
                <Drawer.Screen name='FormValidation' component={FormValidationExample} />
                <Drawer.Screen name='UseEffect' component={UseEffectHook} />
                <Drawer.Screen name='Modal' component={ModalExample} />
                <Drawer.Screen name='Axios' component={AxiosExample} />
                <Drawer.Screen name='Geolocation' component={GeoLocationExample} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerExample;