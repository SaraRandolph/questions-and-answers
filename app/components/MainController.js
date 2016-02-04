app.controller('MainController', function($scope) {
    $scope.my_question = true;
    $scope.myIssues = ["nutrition","cost","flavor"];
    $scope.responses = ["oatmeal", "beans and rice", "whey powder"];
    $scope.comments = [];

    var id = 0;
    
//    question = {
//     UserName: "John",
//     date: Date.now(),
//     topic: "kind of Apples",
//     tag: one word description;
//     question: "Long form question?",
//     comments: [{commentObj}],
//     responses: [{response}]
//     votes: "",
//     solutionIds: [2],
//     id: 324,
// }
    $scope.questionsArr = [];
    
    $scope.addQuestion = function () {
        $scope.newQuestion.date = Date.now();
        $scope.newQuestion.id = id;
        id++;
        $scope.questionsArr.push($scope.newQuestion);
        $scope.newQuestion = "";
    }
    $scope.removeQuestion = function (index) {
        $scope.questionsArr.splice(index, 1)
        
        
    }
    
    $scope.addComment = function () {
        $scope.comments.push($scope.newComment);
        $scope.newComment = "";   
 
    }   
    
    $scope.goBack = function() {
        $scope.activeQuestion = "";
        $scope.activeResponse = "";
    }
    
 
    $scope.setActiveQuestion = function(question){
        $scope.activeQuestion = question;
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