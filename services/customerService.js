//This is Customer Service having services for customer controller
(function() {
	angular.module('shoppingPad').service('customerService', customerService);

//here is service defined
	function customerService($q, $http) {
		//this is deferred object which will resolve or resolve the promise
		var deferred = $q.defer();

		//a function to add customer data to backend used service.it takes customer object as paramater.
		this.addCustomer = function (customer) {
			alert("inside Service")
			return $http({
				method: 'POST',
				url: 'http://localhost:3007/api/addCustomer',
				data: customer,
				header: {'Content-Type': 'application/json'}
			}).then(function (response) {
					//resolve the promise with status code in response object
					deferred.resolve(response.status);
					alert(response.status);
					//return promise object
					return deferred.promise;
				},
				function (error) {
					//if something went wrong at backend reject the promise
					deferred.reject(error);
					//return promise object
					return deferred.promise;
				});
		};//end of addCustomer function

		//this is function to get Customers
		this.getCustomer = function () {
			alert("inside getCustomer");
			return $http.get('http://localhost:3009/api/getCustomers').then(function (response) {
					deferred.resolve(response.data);
					return deferred.promise;
				},
				function (error) {
					deferred.reject(error);
					return deferred.promise;
				});
		}//end of getCustomer function
	}//end of customer Service
})();