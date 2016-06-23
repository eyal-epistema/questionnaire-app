
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QuestionnaireService from '../service/Questionnaire';
import Questionnaire from './Questionnaire';

const user = {
    id: "DQoODwsODgkHDAEABAsCCw",
    name: "Zohar Guy",
    email: "z@g.com"  
};

class QuestionnaireContainer extends Component {
  constructor(props) {
    super(props);
    }

    render() {
        return (
            <Questionnaire user={user}/>
        );
    }
  }

export default QuestionnaireContainer;