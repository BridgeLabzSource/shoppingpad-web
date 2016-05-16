//this is broadCast Controller to get broadCast list from service.
(function() {
	angular.module('shoppingPad').controller('broadCastCtrl', broadCast);
//a broadCast service is injected in this controlller to get the data from rest.
	function broadCast($scope, broadCastService) {
		alert("broad Cast");
		$scope.title = "broadCast Controller";
		broadCastService.getBroadCasts().then(function (data) {
				alert(data);
				//get broadCast in an array
				$scope.broadCasts = data;
			},
			function (error) {
				alert(error);

			});
	}
})();