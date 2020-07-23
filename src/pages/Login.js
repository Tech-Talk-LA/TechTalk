import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../assets/styles.js';
//import UserFeed from "./UserFeed.js";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export default function Login({ navigation }) {
  const [userNameInput, setUserNameInput] = React.useState('UserName');
  const [passWordInput, setPassWordInput] = React.useState('Password');
  return (
    <View style={styles.container}>
      <Text style={styles.h2} name="title">
        Welcome to TechTalk!
      </Text>
      <Text style={styles.inputLabel}>UserName</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setUserNameInput(text)}
        value={userNameInput}
      />
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassWordInput(text)}
        value={passWordInput}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text
          style={styles.loginButtonText}
          onPress={() => {
            //   isLoggedIn
            //     ? navigation.navigate("UserFeed")
            //     : navigation.navigate("SignUp");
            navigation.navigate('User Feed');
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
