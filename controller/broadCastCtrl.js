//this is broadCast Controller to get broadCast list from service.
angular.module('shoppingPad').controller('broadCastCtrl',broadCast);
//a broadCast service is injected in this controlller to get the data from rest.
function broadCast($scope,broadCastService,Page){
	Page.setTitle('Broad Cast');
	alert("broad Cast");
	//call getBroadCasts function of broadCastService
	broadCastService.getBroadCasts().then(function(data){
		alert(data);
		//get broadCast in an array
        $scope.broadCasts=data;
 
	},
	function(error){
		alert(error);

	});
}