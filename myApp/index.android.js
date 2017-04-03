import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import Component1 from './app/components/component1/component1';
import Component2 from './app/components/component2/component2';

export default class MyApp extends Component {
  render() {
    return (
      <View>
        <Component1 />
        <Component2/>
      </View>
    );
  }
}
AppRegistry.registerComponent('myApp', () => MyApp);