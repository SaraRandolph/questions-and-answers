app.controller('ProfileController', function($scope, $firebaseArray, CONSTANTS, $firebaseObject){
   
        $scope.removeQuestion = function (index) {
        $scope.questionsArr.splice(index, 1)
    
    }
    
    $scope.solution = {
        value:false
    }
    
})