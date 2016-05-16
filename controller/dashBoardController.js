angular.module('shoppingPad').controller('dashBoardController',function($scope)
{


            this.isOpen = false;
            this.selectedMode = 'md-fling';
            this.availableModes= ['md-fling', 'md-scale'];
            this.availableDirections= ['up', 'down', 'left', 'right'];
                this.selectedDirections='up';
    //
    //$scope.onButtonClick=function(){
    //    $scope.buttons=true;
    //}
    //$scope.addCustomer=function(){
    //    $state.go('addCutomer')
    //}
    //
    //$scope.createBroadcast=function(){
    //    $state.go('broadCast')
    //}

    //$scope.createPromotion=function(){
    //    $state.go('')
    //}
});



