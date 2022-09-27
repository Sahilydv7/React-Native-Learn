// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

// const Login = (props) => {

//     function Login() {
//         alert("login Function")
//     }
//     return (
//         <View>
//             <Text style={{ fontSize: 60, margin: 20 }}>Login Screen</Text>

//             <Text style={styles.red}>Login Screen</Text>
//             <Text style={styles.green}>Login Screen</Text>
//             <View ><Button title="Login" onPress={() => alert("hi, I am button Component")} /></View>
//             <View style={{ margin: 10, }}><Button title="Login Function" onPress={Login} /></View>

//         </View>
//     )
// }

// const styles = StyleSheet.create(
//     {
//         red: {
//             color: 'red'
//             , backgroundColor: 'black',
//             fontWeight: 'bold',
//             fontSize: 40,
//         },
//         green: {
//             color: 'green'
//             , backgroundColor: 'grey',
//             fontWeight: 'normal',
//             fontSize: 40,
//         }
//     }
// )

// export default Login;

import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
        };
    }

    updateState() {
        this.setState({ data: 'state data updated by a function' });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <Text style={{ fontSize: 40, color: 'red' }}>Enter your Details</Text> */}

                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} style={{ height: 200, width: 200, alignSelf: 'center', marginTop: 100, marginBottom: 50 }} />
                <TextInput
                    placeholder="Enter your Email"
                    placeholderTextColor="red"
                    keyboardAppearance='dark'
                    style={{ fontSize: 20, height: 55, borderWidth: 3, borderRadius: 40, paddingLeft: 20, margin: 10 }}

                    onChangeText={e => {
                        this.setState({ name: e });
                    }}
                />

                <TextInput
                    placeholder="Enter your Password"
                    placeholderTextColor="red"
                    keyboardAppearance='light'

                    style={{ fontSize: 20, height: 55, borderWidth: 3, borderRadius: 40, paddingLeft: 20, margin: 10 }}
                    onChangeText={e => {
                        this.setState({ password: e });
                    }}
                />

                <View style={{ margin: 10, borderRadius: 40 }}><Button
                    title="Submit"
                    onPress={() => {
                        alert(`Email : ${this.state.name} \nPassword : ${this.state.password}`);
                    }}
                /></View>
            </View>
        );
    }
}

export default Login;
