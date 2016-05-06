angular.module('shoppingPad').controller('customerDirectoryCtrl',customerDirectory);
//this is controller to get Customer Directory from service,injected CustomerDirectory Service
function customerDirectory($scope,customerDirectoryService){
	alert("inside customer Directory Controller");
	customerDirectoryService.getContact();
	$scope.contacts=['azhar','khan','rehan','sarfraz'];
	$scope.title="Title";
}