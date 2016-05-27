//restfull call to get list of all broad cast
angular.module('shoppingPad').service('broadCastService',broadCastService);
//used $http service get data.
function broadCastService(restService,$q){
	// alert("inside broadCastService");
	var deferred=$q.defer();//this is deferred object for asyc call
	this.getBroadCasts=function(){
		return restService.getRequest('customers/get',null).then(function(response){
			deferred.resolve(response.data);
			return deferred.promise;
		},
		function(error){
			deferred.reject(error);
			return deferred.promise;
		});
		return $http.get('http://localhost:3002/customers/get').then(function(response){
			//resovle the promise with data in response object retrived by http
			deferred.resolve(response.data);
			return deferred.promise;//return promis
		},
		function(error){
			//if something went wrong reject promise
			deferred.reject(error);
			return deferred.promise;
		});
	};//end of function
}//end of service