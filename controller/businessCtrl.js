(function() {
    angular
        .module('shoppingPad')
        .controller('businessCtrl', businessCtrl);
    function businessCtrl($scope, businessService,Page) {
        console.log('inside business controller');
        Page.setTitle('New BusinessSingUp');
        $scope.location = '';

        $scope.doSearch = function(){
            if($scope.location === ''){
                alert('Directive did not update the location property in parent controller.');
            } else {
                alert('Yay. Location: ' + $scope.location);
            }
        };
        //sending data on submit function
    //    $scope.submit = function () {
    //        //array of option
    //        alert('inside submit function');
    //        //saving data into user variable
    //        var user = {
    //            name: $scope.name,
    //            url: $scope.url,
    //            location: $scope.location ='',
    //            email: $scope.email
    //        };
    //        console.log(user);
    //        businessService.businessSignUp(user).then(function (response) {
    //                if (response == 200) {
    //                    console.log(user);
    //                    alert('user saved');
    //                }
    //            },
    //            function (error) {
    //                console.log(error);
    //            });
    //    };
    //    //reset function to clear
    }

})();