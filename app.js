
//set angular module and inject depancies in an array,used ngMaterila for designing.
angular.module('shoppingPad',['ngMaterial','ui.router'])
	.config(function($urlRouterProvider,$stateProvider){

		//set default state for app
		$urlRouterProvider.otherwise('/customerDirectory');
		// //define ui for each state
		// $stateProvider.state('home',{
		// }).
		//this is state for broadCast Screen
		$stateProvider.state('broadCast',{
			url:'/broadCast',
			templateUrl:'/shoppingpad-web/app/template/broadCast.html',
			controller:'broadCastCtrl'
		})
		//this is state for add Customer Screen
		.state('addCutomer',{
			url:'/addCustomer',
			templateUrl:'/shoppingpad-web/app/template/addCustomer.html',
			controller:'addCustomerCtrl'
		})
		.state('customerDirectory',{
			url:'/customerDirectory',
			templateUrl:'/shoppingpad-web/app/template/customerDirectory.html',
			controller:'customerDirectoryCtrl'
		});
	});
