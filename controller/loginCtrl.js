angular.module('shoppingPad')

    .controller('loginCtrl',function($scope) {

        //$scope.anurag=$rootScope.abc;
        //console.log("inside login")
        //$scope.singh=$rootScope.def;
        //console.log($scope.anurag,$scope.singh)

        var retriveData=localStorage.getItem("passingData");
        console.log("inside login");
        console.log(retriveData);

        var login=JSON.parse(retriveData);
        console.log(login)

    })

