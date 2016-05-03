angular.module('shoppingPad',['ngResource','ngMaterial','ui.router','ngAnimate','ngAria','ngMessages'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/register');
        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'template/register/registration.html',
                controller: 'registerCtrl'
            }).state('register-1', {
                url: '/register1',
                templateUrl: 'template/register/registration-1.html',
                controller: 'registerCtrl'
            }).state('signIn', {
                url: '/signIn',
                templateUrl: 'template/signin/login.html',
                controller: 'signInCtrl'
            }).
            state('login', {
                url: '/login',
                templateUrl: 'template/signin/login.html',
                controller: 'loginCtrl'
            })
    });
