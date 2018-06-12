//Import a library to help create a component
import React from 'react';
import {Text, AppRegistry} from 'react-native';

//Create component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

//Render it to device

AppRegistry.registerComponent('albums', () => App);
