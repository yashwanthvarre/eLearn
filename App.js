// App.js
import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, ScrollView, TouchableOpacity, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; import Constants from 'expo-constants';
import { Video } from 'expo-av';
import MaskedView from '@react-native-community/masked-view';
import * as firebase from "firebase";

//APP PAGES
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/screen1_login';
import SignupScreen from './components/screen2_signup';
import InterestsScreen from './components/screen3_interests';
import ForgotScreen from './components/forgotScreen';
import BackendScreen from './components/Backend';
import FrontendScreen from './components/Frontend';
import ManagementScreen from './components/Management';
import MarketingScreen from './components/Marketing';
import BussinessScreen from './components/Bussiness';


//Backend Learning
import ClangScreen from './components/Backend/ClangScreen';
import JavaScreen from './components/Backend/JavaScreen';
import PythonScreen from './components/Backend/Python';
import CplusScreen from './components/Backend/CplusScreen';

//Frontend Learning
import HTMLScreen from './components/Frontend/HTMLScreen';
import RNScreen from './components/Frontend/RNScreen';
import CssScreen from './components/Frontend/CssScreen';

//Management Learning
import Accounting1Screen from './components/Management/Accounting1';
import Accounting2Screen from './components/Management/Accounting2';
import Accounting3Screen from './components/Management/Accounting3';
import Accounting4Screen from './components/Management/Accounting4';

// Marketing
import Strategy1Screen from './components/Marketing/Strategy1';
import Strategy2Screen from './components/Marketing/Strategy2';


// Bussiness
import Lecture1Screen from './components/Bussiness/Lecture1';
import Lecture2Screen from './components/Bussiness/Lecture2';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    Signup: {
        screen: SignupScreen
    },
    Interests: {
        screen: InterestsScreen
    },
    Forgot: {
        screen: ForgotScreen
    },
    Backend: {
        screen: BackendScreen
    },
    Frontend: {
        screen: FrontendScreen
    },
    Clang: {
        screen: ClangScreen
    },
    Java: {
        screen: JavaScreen
    },
    Python: {
        screen: PythonScreen
    },
    Cplus: {
        screen: CplusScreen
    },
    HTML: {
        screen: HTMLScreen
    },
    RNS: {
        screen: RNScreen
    },
    Csstutorial: {
        screen: CssScreen
    },
    Management: {
        screen: ManagementScreen
    },
    Accounting1: {
        screen: Accounting1Screen
    },
    Accounting2: {
        screen: Accounting2Screen
    },
    Accounting3: {
        screen: Accounting3Screen
    },
    Accounting4: {
        screen: Accounting4Screen
    },
    Marketing: {
        screen: MarketingScreen
    },
    Strategy1: {
        screen: Strategy1Screen
    },
    Strategy2: {
        screen: Strategy2Screen
    },
    Bussiness: {
        screen: BussinessScreen
    },
    Lecture1: {
        screen: Lecture1Screen
    },
    Lecture2: {
        screen: Lecture2Screen
    },
    
    initialRouteName: "Home"
});



const AppContainer = createAppContainer(AppNavigator);

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
        alignItems: 'center',
        justifyContent: 'center',
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
    },

    dont:
    {
        height: deviceHeight / 45,
        alignItems: 'center',
        justifyContent: 'center',
        padding: deviceWidth / 40,
        marginTop: 70,
    },

    or:
    {
        alignItems: 'center',
        justifyContent: 'center',
        padding: deviceWidth / 40,
        marginTop: deviceHeight / 50,
    },

    account: {
        height: 15,
    },

    signupButton1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: deviceHeight / 60,
    },
    header: {
        marginTop: deviceHeight / 25,
        textAlign: 'center',
        marginBottom: deviceWidth / 25,
    },

    textInput: {
        height: '7%',
        width: '80%',
        textAlign: 'left',
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
        textAlign: 'center',
    },

    searchContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: deviceHeight / 20,
        marginBottom: deviceHeight / 40,
    },

    search: {
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