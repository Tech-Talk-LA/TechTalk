// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
//import styles from "./assets/styles.js";
import UserFeed from './src/pages/UserFeed';

const Stack = createStackNavigator();
const headerStyle = {
  headerStyle: { backgroundColor: '#036bfc' },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: '700',
  },
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log in">
        <Stack.Screen name="Signup" component={Signup} options={headerStyle} />
        <Stack.Screen name="Log in" component={Login} options={headerStyle} />
        <Stack.Screen
          name="User Feed"
          component={UserFeed}
          options={headerStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
