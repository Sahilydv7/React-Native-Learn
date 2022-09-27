import React, { Component } from "react";
import { View, Modal, Button, Text, StyleSheet, Dimensions } from "react-native";

class ModalExample extends Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ margin: 20, fontSize: 20, color: '#000000' }}>This is a Example of Modal</Text>
                <View style={{ margin: 20 }}><Button title='Show Modal' onPress={() => { this.setState({ showModal: true }) }} /></View>
                {
                    this.state.showModal ?
                        <Modal transparent={true}>
                            <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
                                <View style={{ margin: 20, backgroundColor: 'white', flex: 1, borderRadius: 20, padding: 20, }}>
                                    <Text style={{ fontSize: 70, color: '#000000', alignSelf: 'center' }}>This is a example of Modal </Text>
                                    <Button title='Hide Modal' onPress={() => { this.setState({ showModal: false }) }} />


                                </View>
                            </View>

                        </Modal> :
                        <View></View>
                }

            </View>
        )
    }
}




export default ModalExample;