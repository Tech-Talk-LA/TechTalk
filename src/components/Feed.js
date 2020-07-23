import React from "react";
import { FlatList } from "react-native-gesture-handler";
import FeedItem from "./FeedBox.js";
// import MatchesProvider from '../context/context.js'

export default function Feed({ matches }) {

  //function to render the individual feed item boxes
  function renderItem({ item }) {
    return (
      <FeedItem
        name={item.name}
        body={item.body}
        toLearn={item.toLearn}
        toTeach={item.toTeach}
        id={item.id}
      ></FeedItem>
    );
  }

  //returns the list of feed items
  return (
    <FlatList
      data={matches}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
