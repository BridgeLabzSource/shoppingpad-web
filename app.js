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

            .state('register-1', {
                url: '/register1',
                templateUrl: 'template/register/registration-1.html',
                controller: 'registerCtrl'
            
            //signIn States
            }).state('loginOTP', {
                url: '/loginOTP',
                templateUrl: 'template/signin/loginOTP.html',
                controller: 'loginOTPCtrl'
            }).
            state('login', {
                url: '/login',
                templateUrl: 'template/signin/login.html',
                controller: 'loginController'
            })
            .state('dashboard',{
                url:'/dashboard',
                templateUrl: 'template/dashBoard/dashBoard.html',
                controller:'dashBoardController'
        })



            .state('register.detail',{
                url:'/register/{categoryId:[0-9]{1-5}}',
                templateUrl:'template/register/registration-2.html',
                controller:'registerCtrl'
            })
            .state('business',{
              url:'/business',
                templateUrl:'template/businessSignup.html',
                controller:'businessCtrl',

            })
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

        .state('broadCast',{
            url:'/broadCast',
            templateUrl:'/shoppingpad-web/template/broadCast.html',
            controller:'broadCastCtrl'
        })


    })
