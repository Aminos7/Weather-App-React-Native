import React from 'react';
import AppSwitchNavigator from './components/Navigation'
import {View, StatusBar} from 'react-native'

export default class App extends React.Component {

  render() {
    return (
      <View style={{flex : 1}}>
      <StatusBar barStyle="light-content"/>
      <AppSwitchNavigator />
      </View>
    );
  }
}