(function() {
    angular.module('shoppingPad').service('registerService', registerService,restService);

    function registerService($q, $http) {
        //var category={};
        var deferred = $q.defer();
        //function to get all category
             this.getAllCategory = function () {

                 //calling json data
                 return restService.getRequest('/api/category',null).then(function (response) {
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
                return $http.get(baseUrl + '/' + id)
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



