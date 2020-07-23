import React from "react";
import { Text, View, StatusBar, Alert, YellowBox } from "react-native";
import styles from "../../assets/styles.js";
import Feed from "../components/Feed.js";
// import MatchesProvider from '../context/context.js'


//View for the User Feed page once log in is approved; currently lacks nav bar for messages and user profile
export default function UserFeed({ navigation, matches }) {
  return (
    // <MatchesProvider>
      <View style={styles.container}>
        <Text>User Feed Page</Text>
        <Feed matches={matches}/>
      </View>
    // </MatchesProvider>
  );
}
