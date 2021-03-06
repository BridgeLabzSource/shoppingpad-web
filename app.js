angular.module('shoppingPad',['ngResource','ngMaterial','ui.router','ngAnimate','ngAria','ngMessages'])
    .config(function ($stateProvider,$urlRouterProvider) {

       
        $urlRouterProvider.otherwise('/addCustomer');

        $stateProvider

            //register States
            .state('register', {
                url: '/register',
                templateUrl: 'template/register/registration.html',
                controller: 'registerCtrl'
            })

            .state('register-2',{
                url:'/register1/:id',
                templateUrl:'template/register/registration-2.html',
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


            .state('broadCast',{
            url:'/broadCast',
            templateUrl:'template/broadCast.html',
            controller:'broadCastCtrl'
            })

            .state('dashboard',{
                url:'/dashboard',
                templateUrl: 'template/dashBoard/dashBoard.html',
                controller:'dashBoardController'
        })

        //this is state for add ty6xed Screen
            .state('addCustomer',{
            url:'/addCustomer',
            templateUrl:'template/Customer/addCustomer.html',
            controller:'customerCtrl'
            })
            .state('customerDirectory',{
            url:'/customerDirectory',
            templateUrl:'template/Customer/customerDirectory.html',
            controller:'customerCtrl'
            })
    });

    // .state('customer',{
    //     views:{
    //         'addCustomer':{
    //             templateUrl:'template/Customer/addCustomer.html',
    //             controller:'customerCtrl'
    //         },
    //         'customerDirectory':{
    //             templateUrl:'template/Customer/customerDirectory.html',
    //              controller:'customerCtrl'

    //         }
    //     }
    // })5tvgr
  
