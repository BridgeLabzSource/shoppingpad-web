angular.module('shoppingPad').controller('addCustomerCtrl',addCustomer);
//This is controller to add Customer data to server

function addCustomer($scope,addCustomerService){
	alert("Add Customer controller");
    //A function invoke on button (add Customer)
	$scope.addCustomer=function(){
		//this is customer array having two fields customer number and customer phone number 
		  var customer={
		  	name:$scope.name,
		  	number:$scope.number
		};
		//callind add Customer service's addCustomer method by passing Customer Object.
		addCustomerService.addCustomer(customer).then(function(response){
			if(response==200){
				alert("data saved");
			}
		},
		function(error){
			alert("error");
		});
		alert("addCustomer");
	 //    alert(name);
	 //    alert(customer);	
	}
}