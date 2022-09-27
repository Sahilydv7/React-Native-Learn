import React, { Component, useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, ActivityIndicator } from "react-native";

class ApiCallExample extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            loader: true,
        }
    }
    componentDidMount() {
        this.CallApi()

    }
    async CallApi() {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let responseJson = await response.json();
        this.state.loader = false
        this.setState({ data: responseJson })
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>This is a example of ApiCall</Text>
                {
                    this.state.loader ?
                        <ActivityIndicator color={'red'} size={200} /> :
                        <FlatList data={this.state.data} renderItem={({ item }) => <Text>{item.title}</Text>}></FlatList>
                }
            </View>
        )
    }
}

export default ApiCallExample;