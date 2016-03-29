app.controller('ViewQuestionController', function($scope, QuestionService, $rootScope, $firebaseArray, $stateParams){
    
    $scope.question = QuestionService.getQuestion($stateParams.id)


    $scope.addResponse = function(newResponse) {
        newResponse.member = $rootScope.member.$id;
        newResponse.solution = false;
        newResponse.votes = 0
        $scope.question.responses = [];
        $scope.question.responses.push(newResponse)
        $scope.question.$save().then(function(question){
            $rootScope.member.responsesList = $rootScope.member.responsesList || {}
            
            $rootScope.member.responsesList[question.key()] = [];
            $rootScope.member.responsesList[question.key()].push(newResponse)
            $rootScope.member.$save();
        $scope.newResponse = "";       
    })
    }
    

})