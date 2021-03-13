import Firebase from 'firebase';
import { AppRegistry, Text, View, TouchableHighlight, ScrollView,TouchableOpacity, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
let config = {
  apiKey: 'AIzaSyAR3Zo32eYS5kOAbs7JgdIa7CdlTJCCBx4',
  authDomain: 'rect-117ec.firebaseapp.com',
  databaseURL: 'rect-117ec.firebaseio.com/',
  projectId: 'rect-117ec',
  storageBucket: 'rect-117ec.appspot.com ',
  messagingSenderId: '790606604648',
};
let app = Firebase.initializeApp(config);
export const db = app.database();