import React, { Component, useState } from 'react';
import {
    View,
    ScrollView,
    Image,
    Button,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
} from 'react-native';

class FlatListExample extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { name: 'Sahil', email: 'sahil@test.com' },
                { name: 'Nishant', email: 'nishant@test.com' },
                { name: 'vab', email: 'vab@test.com' },
                { name: 'Rania', email: 'rania@test.com' },
                { name: 'Dahiya', email: 'dahiya@test.com' },
            ],
        };
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 20 }}>This a example of FlatList</Text>

                <FlatList data={this.state.data} renderItem={({ item }) =>
                    <View style={{ margin: 5, backgroundColor: 'rgba(0,0,0,0.2)', height: 40, alignContent: 'space-between', padding: 7, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, marginRight: 10 }}>{item.name}</Text>
                        <Text style={{ fontSize: 16 }}>{item.email}</Text>

                    </View>} />
            </View>
        );
    }
}

export default FlatListExample;
