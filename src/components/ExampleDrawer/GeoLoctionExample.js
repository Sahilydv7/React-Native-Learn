import Geolocation from '@react-native-community/geolocation';
import { Component } from 'react';
import React from 'react'
import { Text, View } from 'react-native';


class GeoLocationExample extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
        Geolocation.getCurrentPosition(data => console.warn(data));
        // Geolocation.
    }

    render() {
        return (
            <View>
                <Text>this is a example of GeoLocation</Text>
            </View>
        )
    }
}

export default GeoLocationExample;