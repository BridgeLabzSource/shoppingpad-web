angular.module('shoppingPad').controller('registerCtrl',registerCtrl);

function registerCtrl($scope,registerService,$stateParams,$state)
{
   $scope.getCategory=function(){
        console.log('get category caleef');
       registerService.getAll().then(function(response){
           $scope.category=response;
           console.log($scope.category);
       })
        },
       $scope.setCategory=function(categoryId)
       {
           console.log('category ' + categoryId)
            registerService.setCategory(categoryId);
       }

}