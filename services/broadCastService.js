//restful call to get list of all broad cast
(function(){
angular.module('shoppingPad').service('broadCastService',broadCastService);
//used $http service get data.
function broadCastService($http,$q){
	// alert("inside broadCastService");
	var deferred=$q.defer();//this is deferred object for asyc call
	this.getBroadCasts=function(){

		return $http.get('http://localhost:3009/api/getCustomers').then(function(response){
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
})();