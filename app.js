(function () {
    angular.module('shoppingPad', ['ngResource','ngMaterial', 'ui.router', 'ngAnimate', 'ngAria','ngMessages'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home/index');
            $stateProvider
                .state('app', {
                    url: "",
                    abstract: true,
                    controller: 'homeCtrl',
                    template: '<div ui-view></div>'
                })
                //this is registeration's index states
                .state('app.home', {
                    url: "/home",
                    abstract: true,
                    controller: 'homeCtrl',
                    template: '<div ui-view></div>',
                    // onEnter: function () {
                    //     console.log('in ap.index');
                    // }
                })
                //this is registeration's step1
                .state('app.home.register1', {
                    url: '/index',
                    templateUrl: 'template/register/registration.html',
                    controller: 'registerCtrl'
                })
                .state('app.home.register2', {
                    url: "/register",
                    templateUrl: 'template/register/registration-1.html',
                    controller: 'registerCtrl'
                })
                .state('app.home.register3', {
                    url: "/register/{categoryId:[0-9]{1,5}}",
                    templateUrl: 'template/register/registration-2.html',
                    controller: 'registerCtrl' 

                })
                .state('app.home.register4', {
                    url: "/business",
                    templateUrl: 'template/businessSignup.html',
                    controller: 'businessCtrl'
                })

           // login state
                .state('app.login', {
                    url: "/login",
                    abstract: true,
                    controller: 'homeCtrl',
                    template: '<div ui-view></div>',
                    onEnter: function () {
                        console.log('abc');
                    }
                })
                .state('app.login.step1', {
                    url: '/step1',
                    templateUrl: 'template/signin/login.html',
                    controller: 'loginController'
                })
                .state('app.login.step2', {
                    url: '/step2',
                    templateUrl: 'template/signin/loginOTP.html',
                    controller: 'loginOTPCtrl'
                })

            //dashboard
                .state('app.dashboard', {
                    url: "/dashboard",
                    abstract: true,
                    controller: 'homeCtrl',
                    template: '<div ui-view></div>',
                    onEnter: function () {
                        console.log('abc');
                    }
                })
                .state('app.dashboard.step1', {
                    url: '/step1',
                    templateUrl: 'template/dashBoard/dashBoard.html',
                })
                .state('app.customer',{
                    url:'/customer',
                    abstract:true,
                    template:'<div ui-view></div>',
                    controller:'homeCtrl',
                    onEnter:function(){
                        console.log('inside app.customer state');
                    }

                })
                .state('app.customer.add',{
                    url:'/add',
                    templateUrl:'template/Customer/addCustomer.html',
                    controller:'customerCtrl'
                })
                .state('app.customer.directory',{
                    url:'/directory',
                    templateUrl:'template/Customer/customerDirectory.html',
                    controller:'customerCtrl'
                })
                .state('app.customer.broadCast',{
                    url:'/broadCast',
                    templateUrl:'template/broadCast.html',
                    controller:'broadCastCtrl'
                });

        });
})();