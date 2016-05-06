angular.module('shoppingPad',['ngResource','ngMaterial','ui.router','ngAnimate','ngAria','ngMessages'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/addCustomer');
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'template/register/registration.html',
                controller:'homeCtrl'
            })
            .state('register',{
                url:'/register',
                templateUrl:'template/register/registration-1.html',
                controller:'registerCtrl'
            })
            .state('register.detail',{
                url:'/register/{categoryId:[0-9]{1-5}}',
                templateUrl:'template/register/registration-2.html',
                controller:'registerCtrl'
            })
            .state('business',{
                url:'/business',
                templateUrl:'template/businessSignup.html',
                controller:'businessCtrl'

            })
<<<<<<< HEAD
<<<<<<< HEAD
    });
=======
=======
            . state('login', {
            url: '/login',
            templateUrl: 'template/signin/login.html',
            controller: 'loginController'
             })
             .state('loginOTP', {
                url: '/loginOTP',
                templateUrl: 'template/signin/loginOTP.html',
                controller: 'loginOTPCtrl'
            })
            .state('dashboard',{
                url:'/dashboard',
                templateUrl: 'template/dashBoard/dashBoard.html',
                controller:'dashBoardController'
           })
>>>>>>> af879c0bcf7168eea7f294ebc42c1f9345184f2c
            .state('broadCast',{
            url:'/broadCast',
            templateUrl:'template/broadCast.html',
            controller:'broadCastCtrl'
           })
        //this is state for add Customer Screen
           .state('addCutomer',{
            url:'/addCustomer',
            templateUrl:'template/addCustomer.html',
            controller:'addCustomerCtrl'
           })
           .state('customerDirectory',{
            url:'/customerDirectory',
            templateUrl:'template/customerDirectory.html',
            controller:'customerDirectoryCtrl'
        })
>>>>>>> 3c059ecb99328b8d3539212e6806f2d3ad81bf8a

    });
