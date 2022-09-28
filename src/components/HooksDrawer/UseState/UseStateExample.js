import React, { useState } from 'react'

import { Text, View, TouchableOpacity } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const UseStateTab = createMaterialTopTabNavigator();

function Code() {
    const obj = {
        code: `function Output() {
    const [Counter, setCounter] = useState(0)
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'black' }}>
                {Counter}
            </Text>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => setCounter(Counter + 1)}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Increment
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => setCounter(Counter - 1)}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Decrement
                </Text>
            </TouchableOpacity>


        </View>
    )

}
`}
    return (
        <View>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>{obj.code}</Text>
        </View>
    )
}
function Output() {
    const [Counter, setCounter] = useState(0)
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'black' }}>
                {Counter}
            </Text>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => setCounter(Counter + 1)}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Increment
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => setCounter(Counter - 1)}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Decrement
                </Text>
            </TouchableOpacity>


        </View>
    )

}

function UseStateTabEx() {
    return (
        <UseStateTab.Navigator>
            <UseStateTab.Screen name="Code" component={Code} />
            <UseStateTab.Screen name="Output" component={Output} />
        </UseStateTab.Navigator>
    );
}


export default UseStateTabEx;