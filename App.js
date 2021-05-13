
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/TransactionScreen';
import Search from './screens/Search';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
}
}
const TabNav = createBottomTabNavigator({
  Transaction : {screen : TransactionScreen},
  Search : {screen : Search}
})

const AppContainer = createAppContainer(TabNav)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
