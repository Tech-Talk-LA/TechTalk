import React from "react";
import { Text, View, StatusBar, Alert, YellowBox } from "react-native";
import styles from "../../assets/styles.js";
import { TouchableOpacity } from "react-native-gesture-handler";

const FeedItem = ({ name, id, body, toLearn, toTeach }) => {
  //returns the layout of the feedbox (recommended matched users)
  return (
    <View style={styles.feedbox} id={id}>
      <Text>{name}</Text>
      <Text>{body}</Text>
      <Text>{toLearn}</Text>
      <Text>{toTeach}</Text>
    </View>
  );
};

export default FeedItem;
