 angular
    .module('shoppingPad')
    .controller('businessCtrl', function($scope) {
         $scope.options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', '...'];
        $scope.submit = function() {
            // submit code goes here
        };
        $scope.reset = function() {
            $scope.obj = {
                name: "",
                myselect: "",
                status: "",
                email:""
            }
        };
        $scope.reset();
    });