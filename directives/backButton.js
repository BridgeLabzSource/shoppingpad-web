angular.module('shoppingPad')
.directive('back',['$window',function($window,toState,$state,event ){
 return {
     restrict:'A',
     link:function(scope,elem,attrs){
         elem.bind('click',function(){
             if($state === 'home'){
                 event.preventDefault()
             }
             else {
                 $window.history.back();
             }
         });
     }
 };
    }]);
