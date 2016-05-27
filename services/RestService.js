angular.module('shoppingPad').service('restService',restService);
function restService($http){
	//set port number and baseUrl here
	var port=3001;
	var baseUrl="http://localhost:"+port;

//generic getRequest function 
 this.postRequest=function(url,data,successCallback,failureCallback){
    return $http({
             method: 'POST',
             url: baseUrl+"/"+url,
             data: data
           });
// this.postRequest=function(url,data){
// 	return $http({
// 		method:'POST',
// 		url:baseUrl+"/"+url,
// 		data:data
// 	}).then(function(response){
// 		successCallback(response);

// 	},
// 	function(error){
// 		alert("internal server error");
// 		failureCallback(error);

// 	});

};//end of postRequest function

//generic postRequest function
this.getRequest=function(url,successCallback,failureCallback){
	return $http({
		method:"GET",
		url:baseUrl+"/"+url,
	 });
	//.then(function(response){
	// 	successCallback(response);
	// },
	// function(error){
	// 	failureCallback(error);
	// });

};//end of getRequest function
}//end of service
 
