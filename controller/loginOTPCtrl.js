angular.module('shoppingPad').controller('loginOTPCtrl',loginCtrl1);

function loginCtrl1($scope,loginServices,$state) {

    user=loginServices.getUser().then(function(users) {

        //passing values to loginOTP.html
        $scope.mobile=users[0].mobile;
        $scope.password=users[0].password;

        $scope.loginOTP= function () {
            $state.go('dashboard')
        }
    });  //gettin values from login services




}




11 teas
6 coffee
1 khamba