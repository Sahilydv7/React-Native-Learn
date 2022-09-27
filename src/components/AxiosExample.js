import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Axios from "axios";

class AxiosExample extends Component {
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
        let response = await Axios.get('https://jsonplaceholder.typicode.com/users');

        // console.warn(response.data);
        this.setState({ data: response.data })
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>This is a example of ApiCall by Axios</Text>
                {
                    this.state.data.length > 0 ?
                        <View>
                            {this.state.data.map((item) => <Text>{item.name}</Text>

                            )}
                        </View>
                        :
                        <View><Text>Data is loading</Text></View>
                }
            </View>
        )
    }
}

export default AxiosExample;