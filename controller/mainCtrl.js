
angular.module('shoppingPad').controller('mainCtrl',function($scope,$interval,Page){
    $scope.Page=Page;

    function setCurrentTime(){
        var today=new Date(),
        h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        $scope.hour=h;
        $scope.minutes=m;
        $scope.sec=s;
    }
    $interval(setCurrentTime, 4000);

});
