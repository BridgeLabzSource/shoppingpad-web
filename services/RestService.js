/**
 * This is Service For rest Calls 
 * This Service Defines two method one for post Request and one for get request
 */
angular.module('shoppingPad').service('restService', restService);

function restService($http) {
    //set port number and baseUrl here
    var port = 3003;
    var baseUrl = "http://localhost:" + port;

    /** generic getRequest function */
    this.postRequest = function(url, data, headers, cb) {
        /**
        @return {Object} $http return promise object
        */
        $http({
            method: 'POST',
            url: baseUrl + "/" + url,
            data: data,
            headers: headers,
        }).then(function(response) {
                return cb(null, response);
            },
            function(error) {
                return cb(error, null);
            });
    }; //end of postRequest function

    /**
    * generic postRequest function
    @return {function} call back function
    */
    this.getRequest = function(url, query, cb) {
        $http({
            method: "GET",
            url: baseUrl + "/" + url
        }).then(function(response) {
                return cb(null, response);
            },
            function(error) {
                return cb(error, null);
            });
    }; //end of getRequest function
} //end of service
