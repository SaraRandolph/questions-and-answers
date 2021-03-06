app.controller('RegistrationController', function($scope, $rootScope, $state, AuthService, CONSTANTS, $firebaseObject) {

    // $scope.questionsArr = $firebaseArray(new Firebase(FBREF + 'questions'));
    // $scope.member;

    $scope.login = function(user) {
       	clearErr();
        AuthService.login($scope.user, handleDBResponse);
    };

    $scope.register = function(user) {
        if (user.password === $scope.password2) {
            clearErr();
            AuthService.register($scope.user, handleDBResponse);
            setTimeout(function() {
                $scope.login(user)
                $state.go('home');
            }, 300)
        } else {
            alert('Please verify your passwords are matching and try again')
        }
    };

    $scope.facebookLogin = function() {
        clearErr();
        AuthService.facebookLogin(handleDBResponse);
    };

    function clearErr() {
        $scope.authErr = '';
    }

    function handleDBResponse(err) {
        if (err) {
            $scope.authErr = err.message;
            $scope.$apply();
        } else {
            $state.go('home');
        }
    }

});

app.controller('AuthController', function($scope, $rootScope, $state, AuthService) {
    //Redirect if Unable to Authenticate
    if (!$rootScope.member) {
        AuthService.authMember(function(err) {
            if (err) {
                //TODO: TOAST ERROR
                $state.go('login');
            }
        });
    }
});


app.service('AuthService', function($rootScope, $state, $firebaseObject, CONSTANTS) {

    var db = new Firebase(CONSTANTS.fbRef)

    function authMember(cb) {
        var authData = db.getAuth();
        if (authData) {
            var id = authData.uid;
            if (id.indexOf(':') > -1) {
                var cutOffProviderIndex = authData.uid.indexOf(':') + 1;
                id = id.slice(cutOffProviderIndex);
            }
            setMember(id, cb);
        } else {
            cb ? cb({ error: { message: 'Unable to Authenticate' } }) : '';
            return true;
        }
    }

    function setMember(id, cb) {
        $rootScope.member = $firebaseObject(new Firebase(CONSTANTS.fbRef + 'users/' + id));
        cb ? cb() : '';
    }

    function createUser(authData, user) {
        var userToAdd = {
            email: user.email,
            reputation: 0,
            created: Date.now()
        }
        db.child('users').child(authData.uid).set(userToAdd);
    }

    this.authMember = authMember;

    this.register = function(user, cb) {
        db.createUser(user, function(err, authData) {
            if (err) {
                return cb(err)
            }
            createUser(authData, user);
            authMember(cb);
        });
    }

    this.login = function(user, cb) {
        db.authWithPassword(user, function(err, authData) {
            if (err) {
                return cb(err)
            }
            authMember(cb);
        })
    }

    $rootScope.logout = function() {
        db.unauth();
        $rootScope.member = null;
        $state.go('login')
    }

});
