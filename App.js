// In App.js in a new project

import * as React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import { Provider } from "react-redux";
//import MainReducer from "./src/reducers/MainReducer.js";
import Login from "./src/pages/Login";
import styles from "./assets/styles.js";
import UserFeed from "./src/pages/UserFeed"

function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const rootReducer = (state ={}, action) => {
  return state
}
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          {/* <Stack.Screen name="SignUp" component={DetailsScreen} /> */}
          <Stack.Screen name = "UserFeed" component={UserFeed} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
