import React from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import styles from "./assets/styles.js";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export default function Login({ navigation }) {
  const [userNameInput, setUserNameInput] = React.useState("UserName");
  const [passWordInput, setPassWordInput] = React.useState("Password");
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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
        <Text style={styles.loginButton}>LogIn</Text>
      </TouchableOpacity>
      <Button title="Sign Up" onPress={() => navigation.navigate("Details")} />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: `yayahyuh`,
          })
        }
      />
    </View>
  );
}
