app.controller('AskQuestionController', function($scope, $rootScope, QuestionService, $firebaseArray, $state){
   
    $scope.questions = QuestionService.getQuestions();

    $scope.createQuestion = function(newQuestion) {
        debugger;
        newQuestion.date = Date.now();
        newQuestion.votes = 0;
        $scope.questions.$add($scope.newQuestion).then(function() {
            $rootScope.member.questionList = $rootScope.member.questionList || {};
            $rootScope.member.questionList = $scope.newQuestion;
            $rootScope.member.$save();
            $scope.newQuestion = '';
        })
    }
    
    $scope.goHome = function(){
        $state.go("home")
    }
    

})