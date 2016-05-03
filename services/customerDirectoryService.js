//this is customer Directory Service having two functions getContact and getShoppingPad
angular.module('shoppingPad').service('customerDirectoryService',customerDirectoryService);
function customerDirectoryService($http,$q){


this.getContact=function(){
	alert("inside Service");
};
}

	

	