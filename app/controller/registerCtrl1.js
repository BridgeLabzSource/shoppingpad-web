(function() {
    angular.module('shoppingPad')
        .controller('registrationCtrl', function ($scope, registerService) {
            console.log('inside register');

            registerService.getAll().then(function(data){
                $scope.category=data;
                console.log($scope.category);
            })
        })

})();