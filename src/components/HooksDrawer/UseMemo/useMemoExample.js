import React, { useMemo, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const UseStateTab = createMaterialTopTabNavigator();

function Code() {
    const obj = {
        code: `function Output() {
    const [count, setcount] = useState(0)
    const [todos, setTodos] = useState([]);
    // const calculation = expansiveCalculation(count);
    const calculation = useMemo(() => expansiveCalculation(count), [count])


    function expansiveCalculation(num) {

        console.log("Calculating...");
        for (let i = 0; i < 100; i++) {
            num += 1;
        }
        return num;
    }
    return (
        <View><Text>{todos}</Text><Button title='add todo' onPress={() => setTodos([...todos, "new todos"])} />
            <Text>{count}</Text>
            <Button title='increment' onPress={() => {
                setcount(count + 1)
            }} />
            <Text>{calculation}</Text>
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
function Output() {
    const [count, setcount] = useState(0)
    const [todos, setTodos] = useState([]);
    // const calculation = expansiveCalculation(count);
    const calculation = useMemo(() => expansiveCalculation(count), [count])


    function expansiveCalculation(num) {

        console.log("Calculating...");
        for (let i = 0; i < 100; i++) {
            num += 1;
        }
        return num;
    }
    return (
        <View><Text>{todos}</Text><Button title='add todo' onPress={() => setTodos([...todos, "new todos"])} />
            <Text>{count}</Text>
            <Button title='increment' onPress={() => {
                setcount(count + 1)
            }} />
            <Text>{calculation}</Text>
        </View>
    );
}

function UseMemoTabEx() {
    return (
        <UseStateTab.Navigator>
            <UseStateTab.Screen name="Output" component={Output} />
            <UseStateTab.Screen name="Code" component={Code} />

        </UseStateTab.Navigator>
    );
}

export default UseMemoTabEx;
