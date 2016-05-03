angular.module('starterApp')
    .controller('signInCtrl', function($scope,$state,$rootScope) {


        //$rootScope.name=$scope.name;
        //console.log(name)



        $scope.signIn=function(){

            //$rootScope.security=security;
            //console.log(security);
           var abc,def;
            $rootScope.def=$scope.name;
            $rootScope.abc=$scope.security;
            console.log($rootScope.abc,$rootScope.def)
            $state.go('login')
            console.log("inside signin")



            }
    });
