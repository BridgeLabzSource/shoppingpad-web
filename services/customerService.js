//This is Customer Service having services for customer controller
angular.module('shoppingPad').service('customerService',customerService);

//here is service defined
function customerService($q,$http){
	//this is deferred object which will resolve or resolve the promise
	var deferred=$q.defer();

	//a function to add customer data to backend used service.it takes customer object as paramater.
	this.addCustomer=function(customer){
		alert("inside Service"+JSON.stringify(customer))
		return $http({
			method:'POST',
			url:'http://localhost:3042/addCustomer',
			data:customer,
			header:{'Content-Type': 'application/x-www-form-urlencoded'}
		}).then(function(response){
			alert('inside response');
			//resolve the promise with status code in response object
			deferred.resolve(response.status);
			alert(response.status);
			//return promise object
			return deferred.promise;
		},
		function(error){
			alert("reject");
			//if something went wrong at backend reject the promise 
			deferred.reject(error);
			//return promise object
			return deferred.promise;
		});
	};//end of addCustomer function
	//this is function to get Customers
	this.getCustomer=function(){
		alert("inside getCustomer");
		return $http.get('http://localhost:3011/api/getCustomers').then(function(response){
			deferred.resolve(response.data);
			return deferred.promise;
		},
		function(error){
			deferred.reject(error);
			return deferred.promise;
		});
	};//end of getCustomer function
}//end of customer Service