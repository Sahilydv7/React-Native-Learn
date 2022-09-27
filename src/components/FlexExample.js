import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';
import { NavigationContainer, NavigationHelpersContext, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class FlexExample extends Component {
    constructor() {
        super()
        this.state = {
            data: {
                name: 'sahil',
                email: 'sahil@test.com'
            },
            movie: {
                name: 'ddlj',
                rating: 4 / 10
            }
        }

    }
    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', flexBasis: 2, justifyContent: 'space-around' }}>
                <View style={{ backgroundColor: 'red', height: 150, width: 150 }}></View>
                <View style={{ backgroundColor: 'green', height: 150, width: 150 }}></View>
                <View style={{ backgroundColor: 'blue', height: 150, width: 150 }}></View>
                {/* <View style={{ backgroundColor: 'purple', height: 150, width: 150 }}></View> */}
                <Button title="Go to next Screen" onPress={() => { this.props.navigation.navigate('Screen2', this.state.data) }} />
                <Button title="Go to next Screen" onPress={() => { this.props.navigation.navigate('Screen3', this.state.movie) }} />
            </View>
        )
    }
}

function FlexExample1(props, { navigation }) {

    let data = props.route.params;
    return (
        // console.warn(props),
        <View style={{ flex: 1, flexDirection: 'row-reverse', flexWrap: 'wrap', flexBasis: 2, justifyContent: 'space-around' }}>
            <View style={{ backgroundColor: 'red', height: 150, width: 150 }}>
                <Text>{data.name}</Text>
            </View>
            <View style={{ backgroundColor: 'green', height: 150, width: 150 }}></View>
            <View style={{ backgroundColor: 'blue', height: 150, width: 150 }}></View>
            <View style={{ backgroundColor: 'purple', height: 150, width: 150 }}></View>
        </View>
    )
}

function FlexExample2(props) {

    let data = props.route.params;
    return (
        console.warn(props),

        <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap', flexBasis: 2, justifyContent: 'space-around' }}>

            <Text>{data.name}</Text>
            <View style={{ backgroundColor: 'red', height: 150, width: 150 }}></View>
            <View style={{ backgroundColor: 'green', height: 150, width: 150 }}></View>
            <View style={{ backgroundColor: 'blue', height: 150, width: 150 }}></View>
            <View style={{ backgroundColor: 'purple', height: 150, width: 150 }}></View>

        </View>
    )
}

const Stack = createStackNavigator();

const AuthStack = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={FlexExample}></Stack.Screen>
                <Stack.Screen name='Screen2' component={FlexExample1}></Stack.Screen>
                <Stack.Screen name='Screen3' component={FlexExample2}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>


    )
}

export default AuthStack;