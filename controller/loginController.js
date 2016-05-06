//angular.module('shoppingPad').controller('loginCtrl',loginCtrl);
//y
//function loginCtrl($scope,$stateParams,$state,loginServices) {
//    $scope.login=function(mob,pin)
//    {
//        loginServices.login(mob,pin).then(function(){
//            $state.go('login') //move to next state
//        })
//    }
//}

angular.module('shoppingPad').controller('loginController',loginCtrl);

    function loginCtrl($scope,$state,loginServices,Page){
        Page.setTitle('SignUp');
        $scope.login=function()
        {
            //passing data to user credential of login.html
            var user={
                mobile:$scope.mobile,
                password:$scope.password

            };
            //
            //loginServices.setUser(user).then(function(response){
            //    $scope.data=response;
            //    console.log($scope.data);
            //    $state.go('loginOTP')
            //});

            //passin data to loginServices and sending to next state
            loginServices.setUser(user).then(function(response){
                //$scope.data=response;
            $state.go('loginOTP');

            });

            //loginServices.login(mob,pass).then(function(){
            //    console.log("inside services");
            //    $state.go('loginOTP')
            //})


        };




    }