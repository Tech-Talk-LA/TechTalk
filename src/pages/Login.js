import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "../../assets/styles.js";
//import UserFeed from "./UserFeed.js";

export default function Login({ navigation, logIn }) {
    const [userNameInput, setUserNameInput] = React.useState('UserName')
    const [passWordInput, setPassWordInput] = React.useState('Password')
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
                        navigation.navigate("User Feed")
                    }}
                >
                    LogIn
                </Text>
            </TouchableOpacity>
            <Text>Don't have an account?</Text>
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('Signup')}
            />
        </View >
    );
}
