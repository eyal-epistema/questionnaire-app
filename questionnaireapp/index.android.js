/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class questionnaireapp extends Component {
  render() {
    return (
      <Questionnaire />
    );
  }
}

AppRegistry.registerComponent('questionnaireapp', () => questionnaireapp);
