import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from "../../assets/styles.js";
//import UserFeed from "./UserFeed.js";



export default function Login({ navigation }) {
    const [userNameInput, setUserNameInput] = React.useState('')
    const [passWordInput, setPassWordInput] = React.useState('')

    function loginValidation() {
        if (userNameInput === '') {
            alert('Please enter a username')
            return false
        }
        if (passWordInput === '') {
            alert('Please enter your password')
            return false
        }
        return true
    }

    function apiCall() {
        if (loginValidation()) {
            alert('Login Successful')
            console.log(loginData)
        }
    }

    const loginData = {
        username: userNameInput,
        password: passWordInput,
    }


    return (
        <View style={styles.container}>
            <Text name="title">Welcome to Tech Talk</Text>
            <Text>UserName</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setUserNameInput(text)}
                value={userNameInput}
                placeholder="username"
            />
            <Text>Password</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setPassWordInput(text)}
                value={passWordInput}
                placeholder="password"
                secureTextEntry={true}
            />
            <TouchableOpacity>
                <Text
                    style={styles.loginButton}
                    onPress={() => {
                        //   isLoggedIn
                        //     ? navigation.navigate("UserFeed")
                        //     : navigation.navigate("SignUp");
                        navigation.navigate("User Feed")
                        console.log(loginData)
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
