
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QuestionnaireService from '../service/Questionnaire';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

class Questionnaire extends Component {
    render() {
      let questionnaireJson = QuestionnaireService.getQuestionnaires();
      let text = JSON.stringify(questionnaireJson);
      return (
	    <View style={styles.container}>
        <Text style={styles.welcome}>
         	    {text}
        </Text>
      </View>);
    }
}

export default Questionnaire;