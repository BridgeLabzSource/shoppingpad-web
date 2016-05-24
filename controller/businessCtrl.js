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
           alert('inside submit function');
           //saving data into user variable
           var user = {
               title: $scope.title,
               url: $scope.url,
               location: $scope.location,
               email: $scope.email
           };
           console.log(user);
           businessService.businessSignUp(user).then(function (response) {
                   if (response == 200) {
                       console.log(user);
                       alert('user saved');
                   }
               },
               function (error) {
                   console.log(error);
               });
        };
    }
})();