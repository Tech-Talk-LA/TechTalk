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

export default function Login({ navigation, logIn }) {
  const [userNameInput, setUserNameInput] = React.useState("UserName");
  const [passWordInput, setPassWordInput] = React.useState("Password");
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
      />
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassWordInput(text)}
        value={passWordInput}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => {
          //   isLoggedIn
          //     ? navigation.navigate("UserFeed")
          //     : navigation.navigate("SignUp");
          logIn();
          navigation.navigate('User Feed');
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Don't have an account?</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}
