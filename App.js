import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'unstated'
import { DbContainer } from './components/State'
import AppNavigator from './components/AppNavigator'

/**
 * This is the main React application
 */
export default class App extends React.Component {

  constructor() {
    super()

    this.dbContainer = new DbContainer("medicare")
  }

  render() {
    return (
      <Provider inject={[this.dbContainer]}>
        <AppNavigator/>
      </Provider>
    )
  }
}
