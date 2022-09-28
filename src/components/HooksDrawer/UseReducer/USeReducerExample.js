import React, { useReducer } from 'react';

import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const UseEffectTab = createMaterialTopTabNavigator();

function Code() {
    const obj = {
        code: `const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { counter: state.counter + 1, showText: state.showText };
        case "Decrement":
            return { counter: state.counter - 1, showText: state.showText };
        case "ToggleText":
            return { counter: state.counter, showText: !state.showText };
        case "IncrementAndToggleText":
            return { counter: state.counter + 1, showText: state.showText };
        default:
            return state
    }
};
function Output() {
    const [state, dispatch] = useReducer(reducer, { counter: 0, showText: false })

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'black' }}>This is UseReducer </Text>
            <Text style={{ fontSize: 40, color: 'black' }}>{state.counter}</Text>
            {state.showText && <Text style={{ fontSize: 40, color: 'black' }}>HeHe</Text>}
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => dispatch({ type: 'Increment' })}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Increment
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => dispatch({ type: 'Decrement' })}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Decrement
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => dispatch({ type: 'ToggleText' })}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    ToggleText
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => dispatch({ type: 'IncrementAndToggleText' })}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    IncrementAndToggleText
                </Text>
            </TouchableOpacity>
        </View>
    );
}
`,
    };
    return (
        <ScrollView>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>
                {obj.code}
            </Text>
        </ScrollView>
    );
}


const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { counter: state.counter + 1, showText: state.showText };
        case "Decrement":
            return { counter: state.counter - 1, showText: state.showText };
        case "ToggleText":
            return { counter: state.counter, showText: !state.showText };
        case "IncrementAndToggleText":
            return { counter: state.counter + 1, showText: state.showText };
        default:
            return state
    }
};
function Output() {
    const [state, dispatch] = useReducer(reducer, { counter: 0, showText: false })

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 40, color: 'black' }}>This is UseReducer </Text>
            <Text style={{ fontSize: 40, color: 'black' }}>{state.counter}</Text>
            {state.showText && <Text style={{ fontSize: 40, color: 'black' }}>HeHe</Text>}
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => dispatch({ type: 'Increment' })}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Increment
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => dispatch({ type: 'Decrement' })}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Decrement
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => dispatch({ type: 'ToggleText' })}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    ToggleText
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => dispatch({ type: 'IncrementAndToggleText' })}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    IncrementAndToggleText
                </Text>
            </TouchableOpacity>
        </View>
    );
}

function UseReducerTabEx() {
    return (
        <UseEffectTab.Navigator>
            <UseEffectTab.Screen name="Code" component={Code} />
            <UseEffectTab.Screen name="Output" component={Output} />
        </UseEffectTab.Navigator>
    );
}

export default UseReducerTabEx;
