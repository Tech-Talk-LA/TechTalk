import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import styles from "../../assets/styles.js";
//import UserFeed from "./UserFeed.js";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export default function Login({ navigation, logIn }) {
  const [userNameInput, setUserNameInput] = React.useState("UserName");
  const [passWordInput, setPassWordInput] = React.useState("Password");
  return (
    <View style={styles.container}>
      <Text name="title">Welcome to Tech Talk</Text>
      <Text>UserName</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setUserNameInput(text)}
        value={userNameInput}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassWordInput(text)}
        value={passWordInput}
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <Text
          style={styles.loginButton}
          onPress={() => {
          //   isLoggedIn
          //     ? navigation.navigate("UserFeed")
          //     : navigation.navigate("SignUp");
          logIn();
          navigation.navigate("User Feed")}}
        >
          LogIn
        </Text>
      </TouchableOpacity>
     
    </View>
  );
}
