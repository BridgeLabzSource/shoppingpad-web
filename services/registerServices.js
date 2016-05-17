(function() {
    angular.module('shoppingPad')
        .factory('registerService', function ($q, $http) {
            //stores json data into category array.
            var category = {};
            category.subCaegory = [];
             category.cur_category = {};
            baseUrl = 'http://localhost:4000/category';
            //return {
                //function to get all category
            category.getAllCategory= function () {
                    var deferred = $q.defer();
                    //calling json data
                    return $http.get(baseUrl).then(function (response) {
                            category = response.data;
                            deferred.resolve(category);
                            return deferred.promise;
                        },
                        function (error) {
                            deferred.reject(error);
                            return deferred.promise;
                        });

                },
               // get category by id
                category.getSubCategory=function (name) {
                    console.log('inside subcategory');
                    var deferred = $q.defer();
                    return $http.get(baseUrl +'/' + name)
                        .success(function (response) {
                            deferred.resolve(response.data);
                            return deferred.promise;
                        })
                        .error(function(error){
                            deferred.reject(error);
                            return deferred.promise;
                        })

                };

            return category;
            //}
        })
})();
                //setCategory:function(id){
                //
                //    console.log('inside setCategory Service');
                //    if(typeof id==="number"){
                //        cur_category=id;
                //    }
                //}


