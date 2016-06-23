
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QuestionnaireService from '../service/Questionnaire';
import Questionnaire from './Questionnaire';

const testUser = {
    id: "DQoODwsODgkHDAEABAsCCw",
    name: "Zohar Guy",
    email: "z@g.com"  
};

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
            let currentQuestionnaire = QuestionnaireService.getQuestionnaire(selectedQuestionnaire.id);
            console.log('currentQuestionnaire', currentQuestionnaire);
            currentView = (<Questionnaire user={testUser} questionnaire={currentQuestionnaire} onSubmit={this._onSubmit.bind(this)}/>);
        } else {
            currentView = (<QuestionnaireList questionnaires={questionnaireList} onSelected={this._onSelected.bind(this)}/>);
        }

        return (
            {currentView}
        );
    }

    _onSelected(questionnaire) {
        this.setState({
            selectedQuestionnaire: questionnaire
        });
    }

    _onSubmit(questionnaireAnswer) {
        let questionnaireList = this.state.questionnaireList;
        questionnaireList[questionnaireAnswer.id].submitted = true;
        this.setState({
            questionnaireList: questionnaireList,
            selectedQuestionnaire: null
        });
    }
  }

export default QuestionnaireContainer;