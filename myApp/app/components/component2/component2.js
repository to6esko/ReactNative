import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';


export default class Component2 extends Component {
  render() {
    return (
        <View>
        <Text>Hello from Component2!</Text>    
      </View>
    );
  }
}
AppRegistry.registerComponent('Component2', () => Component2);