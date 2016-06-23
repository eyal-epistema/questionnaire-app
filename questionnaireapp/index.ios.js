/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Questionnaire from './src/components/Questionnaire';

class questionnaireapp extends Component {
  render() {
    return (
      <Questionnaire />
    );
  }
}

AppRegistry.registerComponent('questionnaireapp', () => questionnaireapp);
