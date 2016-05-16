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

angular.module('shoppingPad').controller('loginController', loginCtrl);

function loginCtrl($scope, $state, loginServices, Page, $timeout) {
    Page.setTitle('SignUp');
    $scope.login = function () {
        //passing data to user credential of login.html
        var user = {
            mobile: $scope.mobile,
            password: $scope.password

        };

        loginServices.setUser(user).then(function (response) {
            $state.go('app.login.step2');

        });

    };

    $scope.get = function () {

        var counter;
        $scope.counter = 30;
        $scope.onTimeout = function () {
            $scope.show = false;
            $scope.abc = true;
            $scope.counter--;
            mytimeout = $timeout($scope.onTimeout, 1000);

            if ($scope.counter == 0) {
                $timeout.cancel(mytimeout)
                $scope.abc = false;
                $scope.show = true;

                return $scope.counter = 30;
            }

        };

        var mytimeout = $timeout($scope.onTimeout, 1000);

        $scope.refresh = function () {
            return $scope.onTimeout();
        }

        user = loginServices.getUser().then(function (users) {

            //passing values to loginOTP.html
            $scope.mobile = users[0].mobile;
            $scope.password = users[0].password;

            $scope.loginOTP = function () {
                $state.go('app.dashboard.step1');
                $timeout.cancel(mytimeout);

            }


        })
    }
}