(function() {
    angular.module('shoppingPad').service('restService', restService);
    function restService($http){
    	var port=3000;
    	var baseUrl="http://localhost"+port;
    	this.getRequest=function(path,query){
    		var result=$http.get(baseUrl+"/"+path,query);
    		return result;
    	}
    }
})();