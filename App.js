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
const dummyMatches = [
  {
    name: "Nick",
    id: 1,
    body: "Javascript extraordinaire",
    toLearn: "Python",
    toTeach: "Javascript",
  },
  {
    name: "Hideaki",
    id: 2,
    body: "Cool music cat",
    toLearn: "Javascript",
    toTeach: "C++",
  },
  {
    name: "Matt",
    id: 3,
    body: "Hacking is my life",
    toLearn: "C++",
    toTeach: "Python",
  },
];

const defUserObj = {
  isLoggedIn : false,
  userInfo : {
    id : '',
    username: '',
    email: '',
    toTeach: '', 
    toLearn: '' 
  },
};

function App() {
  const [matches, setMatches] = React.useState([]); 
  const [fetching, setFetching] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(defUserObj);

  const getMatches = (id, toTeach, toLearn) => {
    const body = {
      "learn_tech_id": 1,
      "teach_tech_id_array": [4,5]
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(body)
    }
    fetch('http://192.168.1.6:3000/user/matches', options)
    .then(res => res.json())
    .then(data => {
      console.log('just got back: ', data)
      setMatches(data)
    })
    .catch(err => console.log(err))
  }; 
  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Log in">
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Log in">
            {props => (<Login {...props} logIn={getMatches} />)}
          </Stack.Screen>
          <Stack.Screen name="User Feed">
            {props => (<UserFeed {...props} matches={matches} />)}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
  
}

export default App;
