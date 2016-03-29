app.controller('HomeController', function($firebaseArray, $scope, QuestionService, CONSTANTS) {

    // $scope.activeQuestion = QuestionService.setActiveQuestion().then(function(a, b) {
    //     debugger;
    //         $state.go("question", { id: $state.params.id })
    //     })


    $scope.questionList = QuestionService.getQuestions();


    $scope.vote = 0;



    $scope.changeVote = function(question) {
        $scope.dishes.$add($scope.newDish).then(function(dish) {
            $rootScope.member.dishList = $rootScope.member.dishList || {}
            $rootScope.member.dishList[dish.key()] = $scope.newDish;
            $rootScope.member.$save();
            $scope.newDish = ''

        });
    }


});































    //  $rootScope, $state, AuthService, CONSTANTS, $firebaseObject

//       var mc = this;
//       var db = new Firebase(FBREF);
//       $scope.questionsArr = $firebaseArray(new Firebase(FBREF + 'questions'));
    //   $scope.member;

//    function handleDBResponse (err, authData){
//         if(err){
//             console.log(err);
//             return;
//         } 
//         console.log(authData);
//         var userToSave = {
//             username: mc.user.email,
//             reputation: 0,
//             created: Date.now()
//         }
//         $scope.$apply(function(){
//             $scope.member = userToSave;
//         })

//         db.child('users').child(authData.uid).update(userToSave);
//     }


//     $scope.register = function(){
//         db.createUser(mc.user, handleDBResponse);
//     }

//     $scope.login = function(){

//         console.log(mc.user)

//         db.authWithPassword(mc.user, handleDBResponse)
//     }
//     // set active question 
//     $scope.setActiveQuestion = function(question){

//         $scope.activeQuestion = $firebaseObject(new Firebase(FBREF + 'questions/' +question.$id));
//         $scope.activeQuestionResponses = $firebaseArray(new Firebase(FBREF + 'questions/' +question.$id + '/responses'))

//     }

