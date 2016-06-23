/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import QuestionnaireContainer from './src/components/Questionnaire';

class questionnaireapp extends Component {
  render() {
    return (
      <QuestionnaireContainer />
    );
  }
}

AppRegistry.registerComponent('questionnaireapp', () => questionnaireapp);
