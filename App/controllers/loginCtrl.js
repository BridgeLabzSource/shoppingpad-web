angular.module('starterApp')

    .controller('loginCtrl',function($scope,$rootScope) {

        var anurag=$rootScope.abc;
        console.log("inside login")
        var singh=$rootScope.def;
        console.log(anurag,singh)
    })