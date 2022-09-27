import React, { useState } from "react";
import { View, ScrollView, Image, Button, Text, StyleSheet, Dimensions } from "react-native";

function UseStateHooks() {
    const [count, setCount] = useState(0)
    return (
        <View>
            <Text style={{ fontSize: 40 }}>{count}</Text>
            <View style={{ margin: 10 }}><Button title="Increment" onPress={() => setCount(count + 1)} /></View>
            <View style={{ margin: 10 }}><Button title="Decrement" onPress={() => setCount(count - 1)} /></View>
        </View>
    )
}

export default UseStateHooks;