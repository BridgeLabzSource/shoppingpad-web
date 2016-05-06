
angular.module('shoppingPad',['ngResource','ngMaterial','ui.router','ngAnimate','ngAria','ngMessages'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/customerDirectory');
        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'template/register/registration.html',
                controller: 'registerCtrl'
            }).state('register-1', {
                url: '/register1',
                templateUrl: 'template/register/registration-1.html',
                controller: 'registerCtrl'
            }).state('home', {
                url: '/home',
                templateUrl: 'template/register.html',
                controller: 'mainController'

            }).state('signIn', {
                url: '/signIn',
                templateUrl: 'template/signin/signIn.html',
                controller: 'signInCtrl'
            }).
            state('login', {
                url: '/login',
                templateUrl: 'template/signin/login.html',
                controller: 'loginCtrl'
            })
            .state('register-2',{
                url:'/register1/:id',
                templateUrl:'template/register/registration-2.html',
                controller:'registerCtrl'
            })

            .state('broadCast',{
            url:'/broadCast',
            templateUrl:'template/broadCast.html',
            controller:'broadCastCtrl'
            })
        //this is state for add Customer Screen
            .state('addCutomer',{
            url:'/addCustomer',
            templateUrl:'template/Customer/addCustomer.html',
            controller:'customerCtrl'
            })
            .state('customerDirectory',{
            url:'/customerDirectory',
            templateUrl:'template/Customer/customerDirectory.html',
            controller:'customerCtrl'
            });
    });
  
