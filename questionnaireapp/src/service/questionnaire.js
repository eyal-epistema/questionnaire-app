const sampleData = require('../../data/questionnaire.json');

class QuestionnaireService {
    static getQuestionnaires(userId) {
        console.log('DATA', sampleData);
        return sampleData;
    }

    static sendAnswers(questionnaireAnswers) {

    }
}

export default QuestionnaireService;