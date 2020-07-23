import React from "react";
import { FlatList } from "react-native-gesture-handler";
import FeedItem from "./FeedBox.js";
// import MatchesProvider from '../context/context.js'

export default function Feed({ matches }) {

  //function to render the individual feed item boxes
  function renderItem({ item }) {
    return (
      <FeedItem
        name={item.user_name}
        body={item.description}
        id={item.user_id}
      ></FeedItem>
    );
  };

  //returns the list of feed items
    return (
      // <MatchesProvider>
        <FlatList
          data={matches}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      // </MatchesProvider>
    )
}
