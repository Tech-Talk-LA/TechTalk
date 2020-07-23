import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../../assets/styles.js';
//import UserFeed from "./UserFeed.js";

export default function Login({ navigation }) {
  const [userNameInput, setUserNameInput] = React.useState('');
  const [passWordInput, setPassWordInput] = React.useState('');

  function loginValidation() {
    if (userNameInput === '') {
      alert('Please enter a username');
      return false;
    }
    if (passWordInput === '') {
      alert('Please enter your password');
      return false;
    }
    return true;
  }

  function apiCall() {
    if (loginValidation()) {
      console.log(loginData);
      alert('Login Successful');
      logIn();
      navigation.navigate('User Feed');
    }
  }

  function loginButton() {
    //   isLoggedIn
    //     ? navigation.navigate("UserFeed")
    //     : navigation.navigate("SignUp");
    apiCall();
  }

  const loginData = {
    username: userNameInput,
    password: passWordInput,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h2} name="title">
        Welcome to TechTalk!
      </Text>
      <Text style={styles.inputLabel}>UserName</Text>
      <TextInput
        label="UserName"
        style={styles.textInput}
        onChangeText={(text) => setUserNameInput(text)}
        value={userNameInput}
        placeholder="username"
      />
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassWordInput(text)}
        value={passWordInput}
        secureTextEntry={true}
        placeholder="password"
      />
      <TouchableOpacity onPress={loginButton} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Don't have an account?</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}
