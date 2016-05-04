(function() {
    angular.module('shoppingPad')
        .factory('registerService', function ($http) {
            //stores json data into category array.
            var category = [];
            var cur_category=null;
            return {
                //function to get all category
                getAll: function () {
                    //calling json data
                    return $http.get('json/dummyJson.json').then(function(response) {
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
                        if(category[i].id === parseInt(chatId)) {
                            return category[i];
                        }
                    }

                    return null;
                },
                //set category by id
                setCategory:function(id){

                    console.log('inside setCategory Service');
                    if(typeof id==="number"){
                        cur_category=id;
                    }
                }

            }
        });
})();

