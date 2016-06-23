
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QuestionnaireService from '../service/Questionnaire';
import Questionnaire from './Questionnaire';
import QuestionnaireList from './QuestionnaireList';

const testUser = {
    id: "DQoODwsODgkHDAEABAsCCw",
    name: "Zohar Guy",
    email: "z@g.com"  
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class QuestionnaireContainer extends Component {
  constructor(props) {
        super(props);
        this.state = {
            selectedQuestionnaire: null,
            questionnaireList: null
        }
    }

    componentWillMount() {
        let questionnaireList = QuestionnaireService.getQuestionnaireList(testUser.id);
        this.setState({
            questionnaireList: questionnaireList
        })
    }

    render() {
        let currentView;
        if (this.state.selectedQuestionnaire) {
            let currentQuestionnaire = QuestionnaireService.getQuestionnaire(this.state.selectedQuestionnaire);
            currentView = (<Questionnaire user={testUser} questionnaire={currentQuestionnaire} onSubmit={this._onSubmit.bind(this)}/>);
        } else {
            currentView = (<QuestionnaireList questionnaires={this.state.questionnaireList} onSelect={this._onSelect.bind(this)}/>);
        }

        return (
            <View style={styles.main}>
                {currentView}
            </View>
        );
    }

    _onSelect(questionnaireId) {
        this.setState({
            selectedQuestionnaire: questionnaireId
        });
    }

    _onSubmit(questionnaireAnswer) {
        let questionnaireList = this.state.questionnaireList;
        console.log('_onSubmit', questionnaireAnswer, questionnaireList);
        //questionnaireList[questionnaireAnswer.id].submitted = true;
        this.setState({
            questionnaireList: questionnaireList,
            selectedQuestionnaire: null
        });
    }
  }

export default QuestionnaireContainer;