import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import FeedItem from './FeedBox.js';

export default function Feed() {
  //this is dummy data used for verifying render basic functionality
  const matches = [
    {
      name: 'Nick',
      id: '1',
      body: 'Javascript extraordinaire',
      toLearn: 'Python',
      toTeach: 'Javascript',
    },
    {
      name: 'Hideaki',
      id: '2',
      body: 'Cool music cat',
      toLearn: 'Javascript',
      toTeach: 'C++',
    },
    {
      name: 'Matt',
      id: '3',
      body: 'Hacking is my life',
      toLearn: 'C++',
      toTeach: 'Python',
    },
  ];

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
      keyExtractor={(item) => item.id}
    />
  );
}
