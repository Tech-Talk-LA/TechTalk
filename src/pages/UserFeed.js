import React from 'react';
import { Text, View, StatusBar, Alert, YellowBox } from 'react-native';
import styles from '../../assets/styles.js';
import Feed from '../components/Feed.js';

//View for the User Feed page once log in is approved; currently lacks nav bar for messages and user profile
export default function UserFeed({ navigation, matches }) {
  return (
    <View showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.h1}>Your Matches!</Text>
      <Feed matches={matches} />
    </View>
  );
}
