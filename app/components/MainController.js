app.controller('MainController', function($scope) {
    $scope.my_question = true;
    
    $scope.dummy = "dummy";
    $scope.myIssues = ["nutrition","cost","flavor"];
    $scope.responses = ["oatmeal", "beans and rice", "whey powder"];
    $scope.comments = [];
    
    $scope.addIssue = function () {
        $scope.myIssues.push($scope.newIssues);
        $scope.newIssues = "";   
 
    }
    
    $scope.addComment = function () {
        $scope.comments.push($scope.newComment);
        $scope.newComment = "";   
 
    }   
    
    $scope.goBack = function() {
        $scope.activeQuestion = "";
        $scope.activeResponse = "";
    }
    
    $scope.setActiveQuestion = function(issue){
        $scope.activeQuestion = issue;
    }
    
    $scope.setActiveResponse = function(response){
        $scope.activeResponse = response;
    }  
    $scope.setActiveComment = function(comment){
        $scope.activeComment = comment;
    }    
    
    // $scope.setView = function(view) {
    //     if (view === 'myQuestion') {
    //         this.my_question = true;
    //     } else {
    //         this.my_question = false;
    //     }
    // }
    
    $scope.addResponse = function() {
 
        $scope.responses.push($scope.newResponse);
        $scope.newResponse = "";       
    }
});

// comment = {
//     UserName: "John",
//     date: Date.now(),
//     body: "comment body this is the text",
//     votes: "",
//     questionId: 324,
//     responseId: 2,
//     id: 1
// }