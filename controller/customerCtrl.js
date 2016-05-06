//this is controller to update customer screens addCustomer,broadCast and all
angular.module('shoppingPad').controller('customerCtrl', customerCtrl);
//inject customerService to this controller for different customer services


function customerCtrl($scope, customerService) {
    //this is addCustomer function which will get invoked on add Customer button in Add Customer Screen
    $scope.addCustomer = function() {
        //this is customer array having two fields customer number and customer phone number 
        var customer = {
            name: $scope.name,
            number: $scope.number
        };

        //callind add Customer service's addCustomer method by passing Customer Object.
        customerService.addCustomer(customer).then(function(response){
                if (response == 200){
                    alert("data saved");
                }else{
                    alert("internal server Error");
                }
            },
            function(error) {
                alert("error");
            });
    }; //end of addCustomer function.
    //This is getCusttomer function.
    $scope.getCustomer = function() {
        alert("inside get Customer function");
        //call customerService's getCustomer() function to get list of all customers
        customerService.getCustomer().then(function(customers) {
                alert(customers);
                $scope.contacts = customers;
            },
            function(error) {
                alert("error");
            });
    }; //end of getCustomer function

     $scope.fileChanged = function(){
        angular.element('#fileUplaod').trigger('click');
  };
  
  $scope.profilePictureSelected = function(data){
    console.log(data.files[0]);
    
  };

} //end of controller
