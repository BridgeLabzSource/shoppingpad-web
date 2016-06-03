/**
* this is broadCast Controller to get broadCast list from service.
*/
angular.module('shoppingPad').controller('broadCastCtrl',broadCast);
/** a broadCast service is injected in this controlller to get the data from rest.*/

function broadCast($scope,broadCastService,Page){
	Page.setTitle('Broad Cast');
	alert("broad Cast");
    $scope.getBroadCasts=function(){

   /** call getBroadCasts function of broadCastService */
		broadCastService.getBroadCasts(function(err,response){
				if(response){
                 console.log(response.data);
                 $scope.broadCasts=response.data;
            	} else{
                console.log(err);
            }
        });
    }//end of broadCast function
}//end of controller