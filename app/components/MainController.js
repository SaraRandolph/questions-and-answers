app.controller('MainController', function($scope) {
    $scope.my_question = true;
    
    $scope.dummy = "dummy";
    $scope.myIssues = [];
    
    $scope.addIssue = function () {
        $scope.myIssues.push($scope.newIssues);
        $scope.newIssues = "";   
 
    }
    
    $scope.setActiveQuestion = function(issue){
        $scope.activeQuestion = issue;
    }
    
    $scope.setView = function(view) {
        if (view === 'myQuestion') {
            this.my_question = true;
        } else {
            this.my_question = false;
        }
    }
});