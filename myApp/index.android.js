import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import Component1 from './app/components/component1/component1';

export default class MyApp extends Component {
  render() {
    return (
      <View>
        <Component1 message='Hello World!'/>
      </View>
    );
  }
}
AppRegistry.registerComponent('myApp', () => MyApp);