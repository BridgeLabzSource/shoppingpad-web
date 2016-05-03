(function() {
    angular.module('shoppingPad').controller('registrationCtrl1', function ($scope, $stateParams, registerService) {
        console.log('inside registerCtrl2');
        $scope.category=registerService.getUser($stateParams.chatId);
        console.log($stateParams.chatId);
                console.log($scope.category);
    });
})();