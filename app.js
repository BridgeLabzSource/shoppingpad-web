angular.module('shoppingPad',['ngResource','ngMaterial','ui.router','ngAnimate','ngAria','ngMessages'])
    .config(function ($stateProvider,$urlRouterProvider){
       $urlRouterProvider.otherwise('/register');
        $stateProvider
            .state('register',{
                url:'/register',
                templateUrl:'template/registration.html',
                controller:'registerCtrl'
            })
            .state('register-1',{
                url:'/register1',
                templateUrl:'template/registration-1.html',
                controller:'registerCtrl'
            })
            .state('register-2',{
                url:'/register2/:categoryId',
                templateUrl:'template/registration-2.html',
                controller:'registerCtrl'
            })
    //        .state('business',{
    //          url:'/business',
    //            templateUrl:'template/businessSignup.html',
    //            controller:'businessCtrl'
    //
    //})
    });
