//this is controller to update customer screens addCustomer,broadCast and all
angular.module('shoppingPad').controller('customerCtrl', customerCtrl);
//inject customerService to this controller for different customer services
//Page is another service injected to set title of page using Page Service's setTitle method

function customerCtrl($http,$state,$scope,customerService,Page) {

    //check current state and set page title accordingly
    if($state.current.name=='addCustomer'){
        Page.setTitle('Add Customer');
    }
    if($state.current.name=='customerDirectory'){
     Page.setTitle('Directory');
    }
        //set page title as a Customer Directory.
    //this is addCustomer function which will get invoked on add Customer button in Add Customer Screen
    $scope.addCustomer = function() {
        //this is customer array having two fields customer number and customer phone number
        alert("inside add Customer function");
        var customer = {
            name: $scope.name,
            number: $scope.number
        };
        //calling add Customer service's addCustomer method by passing Customer Object.
        customerService.addCustomer(customer).then(function(response){
                if(response == 200){
                    alert("data saved");
                }else{
                    alert("internal server Error");
                }
            },
            function(error) {
                alert(JSON.stringify(error));
            });
    }; //end of addCustomer function.
    //This is getCusttomer function.
    $scope.getCustomer = function() {
        alert("inside get Customer function");
        //call customerService's getCustomer() function to get list of all customers
        customerService.getCustomer().then(function(customers) {
                alert(customers);
                $scope.contacts=customers;
            },
            function(error){
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
