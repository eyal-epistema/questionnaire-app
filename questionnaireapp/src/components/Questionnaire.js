
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QuestionnaireService from '../service/Questionnaire';
import Question from './Question';
import Summary from './Summary';
import Progress from './Progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  item: {
    flex: 1
  },
  question: {
    flex: 3
  }
});

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    var questions = {};
    props.questionnaire.questions.forEach((question, index) => {
      questions[index] = question;
      questions[index].status = 'unanswered';
    });

    let questionnaireAnswer = {
      id: props.questionnaire.id,
      user: props.user,
      answers: []
    }

    this.state = {
      currentIndex: 0,
      questions: questions,
      questionnaireAnswer: questionnaireAnswer
    };
  }

  render() {
    currentQuestion = this.state.questions[this.state.currentIndex];
    let currentView;
    if (this.state.currentIndex >= Object.keys(this.state.questions).length) {
      currentView = <Summary answers={this.state.questionnaireAnswer.answers} onSubmit={this._onSubmit.bind(this)} />;
    } else {
      currentView = (
        <View style={styles.container}>
          <View style={styles.question}>
            <Question question={currentQuestion.question} onAnswer={this._onAnswer.bind(this) }/>
          </View>
          <View style={styles.item}>
            <Progress questions={this.state.questions} onNavigate={this._onNavigate.bind(this)}/>
          </View>
        </View>
      );
    }    

    return (
      <View style={styles.container}>
        {currentView}
      </View>);
  }

  _onNavigate(questionIndex) {
    this.setState({
      currentIndex: questionIndex
    });
  } 

  _onAnswer(answer) {
    console.log('onAnswer', this.state.currentIndex, answer);
    console.log('onAnswer - question', this.state.questions[this.state.currentIndex]);

    let questions = this.state.questions;
    questions[this.state.currentIndex].status = 'answered';

    let currentQuestion = questions[this.state.currentIndex];
    currentQuestion.answer = answer;
    let questionnaireAnswer = this.state.questionnaireAnswer;
    questionnaireAnswer.answers = questionnaireAnswer.answers.concat(currentQuestion);

    this.setState({
      currentIndex: this.state.currentIndex + 1,
      questions: questions,
      questionnaireAnswer: questionnaireAnswer
    });
  }

  _onSubmit() {
    this.props.onSubmit(this.state.questionnaireAnswer);
  }
}

export default Questionnaire;