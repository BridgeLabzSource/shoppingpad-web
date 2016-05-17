(function() {
    angular.module('shoppingPad').controller('registerCtrl', registerCtrl);
    function registerCtrl($scope, registerService, $stateParams, $state,$rootScope,Page) {
        console.log("in Register Ctrl");
        var categoryId = $stateParams.name;
       // $scope.category=null;
        $scope.cur_category = null;
        //getCategory function to get all category from rest call.
        $scope.getCategory = function () {
            //setting title for registration
            Page.setTitle('Registration');
            registerService.getAllCategory().then(function (response) {
                $scope.category = response;
                console.log($scope.category);
            })
        };
            //passing id to subCategory function to get sub category by id
            $scope.subCategory = function (name) {
                //setting title for sub-category
                Page.setTitle('Sub-Register');
                registerService.getSubCategory(name).then(function(data) {
                    console.log(data);
                    $scope.cur_category = data;
                    console.log($scope.cur_category);
                    $state.go('app.home.register3', {'name': name })
                });

            };

        $scope.signin=function(){
            $state.go('app.login.step1')
        }

    }
})();