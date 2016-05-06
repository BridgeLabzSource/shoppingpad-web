(function() {
    angular
        .module('shoppingPad')
        .controller('businessCtrl', businessCtrl);
    function businessCtrl($scope, businessService,Page) {
        console.log('inside business controller');
        Page.setTitle('New BusinessSingUp');
        //sending data on submit function
            $scope.submit = function () {
                //array of option
                $scope.options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', '...'];
                //saving data into user variable
                var user = {
                    title: $scope.name,
                    url: $scope.url,
                    select: $scope.select,
                    location: $scope.location
                };
                businessService.businessSignup(user).then(function (response) {
                        if (response == 200) {
                            alert('user saved');
                        }
                    },
                    function (error) {
                        console.log(error);
                    });
            };
            //reset function to clear
            $scope.reset = function () {
                $scope.obj = {
                    name: "",
                    select: "",
                    email: "",
                    location: ""
                }
            };
            $scope.reset();
        }

})();