
angular.module('shoppingPad',['ngResource','ngMaterial','ui.router','ngAnimate','ngAria','ngMessages'])
.run(['$window', '$rootScope',
    function ($window ,  $rootScope) {
        $rootScope.goBack = function(){
            $window.history.back();
        }
    }])
    .config(function ($stateProvider,$urlRouterProvider){
       $urlRouterProvider.otherwise('/');
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
        });

    })
