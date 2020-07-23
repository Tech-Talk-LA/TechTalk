// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login'
import Signup from './src/pages/Signup'
//import styles from "./assets/styles.js";
import UserFeed from "./src/pages/UserFeed";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log in">
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Log in" component={Login} />
        <Stack.Screen name="User Feed" component={UserFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
