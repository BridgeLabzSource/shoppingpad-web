angular.module('starterApp', ['ui.router','ngAria','ngAnimate','ngStorage','ngMaterial'])
    .config(function($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        //    Home State Routing
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
    }),
        .state('home',{
            url: '/home',
            templateUrl:'template/register.html',
            controller: 'mainController'

        })

            .state('signIn',{
                url: '/signIn',
                templateUrl: 'template/signIn.html',
                controller: 'signInCtrl'

            }),

            .state('login',{
                url:'/login',
                templateUrl:'template/login.html',
                controller: 'loginCtrl'

            })
    })

//'ngMaterial','ngAria','ngAnimate','ngMessages','ngStorage','ngMaterial'