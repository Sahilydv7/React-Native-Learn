import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

class FormValidationExample extends Component {
    constructor() {
        super();
        this.state = {
            emailerror: '',
            nameerror: '',
            phoneerror: '',
            passworderror: '',
            name: '',
            mobilenumber: '',
            email: '',
            password: '',
        };
    }

    checkEmail(e) {
        let regx = /^['a-zA-Z']+$/;
        if (regx.test(e)) {
            this.setState({ email: e });
            this.setState({ emailerror: '' });
        } else {
            this.setState({ emailerror: 'Please Enter a valid address' });
        }
    }
    checkPassword(e) {
        let regx = /^['a-zA-Z,.'-]+$/;
        if (regx.test(e)) {
            this.setState({ password: e });
            this.setState({ passworderror: '' });
        } else {
            this.setState({ passworderror: 'Please Enter a valid password' });
        }
    }
    submit() {
        if (this.state.email < 1 || this.state.mobilenumber < 1 || this.state.name < 1 || this.state.password < 1) {
            alert("Fields can't be empty")
        }
    }
    render() {
        return (
            <View>
                <TextInput

                    placeholder="Enter Your name [Max 10 letters]"
                    maxLength={10}
                    style={{
                        borderColor: 'skyblue',
                        marginLeft: 15,
                        marginTop: 15,
                        marginRight: 15,
                        borderWidth: 3,
                        marginBottom: 0,
                    }}
                />
                <Text></Text>
                <TextInput
                    placeholder="Enter Your Mobile Number [Max 10 letters]"
                    maxLength={10}
                    keyboardType={'numeric'}
                    style={{
                        borderColor: 'skyblue',
                        marginLeft: 15,
                        marginTop: 15,
                        marginRight: 15,
                        borderWidth: 3,
                    }}
                />
                <Text></Text>
                <TextInput
                    placeholder="Enter your Email"
                    onChangeText={e => {
                        this.checkEmail(e);
                    }}
                    style={{
                        borderColor: 'skyblue',
                        marginLeft: 15,
                        marginTop: 15,
                        marginRight: 15,
                        borderWidth: 3,
                    }}
                />
                <Text>{this.state.emailerror}</Text>

                <TextInput
                    placeholder="Enter your Password"
                    secureTextEntry={true}
                    onChangeText={e => {
                        this.checkPassword(e);
                    }}
                    style={{
                        borderColor: 'skyblue',
                        marginLeft: 15,
                        marginTop: 15,
                        marginRight: 15,
                        borderWidth: 3,
                    }}
                />
                <Text>{this.state.passworderror}</Text>
                <View style={{ marginLeft: 15, marginTop: 15, marginRight: 15 }}>
                    <Button title="SUBMIT" onPress={() => { this.submit() }} />
                </View>
            </View>
        );
    }
}

export default FormValidationExample;
