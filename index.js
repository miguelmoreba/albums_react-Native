//Import a library to help create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';

//Create component
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText={'Albums'}/>
      <AlbumList/>
    </View>
  );
};

//Render it to device

AppRegistry.registerComponent('albums', () => App);
