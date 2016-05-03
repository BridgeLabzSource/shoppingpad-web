angular.module('shoppingPad').service('addCustomerService',addCustomer);
function addCustomer($q,$http){
	var deferred=$q.defer();//defer object which will resject or resolve
	this.addCustomer=function(customer){
		return $http({
			method:'POST',
			url:'http://54.86.64.100:3000/api/v1/user/signup',
			data:customer,
			headers:{'Content-Type': 'application/json'}
		}).then(
		function(response){
			//resolve the promise
			alert("success");
			deferred.resolve(response.status);
			return deferred.promise;
		},
		function(error){
			alert("error");
			//if error occured just reject the promise
			deferred.reject(error);
			return deferred.promise;
		}
		);
		alert("Add Customer service");
		alert(customer.name);
	};
    // return $http({
    // 	method:'POST',
    // 	url:'',
    // 	data:''
    // })
}


(function(){
	console.log("executed");

})();