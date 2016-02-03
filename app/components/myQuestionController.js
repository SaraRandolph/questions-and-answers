app.controller('myQuestionController', function($scope){
<<<<<<< HEAD
    $scope.myIssues = []
    

$scope.addIssue =function(){
    $scope.issues.push($scope.newIssues);
    $scope.newIssues = '';
}   
    
=======
    $scope.dummy = "dummy";
    
    $scope.addIssue = function () {

    if ($scope.newIssue) {
        $scope.QAservice.push($scope.newIssue);
        $scope.newissue = '';
        $scope.questionId++;
    }
}
issue: {

}

// function to add userName
$scope.userName = []

$scope.addUser = function () {

    if ($scope.newUsername) {
        $scope.todos.push($scope.newuserName);
        $scope.newuserName = '';
        $scope.questionId++;
    }
}
userName: {

}
>>>>>>> 19db268c699962a13d8e1b841103a6418c1dd83f
})