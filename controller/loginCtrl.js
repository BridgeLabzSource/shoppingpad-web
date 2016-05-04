angular.module('shoppingPad').controller('loginCtrl',loginCtrl);

function loginCtrl($scope,$stateParams,$state,loginServices) {
    $scope.login=function(mob,pin)
    {
        loginServices.login(mob,pin).then(function(){
            $state.go() //move to next state
        })
    }
}