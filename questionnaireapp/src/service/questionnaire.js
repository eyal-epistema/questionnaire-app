const sampleData = require('../../data/questionnaire.json');

class QuestionnaireService {
    getQuestionnaires(userId) {
        console.log('DATA', sampleData);
        return sampleData;
    }

    sendAnswers(questionnaireAnswers) {

    }
}