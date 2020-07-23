import React from 'react';
import { Text, View, StatusBar, Alert, YellowBox } from 'react-native';
import styles from '../../assets/styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FeedItem = ({ name, id, body, toLearn, toTeach }) => {
  //returns the layout of the feedbox (recommended matched users)
  return (
    <View style={styles.feedbox} id={id}>
      <Text style={styles.feedItemName}>{name}</Text>
      <Text style={styles.feedItemDesc}>{body}</Text>
      <Text style={styles.feedItem}>Wants to Learn: {toLearn}</Text>
      <Text style={styles.feedItem}>Wants to Teach: {toTeach}</Text>
    </View>
  );
};

export default FeedItem;
