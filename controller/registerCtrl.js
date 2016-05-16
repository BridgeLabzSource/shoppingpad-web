angular.module('shoppingPad').controller('registerCtrl',registerCtrl);

function registerCtrl($scope,registerService,$stateParams,$state,Page) {
    Page.setTitle('Shoppingpad');
    $scope.getCategory = function () {
        console.log('get category caleef');
        registerService.getAll().then(function (response) {
            $scope.category = response;
            console.log($scope.category);
        })
    },
        $scope.setCategory = function (id) {
            registerService.setCategory($stateParams.id).then(function (response) {
                $scope.category = response;
                $state.go('register-2', {id: id})
            });
        }

        $scope.login=function(){
            $state.go('app.login.step1')
        }
}