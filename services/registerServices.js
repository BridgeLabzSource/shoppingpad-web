(function() {
    angular.module('shoppingPad').service('registerService', registerService);

    function registerService($q, $http,restService) {
        var deferred = $q.defer();
        
        //function to get all category
             this.getAllCategory = function () {
                  console.log('in controller');
                 //calling restservices to get all category.
                 return restService.getRequest('api/category',null).then(function (response) {
                        category = response.data;
                         deferred.resolve(category);
                         return deferred.promise;
                     },
                     function (error) {
                         deferred.reject(error);
                         return deferred.promise;
                     });
             },
                 //function to get category by id
            this.getSubCategory = function (id) {
                console.log('inside subcategory');
                // calling restServices to get category by id 
                return restService.getRequest('api/category'+'/'+id)
                    .success(function (response) {
                        deferred.resolve(response.data);
                          return deferred.promise;
                    },
                    function (error) {
                        deferred.reject(error);
                        return deferred.promise;
                    });
            };
        }
})();



