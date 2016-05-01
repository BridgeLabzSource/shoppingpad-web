(function() {
    angular.module('shoppingPad')
        .factory('registerService', function ($http) {
            var category = [];
            return {
                getAll: function () {
                    return $http.get('json/dummyJson.json').then(function (response) {
                        category = response.data;
                        return category;
                    });
                },
                getUser: function(category_id) {
                    for (var i=0; i<category.length; i++) {
                        console.log(category.length);
                        if (category[i].id === parseInt(category_id)) {
                            return category[i];
                        }

                    }
                    return null;
                }

            }
        });

})();