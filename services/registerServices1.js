(function() {
    angular.module('shoppingPad')
        .factory('registerService', function ($http) {
            //stores json data into category array.
            var category = [];
            return {
                //function to get all category
                getAll: function () {
                    //calling json data
                    return $http.get('json/dummyJson.json').then(function(response) {
                        category = response.data;
                        return category;
                    });
                },
                //function to get one category detail by id.
                getUser: function (chatId) {
                    for (var i = 0; i < category.length; i++) {
                        console.log(category.length);
                        console.log(category);
                        console.log(category[i]);
                        ///TODO
                        console.log(chatId);
                        if(parseInt(category[i].id) == parseInt(chatId)) {
                            return category[i];
                        }
                    }
                    return null;
                }
            }
        });
})();

//(function(){
//    angular.module('shoppingPad').
//        factory('registerService',function($resource){
//           return $resource('http://jsonplaceholder.typicode.com/users/:id',{id:"@id"},{'show':{method:'GET',isArray:false},'query':{method:'GET',isArray:true},'update':{method:'PUT'}});
//        });
//})();

