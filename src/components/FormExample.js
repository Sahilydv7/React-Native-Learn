import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';

class FormExample extends Component {
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

        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
            marginTop: 100,
            marginBottom: 50,
          }}
        />
        <TextInput
          placeholder="Enter your Email"
          placeholderTextColor="red"
          keyboardAppearance="dark"
          style={{
            fontSize: 20,
            height: 55,
            borderWidth: 3,
            borderRadius: 40,
            paddingLeft: 20,
            margin: 10,
          }}
          onChangeText={e => {
            this.setState({ name: e });
          }}
        />

        <TextInput
          placeholder="Enter your Password"
          placeholderTextColor="red"
          keyboardAppearance="light"
          style={{
            fontSize: 20,
            height: 55,
            borderWidth: 3,
            borderRadius: 40,
            paddingLeft: 20,
            margin: 10,
          }}
          onChangeText={e => {
            this.setState({ password: e });
          }}
        />

        <View style={{ margin: 10, borderRadius: 40 }}>
          <Button
            title="Submit"
            onPress={() => {
              alert(
                `Email : ${this.state.name} \nPassword : ${this.state.password}`,
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default FormExample;
