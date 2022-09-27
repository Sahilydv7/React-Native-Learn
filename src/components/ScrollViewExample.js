import React, { Component } from "react";
import { View, ScrollView, Image, Button, Text, StyleSheet, Dimensions } from "react-native";

class ScrollViewExample extends Component {



    render() {
        console.log("height>>>>>>", Dimensions.get('window').height)
        return (<View style={{ flex: 1 }}>
            <View >
                <Text style={{ fontSize: 40 }}>This a Example of  Horizontal ScrollView</Text>

                <View>
                    <ScrollView horizontal={true}>
                        <View style={{ backgroundColor: 'blue', height: 150, width: 150 }}></View>
                        <View style={{ backgroundColor: 'red', height: 150, width: 150 }}></View>
                        <View style={{ backgroundColor: 'green', height: 150, width: 150 }}></View>
                        <View style={{ backgroundColor: 'gold', height: 150, width: 150 }}></View>
                        <View style={{ backgroundColor: 'silver', height: 150, width: 150 }}></View>
                        <View style={{ backgroundColor: 'skyblue', height: 150, width: 150 }}></View>
                    </ScrollView></View>

                <Text style={{ fontSize: 40 }}>This a Example of Vertical ScrollView</Text>

                <View>
                    <ScrollView>
                        <View style={{ backgroundColor: 'blue', height: 150, width: 150 }}></View>
                        <View style={{ backgroundColor: 'red', height: 150, width: 150 }}></View>
                        <View style={{ backgroundColor: 'green', height: 150, width: 150 }}></View>
                        <View style={{ backgroundColor: 'gold', height: 150, width: 150 }}></View>
                        <View style={{ backgroundColor: 'silver', height: 150, width: 150 }}></View>
                        <View style={{ backgroundColor: 'skyblue', height: 150, width: 150 }}></View>
                    </ScrollView>
                </View>

            </View>

            <View >
                <View>
                    <Text style={{ fontSize: 20 }}>{'Testing text'}</Text>
                </View>


                <ScrollView contentInsetAdjustmentBehavior='never' horizontal={true}>
                    <View style={{ height: 150, width: 150, backgroundColor: 'red', marginLeft: 2 }} />
                    <View style={{ height: 150, width: 150, backgroundColor: 'red', marginLeft: 2 }} />
                    <View style={{ height: 150, width: 150, backgroundColor: 'red', marginLeft: 2 }} />
                    <View style={{ height: 150, width: 150, backgroundColor: 'red', marginLeft: 2 }} />
                    <View style={{ height: 150, width: 150, backgroundColor: 'red', marginLeft: 2 }} />
                </ScrollView>
                <View>
                    <Text style={{ fontSize: 20 }}>{'Testing text'}</Text>
                </View>

                <ScrollView >
                    <View style={{ height: 150, width: 150, backgroundColor: 'red', marginTop: 5 }} />
                    <View style={{ height: 150, width: 150, backgroundColor: 'red', marginTop: 5 }} />
                    <View style={{ height: 150, width: 150, backgroundColor: 'red', marginTop: 5 }} />
                    <View style={{ height: 150, width: 150, backgroundColor: 'red', marginTop: 5 }} />
                </ScrollView>

            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    textbox: {
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 20,
        borderColor: 'purple',
        color: 'black'

    },
    btxStyle: {
        margin: 10,
        color: 'purple',
        borderRadius: 20,
        borderColor: 'purple'
    }
})


export default ScrollViewExample;