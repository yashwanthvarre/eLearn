import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, ScrollView,TouchableOpacity, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; import Constants from 'expo-constants';
import MaskedView from '@react-native-community/masked-view';
import * as firebase from "firebase";
import { db } from '../components/config';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class InterestsScreen extends Component {
    state = {
        n_backend: 0,
        n_frontend: 0,
        n_management: 0,
        n_marketing:0,
        n_bussiness:0,
    };

    backend_nav()
    {
        this.state.n_backend = this.state.n_backend + 1;
        db.ref('/user_stats').update({
            backend: this.state.n_backend,
        });
        this.props.navigation.navigate('Backend');
    };

    frontend_nav()
    {
        this.state.n_frontend = this.state.n_frontend + 1;
        db.ref('/user_stats').update({
            frontend: this.state.n_frontend,
        });
        this.props.navigation.navigate('Frontend');
    };

    management_nav()
    {
        this.state.n_management = this.state.n_management + 1;
        db.ref('/user_stats').update({
            management: this.state.n_management,
        });
        this.props.navigation.navigate('Management');
    };
    marketing_nav()
    {
        this.state.n_marketing = this.state.n_marketing + 1;
        db.ref('/user_stats').update({
            marketing: this.state.n_marketing,
        });
        this.props.navigation.navigate('Marketing');
    };
    bussiness_nav()
    {
        this.state.n_bussiness = this.state.n_bussiness + 1;
        db.ref('/user_stats').update({
            bussiness: this.state.n_bussiness,
        });
        this.props.navigation.navigate('Bussiness');
    };

    render() {
        return (
            <View style={styles.contentContainer}>
                <View style={styles.topCont}>
                    <Text style={styles.center}>
                        Choose your interests
                    </Text>
                   
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity activeOpacity={0.5}onPress={() => this.backend_nav()} style={styles.button}>
                        <Image style={styles.topImg}
                            source={require('./assets/design.png')}
                            resizeMode="contain"
                        />
                        <Text style={styles.buttonText}>
                            Backend
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.frontend_nav()}style={styles.button}>
                        <Image style={styles.topImg}
                            source={require('./assets/dev.png')}
                            resizeMode="contain"
                        />
                        <Text style={styles.buttonText}>
                            Frontend
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.management_nav()}style={styles.button}>
                        <Image style={styles.topImg}
                            source={require('./assets/management.png')}
                            resizeMode="contain"
                        />
                        <Text style={styles.buttonText}>
                            Management
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.marketing_nav()}style={styles.button}>
                        <Image style={styles.topImg}
                            source={require('./assets/marketing.png')}
                            resizeMode="contain"
                        />
                        <Text style={styles.buttonText}>
                            Marketing
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity activeOpacity={0.5}onPress={() => this. bussiness_nav()} style={styles.button}>
                        <Image style={styles.topImg}
                            source={require('./assets/business.png')}
                            resizeMode="contain"
                        />
                        <Text style={styles.buttonText}>
                            Business
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                        <Image style={styles.topImg}
                            source={require('./assets/blogging.png')}
                            resizeMode="contain"
                        />
                        <Text style={styles.buttonText}>
                            Blogging
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchContainer}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.search}>
                        <Image
                            source={require('./assets/search_white.png')}
                            style={{ height: deviceHeight / 27, width: deviceHeight / 27 }}
                        />
                    </TouchableOpacity>
                </View>
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
        //color: 'white',
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
        //fontSize: deviceHeight / 40,
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
        //color: '#34495e',
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