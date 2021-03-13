import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, ScrollView,TouchableOpacity, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Constants from 'expo-constants';
import MaskedView from '@react-native-community/masked-view';
import Firebase from 'firebase';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class ForgotScreen extends Component {
    render() {
        return (
             
                    <View style={styles.contentContainer}>
                       
                        <Image
                            source={require('./assets/forgotten.png')}
                            style={{ height: deviceHeight / 9, width: deviceHeight / 9, marginTop: deviceHeight / 10 }}
                        />

                        <TextInput style={styles.textInput}
                            keyboardType='email-address'
                            placeholder="Type Your Email Address"
                        />

                        <TouchableHighlight
                            style={styles.touchableButton}
                            onPress={() => {
                                alert('A reset link has been sent to your email');
                            }}
                        >

                            <Text style={styles.buttonText}>
                                Send Reset Link
                            </Text>
                        </TouchableHighlight>

                        <Text style={styles.or}>
                            OR
                        </Text>
                        <TouchableHighlight
                            style={styles.signupButton1}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >

                            <Text style={styles.signupButton1}>
                                Login
                            </Text>
                        </TouchableHighlight>
                    </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },
    contentContainer: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    eLearn: {
        marginTop: deviceHeight / 60,
        fontSize: deviceHeight / 15,

        textAlign: 'center',
        color: '#34495e',
    },

    learning: {
        fontSize: deviceHeight / 60,

        textAlign: 'center',
    },
    MainImg: {
        height: deviceHeight,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
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
    buttonText: {
        color: 'white',
        //fontSize: deviceHeight / 50,
    },
    dont:
    {
        //fontSize: 10,
        height: deviceHeight / 45,
        alignItems: 'center',
        justifyContent: 'center',
        padding: deviceWidth / 40,
        marginTop: 70,
    },

    or:
    {
        //fontSize: deviceHeight / 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: deviceWidth / 40,
        marginTop: deviceHeight / 50,
    },

    account: {
        height: 15,
    },

    signupButton1: {
        //fontSize: deviceHeight / 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: deviceHeight / 60,
        //color: '#1E969C',
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
        //fontSize: deviceHeight / 30,
        //color: '#02A8A8',

        marginBottom: deviceWidth / 25,
        borderBottomColor: '#CCC8C8',
        borderBottomWidth: 1,
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
    topCont: {
        flexDirection: 'row',
        marginTop: deviceHeight / 65,
        marginBottom: deviceHeight / 35,
        //color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },

    left: {
        width: '15%',
        height: deviceHeight / 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    center: {
        width: '70%',
        fontSize: deviceHeight / 40,
        //color: '#34495e',
        textAlign: 'center',
    },

    right: {
        width: '15%',
        height: deviceHeight / 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
    },

    button: {
        flexDirection: 'column',
        height: deviceHeight / 5,
        width: deviceWidth / 2.5,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: deviceHeight / 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    buttonText: {
        color: '#34495e',
        //fontSize: deviceHeight / 40,
        textAlign: 'center',
    },

    searchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: deviceHeight / 20,
        marginBottom: deviceHeight / 40,
    },

    search: {
        //color: '#02A8A8',
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceHeight / 17,
        height: deviceHeight / 17,
        backgroundColor: '#02A8A8',
        borderRadius: 100,
        shadowColor: '#b5b3b3',
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 3.5,
        shadowOffset: { width: 1, height: 5 },
    },

});


            