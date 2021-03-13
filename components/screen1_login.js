import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, ScrollView,TouchableOpacity, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; import Constants from 'expo-constants';
import * as firebase from "firebase";


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

import { db } from '../components/config';

export default class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
       
    };

    handleChange_email = e => {
        this.setState({
            email: e.nativeEvent.text,
        });
    };

    handleChange_password = e => {
        this.setState({
            password: e.nativeEvent.text,
        });
    };

    login() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.navigation.navigate('Interests');
            }).catch((error) => {
                alert('Incorrect email or password');
            });
    };

    render() {
        return (
            <View style={styles.contentContainer}>
                <Image
                    source={require('./assets/logo.png')}
                    style={{ height: deviceHeight / 9, width: deviceHeight / 9, marginTop: deviceHeight / 50 }}
                />
                <TextInput style={styles.textInput} onChange={this.handleChange_email}
                    keyboardType='email-address'
                    placeholder="Email"
                />
                <TextInput secureTextEntry={true} style={styles.textInput} onChange={this.handleChange_password}
                    placeholder="Password"
                />
                <TouchableHighlight style={styles.touchableButton} onPress={() => { this.login(); }}
                >
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableHighlight>
               
                <TouchableHighlight style={styles.signupButton1} onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text style={styles.signupButton1}>
                        Sign up
                    </Text>
                </TouchableHighlight>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textInput: {
        height: '7%',
        width: '80%',
        textAlign: 'left',
        //color: 'white',
        //fontSize: deviceHeight / 40,
        //color: '#02A8A8',

        marginBottom: deviceWidth / 25,
        borderBottomColor: '#CCC8C8',
        borderBottomWidth: 1,
    },

    touchableButton2: {
        height: deviceHeight / 30,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    forgot:
    {
        //fontSize: deviceHeight / 50,
        alignItems: 'center',
        justifyContent: 'center',
        //color: '#1E969C',
    },

    touchableButton: {
        backgroundColor: 'teal',
        height: deviceHeight / 20,
        marginTop: deviceHeight / 30,
        width: deviceWidth / 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#b5b3b3',
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 5 },
    },

    or:
    {
        //fontSize: deviceHeight / 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: deviceWidth / 40,
        marginTop: deviceHeight / 50,
    },

    signupButton1: {
        //fontSize: deviceHeight / 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: deviceHeight / 60,
        //color: '#1E969C',
    },
});