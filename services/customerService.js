//This is Customer Service having services for customer controller
angular.module('shoppingPad').service('customerService', customerService);
//here is service defined
function customerService($q, $http, restService) {
    //this is deferred object which will resolve or resolve the promise
    var deferred = $q.defer();
    //a function to add customer data to backend used service.it takes customer object as paramater.
    this.addCustomer = function(customer) {
        alert("inside add customer servive function");
        alert("inside Service" + JSON.stringify(customer));


  return restService.postRequest('customers/info', customer);

        // return restService.postRequest('customers/info', customer, function(response) {
        //         alert("insidedee");
        //         deferred.resolve(response.data);
        //         return deferred.promise;
        //     },
        //     function(error) {
        //         deferred.reject(error);
        //         return deferred.promise;
        //     });
    };
    //end of addCustomer function

    //this is function to get Customers
    this.getCustomer = function() {
        alert("inside getCustomer");
        return restService.getRequest('customers/get');
        // ,function(response){
        //         deferred.resolve(response);
        //         return deferred.promise;
        // },
        // function(error){
        //         deferred.reject(error);
        //         return deferred.promise;
        // });
    }; //end of getCustomer function

    //function to post csv file to server
    this.uploadCsv = function(file) {
        alert("inside upload csv service ");
        var fd = new FormData();
        fd.append('upl', file);
        return $http.post('http://localhost:3000/customers/csv', fd, {
            headers: { 'Content-Type': undefined }
        }).then(function(response) {
                deferred.resolve(response.data);
                return deferred.promise;
            },
            function(error) {
                deferred.reject(error);
                return deferred.promise;
            });
    }; //end of uploadCsv function


};

//end of getCustomer function
//end of customer Service
