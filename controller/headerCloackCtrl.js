angular.module('shoppingPad').controller('headerCloackCtrl',function($scope,$interval){

    function callAtInterval(){
        console.log("this text is getting printed after each second");
        var today = new Date();
        h=today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        if(h<10){
            h='0'+h;
        }
        if(m<10){
            m='0'+m;
        }
        if(s<10){
            s='0'+s;
        }
        $scope.h=h;
        $scope.m=m;
        $scope.s=s;
    }

    $interval(callAtInterval, 1000);
});
