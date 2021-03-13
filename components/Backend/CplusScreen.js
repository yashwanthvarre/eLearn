import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, ScrollView, TouchableOpacity, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; import Constants from 'expo-constants';
import { Video } from 'expo-av';
import MaskedView from '@react-native-community/masked-view';
import * as firebase from "firebase";

export default class CplusScreen extends Component {

  render() {
    return (
      <View style={styles.container} >
        < Video
          source={require('./assets/C++.mp4')}
          shouldPlay
          useNativeControls
          style={{ width: "100%", height: "50%" }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

