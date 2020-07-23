// In App.js in a new project

import * as React from 'react';
//import { View, Text, Button, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import MainReducer from "./src/reducers/MainReducer.js";
import Login from './src/pages/Login';
import styles from './assets/styles.js';
import UserFeed from './src/pages/UserFeed';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log in">
        <Stack.Screen
          name="Log in"
          component={Login}
          options={{
            headerStyle: { backgroundColor: '#036bfc' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '700',
            },
          }}
        />
        <Stack.Screen
          name="User Feed"
          component={UserFeed}
          options={{
            headerStyle: { backgroundColor: '#036bfc' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '700',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
