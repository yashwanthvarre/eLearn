import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, ScrollView,TouchableOpacity, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; import Constants from 'expo-constants';
import * as firebase from "firebase";

import { db } from '../components/config';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class SignupScreen extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        retypepassword: '',
        verified: '',
    };
    handleChangeemail = e => {
        this.setState({
            email: e.nativeEvent.text
        });
    };
    handleChangename = e => {
        this.setState({
            name: e.nativeEvent.text
        });
    };
    handleChangepassword = e => {
        this.setState({
            password: e.nativeEvent.text
        });
    };
    handleChangeretypepassword = e => {
        this.setState({
            retypepassword: e.nativeEvent.text
        });
    };
    handleSubmit = () => {
        addItem(this.state.email);

    };
    handleSubmit = () => {
        addItem(this.state.password);

    };
    handleSubmit = () => {
        addItem(this.state.name);

    };
    handleSubmit = () => {
        addItem(this.state.retypepassword);

    };

    SignUp() {
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(user => {
                    firebase.auth().onAuthStateChanged(function (user) {
                        user.sendEmailVerification();
                    });
                });
        } catch (error) {
            console.log(error.toString(error));
        }


    };

    addItem1() {
        if (this.state.password == this.state.retypepassword) {
            this.SignUp();
        }
        else {
            alert('Passwords do not match');
        }
    };

    verification() {
        const user = firebase.auth().currentUser;
        (async () => {
            await user.reload()
            firebase.auth().onAuthStateChanged( (user) => {
                if (user.emailVerified) {
                    db.ref('/signup').push({
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                        retypepassword: this.state.retypepassword,
                    });
                    this.props.navigation.navigate('Login');
                    console.log('Email is verified');
                }
                else {
                    console.log('Email is not verified');
                }
            });
        })();
    };

    render() {
        return (
            <View style={styles.contentContainer}>
                <Image
                   source={require('./assets/logo.png')}
                    style={{ height: deviceHeight / 9, width: deviceHeight / 9, marginTop: deviceHeight / 50, }}
                />
                <Text style={styles.header}>
                    Your Details
                </Text>
                <TextInput style={styles.textInput}
                    placeholder="Name"
                    onChange={this.handleChangename}
                />
                <TextInput style={styles.textInput}
                    placeholder="Email"
                    onChange={this.handleChangeemail}
                />
                <TextInput secureTextEntry={true} style={styles.textInput}
                    placeholder="Password"
                    onChange={this.handleChangepassword}
                />
                <TextInput secureTextEntry={true} style={styles.textInput}
                    placeholder="Retype_password"
                    onChange={this.handleChangeretypepassword}
                />
                <TouchableHighlight style={styles.signUpButton}
                    onPress={() => this.addItem1()}>
                    <Text style={styles.itemText}>
                        Sign up
                </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.signUpButton}
                    onPress={() => this.verification()}>
                    <Text style={styles.itemText}>
                        Verification done
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
    header: {
        //fontSize: deviceHeight / 25,
        marginTop: deviceHeight / 25,
        textAlign: 'center',
        //color: '#363636',
        marginBottom: deviceWidth / 25,
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

    signUpButton: {
        height: deviceHeight / 20,
        width: deviceHeight / 2,
        marginTop: 15,
        width: deviceWidth / 3,
        backgroundColor: '#02A8A8',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
});