import React from "react";
import { Text, View, StatusBar, Alert } from "react-native";
import NavigationBar from "navigationbar-react-native";
import styles from "../../assets/syles.js";
// import Feed from "./components/Feed.js";
// import Messages from "./components/Messages.js";
// import UserMenu from "./components/UserMenu.js";

export default function UserFeed({ navigation }) {
  return (
    <View style={styles.container}>
      <NavigationBar
      // {<Messages/>}
      // {<UserMenu/>}
      />
      <Text>User Feed Page</Text>
      {/* {<Feed/>} */}
    </View>
  );
}
