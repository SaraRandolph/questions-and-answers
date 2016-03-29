app.service('QuestionService', function($rootScope, $firebaseArray, $firebaseObject, CONSTANTS) {

    // All Questions
    this.getQuestions = function() {
        return $firebaseArray(new Firebase(CONSTANTS.fbRef + '/questions'));
    }
    
    // One Question
    this.getQuestion = function(id) {
        return $firebaseObject(new Firebase(CONSTANTS.fbRef + 'questions/' + id));
    }
  
    // My Questions
    this.getMyQuestions = function(id) {
        return $firebaseObject(new Firebase(CONSTANTS.fbRef + 'users/' + $rootScope.member.$id + '/questionList'));
    }
});