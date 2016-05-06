(function() {
    angular.module('shoppingPad').controller('registerCtrl', registerCtrl);

    function registerCtrl($scope, registerService, $stateParams, $state,$rootScope,Page) {
        Page.setTitle('Registration');
        var categoryId = $stateParams.categoryId;
        $scope.category=null;
        $scope.cur_category = null;
        $scope.getCategory = function () {

            console.log('get category caleef');
            registerService.getAll().then(function (response) {
                $scope.category = response;
                console.log($scope.category);
            })
        }
            $scope.subCategory = function (id) {
                Page.setTitle('');
                if (!id) return;
                registerService.getSubCategory(id).then(function(data) {
                    $scope.cur_category = category.cur_category;
                    $state.go('register.detail', {'categoryId': id})
                });

            }

    }
})();