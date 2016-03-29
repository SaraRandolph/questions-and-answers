app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'app/components/views/home/home.html',
            controller: 'HomeController',
            controllerAs: 'hc'
        })
        .state('login',{
            url:'/login',
            templateUrl:'app/components/views/login/login.html',
            controller: 'RegistrationController'
        })
        .state('registration',{
            url:'/registration',
            templateUrl:'app/components/views/registration/registration.html',
            controller: 'RegistrationController'
        })
         .state('askQuestion',{
            url:'/ask-question',
            templateUrl:'app/components/views/ask-a-question/askquestion.html',
            controller: 'AskQuestionController',
            controllerAs: 'sc'
        })
        .state('profile',{
            url:'/profile',
            templateUrl:'app/components/views/profile/profile.html',
            controller: 'ProfileController'
        })
        .state('viewQuestion',{
            url:'/:id',
            templateUrl:'app/components/views/view-question/viewquestion.html',
            controller: 'ViewQuestionController'
        })
})        

// Sets auto Login
app.run(function ($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        var invalidUser = AuthService.authMember();
        if (invalidUser) {
            //FORCES AUTHENTICATION
            if (toState.name !== 'login' && toState.name !== 'registration') {
                event.preventDefault()
                $state.go('login')
            }
        }
    });
})