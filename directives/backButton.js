angular.module('shoppingPad')
.directive('back',['$window',function($window,toState,$state,event ){
 return {
     restrict:'A',
     link:function(scope,elem,attrs){
         elem.bind('click',function(){

                 $window.history.back();

         });
     }
 };
    }]);
