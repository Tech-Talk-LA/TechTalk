// In App.js in a new project

import * as React from "react";
//import { View, Text, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import MainReducer from "./src/reducers/MainReducer.js";
import Login from "./src/pages/Login";
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
    setTimeout(() => setMatches(dummyMatches), 2000)
  }; 
  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Log in">
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
