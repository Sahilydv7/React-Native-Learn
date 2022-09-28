import React, { useRef, useState } from 'react'

import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const UseStateTab = createMaterialTopTabNavigator();

function Code() {
    const obj = {
        code: `function Output() {
    const inputRef = useRef(null)
    const [Sample, setSample] = useState('Type....')

    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>This is Using useRef</Text>
            <TextInput placeholder='Type...' ref={value => inputRef.current = value} style={{ borderColor: 'black', borderWidth: 2, borderRadius: 20, width: 350, padding: 20 }} />
            <Text style={{ fontSize: 20, color: 'black' }}>This is Using useState</Text>

            <TextInput placeholder='Type...' value={Sample} onChangeText={(e) => setSample(e)} style={{ margin: 10, borderColor: 'black', borderWidth: 2, borderRadius: 20, width: 350, padding: 20 }} />

            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => {
                    setSample('')
                    inputRef.current.clear() // this also clears the value 
                    // inputRef.current.setNativeProps({ text: "" }) 
                }}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Clean the Field
                </Text>
            </TouchableOpacity>



        </View>
    )

}`
    }
    return (
        <ScrollView>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>{obj.code}</Text>
        </ScrollView>
    )
}
// console.log("KKK>>>", Output.toString());
function Output() {
    const inputRef = useRef(null)
    const [Sample, setSample] = useState('Type....')

    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>
            <Text style={{ fontSize: 20, color: 'black' }}>This is Using useRef</Text>
            <TextInput placeholder='Type...' ref={value => inputRef.current = value} style={{ borderColor: 'black', borderWidth: 2, borderRadius: 20, width: 350, padding: 20 }} />
            <Text style={{ fontSize: 20, color: 'black' }}>This is Using useState</Text>

            <TextInput placeholder='Type...' value={Sample} onChangeText={(e) => setSample(e)} style={{ margin: 10, borderColor: 'black', borderWidth: 2, borderRadius: 20, width: 350, padding: 20 }} />

            <TouchableOpacity
                style={{ padding: 10, backgroundColor: 'purple', borderRadius: 8, marginTop: 10 }}
                onPress={() => {
                    setSample('')
                    inputRef.current.clear() // this also clears the value 
                    // inputRef.current.setNativeProps({ text: "" }) 
                }}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Clean the Field
                </Text>
            </TouchableOpacity>



        </View>
    )

}

function UseRefTabEx() {
    return (
        <UseStateTab.Navigator>
            <UseStateTab.Screen name="Code" component={Code} />
            <UseStateTab.Screen name="Output" component={Output} />
        </UseStateTab.Navigator>
    );
}


export default UseRefTabEx;