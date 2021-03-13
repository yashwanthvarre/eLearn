import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, ScrollView, TouchableOpacity, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; import Constants from 'expo-constants';
import MaskedView from '@react-native-community/masked-view';
import * as firebase from "firebase";


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class Homescreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Login')}>
                    <Image style={styles.MainImg}
                        source={require('./assets/logo.png')}
                        style={{ height: deviceHeight / 7, width: deviceHeight / 7, marginTop: deviceHeight / 5 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.eLearn}>
                    eLearn
                </Text>

                <Text style={styles.learning}>
                    Learning Redefined!
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },

    MainImg: {
        height: deviceHeight,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
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
});