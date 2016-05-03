(function() {
    angular.module('shoppingPad')
        .controller('registrationCtrl', function ($scope, registerService) {
            console.log('inside register');
            //
            registerService.getAll().then(function(data) {
                $scope.category = data;
                console.log($scope.category);
            });
        })

})();

//(function(){
//    angular.module('shoppingPad').controller('registrationCtrl',function($scope,registerService){
//       $scope.category=registerService.query();
//        $scope.setDataForUSer=function(userId){
//            $scope.oneUser=registerService.show({id:userId});
//
//            console.log($scope.oneUser);
//        }
//    });
//})();