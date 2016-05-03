angular.module('shoppingPad')
    .controller('signInCtrl', function($scope,$state) {


        //$rootScope.name=$scope.name;
        //console.log(name)

        var storage;

        $scope.signIn=function(){

            storage=[$scope.name,$scope.security]
            console.log(storage);
            localStorage.setItem("passingData",JSON.stringify(storage))


           //$localStorage.LocalMessage=$scope.name+"   "+$scope.security;;
           // console.log($localStorage.LocalMessage)
            $state.go('login')
            console.log("inside signin")



            }
    });
