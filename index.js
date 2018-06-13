//Import a library to help create a component
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header.js';

//Create component
const App = () => {
  return (
    <Header headerText={'Albums'}/>
  );
};

//Render it to device

AppRegistry.registerComponent('albums', () => App);
