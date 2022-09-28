import React, { useState, useEffect } from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const UseEffectTab = createMaterialTopTabNavigator();

function Code() {
    const obj = {
        code: `function Output() {
    const [Counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = this.setTimeout(() => {
            setCounter(Counter + 1);
        }, 1000);
        return () => {
            clearInterval(this.interval);
        };
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'black' }}>This is UseEffect </Text>
            <Text style={{ fontSize: 40, color: 'black' }}>{Counter}</Text>
        </View>
    );
}


[variable]<-- UseEffect hook is called only when variable is True

[]<-- UseEffect hook is called only when Component is Mounted and Unmounted
`,
    };
    return (
        <View>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>
                {obj.code}
            </Text>
        </View>
    );
}
function Output() {
    const [Counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = this.setTimeout(() => {
            setCounter(Counter + 1);
        }, 1000);
        return () => {
            clearInterval(this.interval);
        };
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'black' }}>This is UseEffect </Text>
            <Text style={{ fontSize: 40, color: 'black' }}>{Counter}</Text>
        </View>
    );
}

function UseEffectTabEx() {
    return (
        <UseEffectTab.Navigator>
            <UseEffectTab.Screen name="Code" component={Code} />
            <UseEffectTab.Screen name="Output" component={Output} />
        </UseEffectTab.Navigator>
    );
}

export default UseEffectTabEx;
