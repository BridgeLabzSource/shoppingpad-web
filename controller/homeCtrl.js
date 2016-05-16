angular.module('shoppingPad').controller('homeCtrl',function($state,$scope){
    $scope.login=function(){
        $state.go('app.login.step1');
    }
})