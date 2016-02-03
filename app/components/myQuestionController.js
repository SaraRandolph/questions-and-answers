app.controller('myQuestionController', function($scope){
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
})