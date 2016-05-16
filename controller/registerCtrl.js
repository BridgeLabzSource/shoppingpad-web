(function() {
    angular.module('shoppingPad').controller('registerCtrl', registerCtrl);
    function registerCtrl($scope, registerService, $stateParams, $state,$rootScope,Page) {

        alert("in Register Ctrl");
        //setting title for registration
        Page.setTitle('Registration');
        var categoryId = $stateParams.categoryId;
        $scope.category=null;
        $scope.cur_category = null;
        //getCategory function to get all category from rest call.
        $scope.getCategory = function () {
            registerService.getAllCategory().then(function (response) {
                $scope.category = response;
                console.log($scope.category);
            })
        };
            //passing id to subCategory function to get sub category by id
            $scope.subCategory = function (id) {
                Page.setTitle('');
                if (!id) return;
                registerService.getSubCategory(id).then(function(data) {
                    $scope.cur_category = category.cur_category;
                    $state.go('register.detail', {'categoryId': id})
                });

            }

        $scope.signin=function(){
            $state.go('app.login.step1')
        }

    }
})();