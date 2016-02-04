app.controller('MainController', function($scope) {
    $scope.my_question = true;
    
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
    
    $scope.setActiveQuestion = function(question){
        $scope.activeQuestion = question;
    }
    
    $scope.setView = function(view) {
        if (view === 'myQuestion') {
            this.my_question = true;
        } else {
            this.my_question = false;
        }
    }
});