import React, { Component } from "react";
import { View, ScrollView, Image, Button, TextInput, StyleSheet } from "react-native";

class Register extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            phonenumber: '',
            email: '',
            password: '',
        }
    }

    updateState() {
        this.setState({ data: 'state data updated by a function' })
    }
    showAlert() {
        alert(`Name=${this.state.name} \nPhoneNumber= ${this.state.phonenumber} \nEmail= ${this.state.email} \nPassword= ${this.state.password}`)
    }
    render() {
        return (
            <ScrollView style={{ flex: 1 }}>

                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} style={{ height: 200, width: 200, alignSelf: 'center', marginTop: 100, marginBottom: 50 }} />

                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor='grey'
                    style={styles.textbox}
                    returnKeyType='next'
                    blurOnSubmit={false}

                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    onChangeText={e => {
                        this.setState({ name: e });
                    }} />
                <TextInput
                    placeholder="PhoneNumber"
                    placeholderTextColor='grey'
                    style={styles.textbox}
                    returnKeyType='next'
                    blurOnSubmit={false}
                    ref={(input) => { this.secondTextInput = input; }}
                    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    onChangeText={e => {
                        this.setState({ phonenumber: e });
                    }} />
                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor='grey'
                    style={styles.textbox}
                    returnKeyType='next'
                    blurOnSubmit={false}
                    onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                    ref={(input) => { this.thirdTextInput = input; }}
                    onChangeText={e => {
                        this.setState({ email: e });
                    }} />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor='grey'
                    style={styles.textbox}
                    returnKeyType='submit'
                    blurOnSubmit={true}
                    ref={(input) => { this.fourthTextInput = input; }}
                    onChangeText={e => {
                        this.setState({ password: e });
                    }} />

                <View style={styles.btxStyle}><Button title="Update state" color={'purple'} onPress={() => alert(`Name=${this.state.name} \nPhoneNumber= ${this.state.phonenumber} \nEmail= ${this.state.email} \nPassword= ${this.state.password}`)
                } /></View>

            </ScrollView>
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


export default Register;