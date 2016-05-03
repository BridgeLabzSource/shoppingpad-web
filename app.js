angular.module('shoppingPad',['ngResource','ngMaterial','ui.router','ngAnimate','ngAria','ngMessages'])
    .config(function ($stateProvider,$urlRouterProvider){
       $urlRouterProvider.otherwise('/register');
        $stateProvider
            .state('register',{
                url:'/register',
                templateUrl:'template/register/registration.html',
                controller:'registerCtrl'
            .state('register', {
                url: '/register',
                templateUrl: 'template/registration.html',
                controller: 'registerCtrl'
            })
            .state('register-1',{
                url:'/register1',
                templateUrl:'template/register/registration-1.html',
                controller:'registerCtrl'
            .state('register-1', {
                url: '/register1',
                templateUrl: 'template/registration-1.html',
                controller: 'registerCtrl'
            })
            .state('register-2', {
                url: '/register2/:categoryId',
                templateUrl: 'template/registration-2.html',
                controller: 'registerCtrl'
            }).state('home', {
                url: '/home',
                templateUrl: 'template/register.html',
                controller: 'mainController'

            }).state('signIn', {
                url: '/signIn',
                templateUrl: 'template/signIn.html',
                controller: 'signInCtrl'
            }).
            state('login', {
                url: '/login',
                templateUrl: 'template/login.html',
                controller: 'loginCtrl'

            .state('register-2',{
                url:'/register2/:id',
                templateUrl:'template/register/registration-2.html',
                controller:'registerCtrl'
            })
    //        .state('business',{
    //          url:'/business',
    //            templateUrl:'template/businessSignup.html',
    //            controller:'businessCtrl'
    //
    //})
    });
