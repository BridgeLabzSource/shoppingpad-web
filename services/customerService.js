/**
 * This is Customer Service having services for customer controller
 */

angular.module('shoppingPad').service('customerService', customerService);

/** here is service defined */

function customerService($q, $http, restService) {
    /**
    * a function to add customer data to backend used service.it takes customer object as paramater.
    @return {function} Success or Failure Callback
    */
    this.addCustomer = function(customer, cb) {
        /**
        * Calling restService's postRequest
        @return {function} callback function
        */
        restService.postRequest('customers/info', customer, function(err, data) {
            if (data) {
                return cb(null, data);
            } else {
                return cb(err, null);
            }
        });
    }; // end of addCustomer function.

    /**
    * this is function to get Customers
    @return {function} CallBack function
    */
    this.getCustomer = function(cb) {
        /**
        * getRequest method
        @return {function} callback function
        */
        restService.getRequest('customers/get', null, function(err, data) {
            if (data) {
                return cb(null, data);
            } else {
                return cb(err, null);
            }
        });
    }; //end of getCustomer function

    /**
    * function to post csv file to server
    @return {function} callback function
    */
    this.uploadCsv = function(file, cb) {
        var fd = new FormData();
        fd.append('upl', file);
        restService.postRequest('customers/csv', fd, { 'Content-Type': undefined }, function(err, data) {
            if (err) {
                return cb(err, null);
            } else {
                return cb(null, data);
            }
        });
    }; //end of uploadCsv function
}//end of customer Service
