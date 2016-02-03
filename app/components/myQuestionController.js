app.controller('myQuestionController', function($scope){
    $scope.myIssues = []
    

$scope.addIssue =function(){
    $scope.issues.push($scope.newIssues);
    $scope.newIssues = '';
}   
    
})