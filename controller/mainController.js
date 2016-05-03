angular.module('shoppingPad')

    .controller('mainController',function($scope,$state){

        $scope.signIn=function() {
            $state.go('signIn')
        }
});