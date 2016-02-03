app.controller('myQuestionController', function($scope){
    $scope.dummy = "dummy";
    $scope.myIssues = [];
    
    $scope.addIssue = function () {
        $scope.myIssues.push($scope.newIssues);
        $scope.newIssues = "";   
 
    }

});
// issue: {

// }

// // function to add userName
// $scope.userName = []

// $scope.addUser = function () {

//     if ($scope.newUsername) {
//         $scope.todos.push($scope.newuserName);
//         $scope.newuserName = '';
//         $scope.questionId++;
//     }
// }
// userName: {

// }
// 

   // if ($scope.newIssue) {
    //     $scope.QAservice.push($scope.newIssue);
    //     $scope.newissue = '';
    //     $scope.questionId++;
    // }