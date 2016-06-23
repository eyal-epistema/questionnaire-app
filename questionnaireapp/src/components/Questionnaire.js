
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QuestionnaireService from '../service/Questionnaire';
import Question from './Question';
import Summary from './Summary';

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
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: null,
      questions: null,
      answers: null,
      user: this.props.user
    }
  }

  componentWillMount() {
    let questionnaireJson = QuestionnaireService.getQuestionnaires();
    var questions = {};
    questionnaireJson.questions.forEach((question, index) => {
      questions[index] = question; 
    });

    let questionnaireAnswer = {
      id: questionnaireJson.id,
      user: this.state.user,
      answers: []
    }

    this.setState({
      currentIndex: 0,
      questions: questions,
      questionnaireAnswer: questionnaireAnswer
    });
  }

  render() {
    currentQuestion = this.state.questions[this.state.currentIndex];
    console.log('currentQuestion', currentQuestion);
    let currentView;
    if (this.state.currentIndex >= this.state.questions.length) {
      currentView = <Summary answers={this.state.questionnaireAnswer.answers} onSubmit={this._onSubmit.bind(this)} />;
    } else {
      currentView = <Question question={currentQuestion.text} onAnswer={this._onAnswer.bind(this) }/>;
    }    

    return (
      <View style={styles.container}>
        {currentView}
      </View>);
  }

  _onAnswer(answer) {
    let currentQuestion = this.state.questions[this.state.currentIndex];
    console.log(`the answer for question ${currentQuestion.text} is ${answer}`);
    currentQuestion.answer = answer;
    let questionnaireAnswer = this.state.questionnaireAnswer;
    questionnaireAnswer.answers = questionnaireAnswer.answers.concat(currentQuestion);
    console.log('questionnaireAnswer', questionnaireAnswer);
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      questionnaireAnswer: questionnaireAnswer
    });
  }

  _onSubmit() {
    QuestionnaireService.submitAnswers(this.state.questionnaireAnswer);
  }
}

export default Questionnaire;