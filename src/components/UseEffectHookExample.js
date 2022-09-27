import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

function UseEffectHook() {
    const [count, setCount] = useState(0)
    const [isStarted, setIsStarted] = useState(false)
    useEffect(() => {
        const interval = this.setTimeout(() => {
            setCount(count + 1)
        }, 1000);
        return () => {
            clearInterval(this.interval);
        }
    });
    return (
        <View>
            <Text style={{ fontSize: 40 }}>{count}</Text>
        </View>
    )

}

export default UseEffectHook;