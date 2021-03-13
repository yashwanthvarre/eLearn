import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, ScrollView, TouchableOpacity, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; import Constants from 'expo-constants';
import { Video } from 'expo-av';
import * as firebase from "firebase";
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class ManagementScreen extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>
                <Text style={styles.center2}>
                    Management
                    </Text>
                <View style={styles.buttonContainer}>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Accounting1')} style={styles.course1}>

                        <Text style={styles.buttonText}>
                            Accounting Lecture1
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Accounting2')} style={styles.course1}>
                        <Text style={styles.buttonText}>
                            Accounting Lecture2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Accounting3')} style={styles.course1}>
                        <Text style={styles.buttonText}>
                            Accounting Lecture3
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Accounting4')} style={styles.course1}>
                        <Text style={styles.buttonText}>
                            Accounting Lecture4
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
    center2: {
        width: '90%',
        fontSize: deviceHeight / 40,
        color: '#34495e',
        textAlign: 'left',
        marginTop: 10,
    },
   
   
    
    buttonContainer: {
        flexDirection: 'column',
        height: deviceHeight /5,
    },

    course1: {
        flexDirection: 'column',
        height: deviceHeight / 6,
        width: deviceWidth,
        backgroundColor: '#008080',
        borderColor: 'white',
        borderRadius: deviceHeight / 50,
        marginTop: 20,
        margin: 10,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,

    },
    // course2: {
    //     flexDirection: 'column',
    //     height: deviceHeight / 6,
    //     width: deviceWidth,
    //     backgroundColor: '#008080',
    //     borderColor: 'white',
    //     borderRadius: deviceHeight / 50,
    //     alignItems: 'center',
    //     marginTop: 10,
    //     margin: 10,
    //     justifyContent: 'center',
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 3 },
    //     shadowOpacity: 0.27,
    //     shadowRadius: 4.65,
    //     elevation: 6,
    // },
    // course3: {
    //     flexDirection: 'column',
    //     height: deviceHeight / 6,
    //     width: deviceWidth,
    //     backgroundColor: '#008080',
    //     borderColor: 'white',
    //     borderRadius: deviceHeight / 50,
    //     alignItems: 'center',
    //     marginTop: 10,
    //     margin: 10,
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 3 },
    //     shadowOpacity: 0.27,
    //     shadowRadius: 4.65,
    //     elevation: 6,
    // },
    // course4: {
    //     flexDirection: 'column',
    //     height: deviceHeight / 6,
    //     width: deviceWidth,
    //     backgroundColor: '#008080',
    //     borderColor: 'white',
    //     borderRadius: deviceHeight / 50,
    //     alignItems: 'center',
    //     marginTop: 10,
    //     margin: 10,
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 3 },
    //     shadowOpacity: 0.27,
    //     shadowRadius: 4.65,
    //     elevation: 6,
    // },
    buttonText: {
        color: 'white',
        fontSize:deviceHeight/60,
        textAlign: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginVertical: deviceHeight/50,
        
    },
    buttonText1: {
        color: 'black',
        fontSize: 20,
        alignItems: 'center',
        marginBottom: 10,
        alignItems: 'center',

    },
    certificatesButton: {
        flexDirection: 'column',
        height: deviceHeight / 5,
        width: deviceWidth / 2.5,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: deviceHeight / 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        margin: 10,
        fontSize: deviceHeight / 9,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,

    },
    name: {
        marginTop: 20,
    },
    bottomitems: {
        flexDirection: 'row',
    }

});
