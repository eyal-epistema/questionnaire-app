const questionnaireDetails = require('../../data/questionnaire.json');
const questionnaireList = require('../../data/questionnaireList.json');
const Firebase = require('firebase');

class QuestionnaireService {
    constructor() {
        this.questionnaireList = new Firebase("https://questionnaireapp.firebaseio.com/questionnaireList");
        console.log('Firebase questionnaire list', this.questionnaireList);
    }

    static getQuestionnaireList(userId) {
        console.log('questionnaireList', questionnaireList);
        return questionnaireList;
    }

    static getQuestionnaire(questionnaireId) {
        console.log('questionnaire', questionnaireDetails.questionnaireId);
        return  questionnaireDetails.questionnaireId;
    }

    static submitAnswers(questionnaireAnswers) {
        console.log('FINAL ANSWERS', questionnaireAnswers);
    }
}

export default QuestionnaireService;