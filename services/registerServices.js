(function() {
    angular.module('shoppingPad')
        .factory('registerService', function ($http,$q) {
            //stores json data into category array.
            var category = [];
            var cur_category = null;
            return {
                //function to get all category
                getAll: function () {
                    //calling json data
                    return $http.get('json/dummyJson.json').then(function (response) {
                        category = response.data;
                        return category;
                    });
                },
                // get category by id
                getUser: function (chatId) {
                    for (var i = 0; i < category.length; i++) {
                        console.log(category);
                        console.log(category.length);
                        ///TODO
                        console.log(chatId);
                        if (category[i].id === parseInt(chatId)) {
                            return category[i];
                        }
                    }

                    return null;
                },
                //set category by id
                setCategory: function (id) {
                    var deferred = $q.defer();
                    $http({
                        method:'GET',
                        url:'json/dummyJson.json',
                       param:{id:id}
                    }).success(function (response) {
                            if (typeof response.id === "number") {
                                deferred.resolve(response.id);
                            }else {
                                deferred.reject(response.id);
                            }
                    }).error(function (response) {
                        deferred.reject(response.id);
                    });

                            return deferred.promise;
                }


            }
        });
    //removeCategory:function(id){
                //  cur_category.remove(id);
                //},

})();

//(function(){
//    angular.module('shoppingPad').
//        factory('registerService',function($resource){
//           return $resource('http://jsonplaceholder.typicode.com/users/:id',{id:"@id"},{'show':{method:'GET',isArray:false},'query':{method:'GET',isArray:true},'update':{method:'PUT'}});
//        });
//})();

