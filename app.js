angular.module('starterApp', ['ui.router','ngAria','ngAnimate','ngStorage','ngMaterial'])
    .config(function($stateProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        //    Home State Routing
        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl:'template/register.html',
                controller: 'mainController'

        })

            .state('signIn',{
                url: '/signIn',
                templateUrl: 'template/signIn.html',
                controller: 'signInCtrl'

            })

            .state('login',{
                url:'/login',
                templateUrl:'template/login.html',
                controller: 'loginCtrl'

            })
    })

//'ngMaterial','ngAria','ngAnimate','ngMessages','ngStorage','ngMaterial'