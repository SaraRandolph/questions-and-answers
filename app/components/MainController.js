/* global Firebase */
app.controller('MainController', function($scope, FBREF, $firebaseArray, $firebaseObject) {

    var mc = this;
    var db = new Firebase(FBREF);

 $scope.questionsArr = $firebaseArray(new Firebase(FBREF + 'questions'));
    $scope.member;

function handleDBResponse (err, authData){
        if(err){
            console.log(err);
            return;
        } 
        console.log(authData);
        var userToSave = {
            username: mc.user.email,
            reputation: 0,
            created: Date.now()
        }
        $scope.$apply(function(){
            $scope.member = userToSave;
        })
   
        db.child('users').child(authData.uid).update(userToSave);
    }
    
    
    $scope.register = function(){
        db.createUser(mc.user, handleDBResponse);
    }
    
    $scope.login = function(){
      
        console.log(mc.user)
        
        db.authWithPassword(mc.user, handleDBResponse)
    }
    

    $scope.comments = [];
    
    $scope.solution = {
        value:false
    }

    var id = 2367;
    
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
    
    $scope.addQuestion = function () {
        $scope.newQuestion.date = Date.now();
        $scope.newQuestion.responses = [];
        $scope.newQuestion.id = id;
        id++;
        $scope.newQuestion.votes = 0;
        $scope.questionsArr.$add($scope.newQuestion);
        $scope.newQuestion = "";
    }
    $scope.removeQuestion = function (index) {
        $scope.questionsArr.splice(index, 1)
        
        
    }
    
    $scope.addComment = function (obj) {
        obj.newComment.date = Date.now();
        obj.newComment.votes = 0;
        obj.comments.$add(obj.newComment);
        obj.newComment = "";   
 
    }   
    
    $scope.goBack = function() {
        $scope.activeQuestion = "";
        $scope.activeResponse = "";
    }
    
 
    $scope.setActiveQuestion = function(question){

        $scope.activeQuestion = $firebaseObject(new Firebase(FBREF + 'questions/' +question.$id));
        $scope.activeQuestionResponses = $firebaseArray(new Firebase(FBREF + 'questions/' +question.$id + '/responses'))
    
    }
    
    $scope.addResponse = function() {
        $scope.newResponse.comments = [];

        $scope.newResponse.solution 

        $scope.newResponse.votes = 0;
        
        $scope.activeQuestionResponses.$add($scope.newResponse);
        $scope.newResponse = "";       
    }
    $scope.upVote = function (obj) {
        obj.votes++;
    }

    $scope.downVote = function (obj) {
        obj.votes--;
    }
});









