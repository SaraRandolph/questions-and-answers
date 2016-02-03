app.controller('MainController', function($scope) {
    $scope.my_question = true;
    
    $scope.setView = function(view) {
        if (view === 'myQuestion') {
            this.my_question = true;
        } else {
            this.my_question = false;
        }
    }
});