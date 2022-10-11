import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const UseStateTab = createMaterialTopTabNavigator();

function Code() {
    const obj = {
        code: `function Output() {
    const inputRef = useRef(null);

    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>This is Using useRef</Text>
            <TouchableOpacity
                style={{
                    padding: 10,
                    backgroundColor: 'purple',
                    borderRadius: 8,
                    marginTop: 10,
                }}
                onPress={() => { inputRef.current.alterToggle() }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Parent Button</Text>
            </TouchableOpacity>
            <Child ref={inputRef} />
        </View>
    );
}

const Child = forwardRef((props, ref) => {
    const [Toggle, setToggle] = useState(true);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!Toggle);
        },
    }));
    return (
        <View>

            <TouchableOpacity
                style={{
                    padding: 10,
                    backgroundColor: 'purple',
                    borderRadius: 8,
                    marginTop: 10,
                }}
                onPress={() => { setToggle(!Toggle) }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Child Button</Text>
            </TouchableOpacity>
            {Toggle && <Text style={{ fontSize: 20, color: 'black' }}>
                Toggle this Text
            </Text>}
        </View>
    );
});
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
function Output() {
    const inputRef = useRef(null);

    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>This is Using useRef</Text>
            <TouchableOpacity
                style={{
                    padding: 10,
                    backgroundColor: 'purple',
                    borderRadius: 8,
                    marginTop: 10,
                }}
                onPress={() => { inputRef.current.alterToggle() }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Parent Button</Text>
            </TouchableOpacity>
            <Child ref={inputRef} />
        </View>
    );
}

const Child = forwardRef((props, ref) => {
    const [Toggle, setToggle] = useState(true);

    useImperativeHandle(ref, () => ({
        alterToggle() {
            setToggle(!Toggle);
        },
    }));
    return (
        <View>

            <TouchableOpacity
                style={{
                    padding: 10,
                    backgroundColor: 'purple',
                    borderRadius: 8,
                    marginTop: 10,
                }}
                onPress={() => { setToggle(!Toggle) }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Child Button</Text>
            </TouchableOpacity>
            {Toggle && <Text style={{ fontSize: 20, color: 'black' }}>
                Toggle this Text
            </Text>}
        </View>
    );
});

function UseImperativeTabEx() {
    return (
        <UseStateTab.Navigator>
            <UseStateTab.Screen name="Code" component={Code} />
            <UseStateTab.Screen name="Output" component={Output} />
        </UseStateTab.Navigator>
    );
}

export default UseImperativeTabEx;
