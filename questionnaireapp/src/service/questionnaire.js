const sampleData = require('../../data/questionnaire.json');

class QuestionnaireService {
    static getQuestionnaires(userId) {
        console.log('DATA', sampleData);
        return sampleData;
    }

    static submitAnswers(questionnaireAnswers) {
        console.log('FINAL ANSWERS', questionnaireAnswers);
    }
}

export default QuestionnaireService;