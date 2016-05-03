angular.module('starterApp')

    .controller('mainController',function($scope,$state){

        $scope.signIn=function() {
            $state.go('signIn')
        }
});