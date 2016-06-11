angular.module('shoppingPad').controller('loginController', loginCtrl);

function loginCtrl($scope, $state, loginServices, Page, $timeout) {
    Page.setTitle('Signin');
    $scope.login = function () {
        //passing data to user credential of login.html
        var user = {
            mobile: $scope.mobile,
            password: $scope.password

        };
        console.log(user.mobile);

        loginServices.setUser(user).then(function (response) {
            console.log("state change");
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
        };

         loginServices.getUser().then(function (users) {

            //passing values to loginOTP.html
            $scope.mobile = users[0].mobile;
            console.log($scope.mobile);
            $scope.password = users[0].password;
            console.log($scope.password);

            $scope.loginOTP = function () {
                var data={
                    mobile:$scope.mobile,
                    password:$scope.password,
                    otp:$scope.otp
                };
                  console.log(data);
                loginServices.verifyOTP(data).then(function (response) {
                    $state.go('app.dashboard.step1');
                    $timeout.cancel(mytimeout);

                });


            }


        })
    }
}