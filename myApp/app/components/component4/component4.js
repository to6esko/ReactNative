import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class Component4 extends Component {
  render() {
    return (
      <View>
        <Text>Component 4.</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('Component4', () => Component4);