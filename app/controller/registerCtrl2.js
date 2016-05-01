(function() {
    angular.module('shoppingPad').controller('registrationCtrl1', function ($scope, $stateParams, registerService) {
        console.log('inside registerCtrl2');
        $scope.category=registerService.getUser($stateParams.category_id);
        console.log($stateParams.category_id);
        console.log($scope.category);

    });
})();