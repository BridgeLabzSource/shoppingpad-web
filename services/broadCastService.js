/**
* restfull call to get list of all broad cast
*/
angular.module('shoppingPad').service('broadCastService',broadCastService);
//used $http service get data.
function broadCastService(restService,$q){
/**
* to fetch broadcasts list from server
@return {function} callback function
*/
this.getBroadCasts=function(cb){
   restService.getRequest('customers/get',null,function(err,data){
            if(data){
                return cb(null,data);
            } else {
                return cb(err,null);
            }
        });
};//end of function
}//end of service