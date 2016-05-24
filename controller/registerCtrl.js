(function () {
    angular.module('shoppingPad').controller('registerCtrl', registerCtrl);
   
    function registerCtrl($scope, registerService, $stateParams, $state, Page) {
     var categoryId=$stateParams.categoryId;
        $scope.category = null;
        $scope.cur_category = null;
           //getCategory function to get all category from rest call.
       
        $scope.getCategory = function () {
            //setting title for registration
            Page.setTitle('Registration');
            registerService.getAllCategory().then(function (response) {
                $scope.category = response;
                console.log($scope.category);
               })
        };
       
        //passing id to subCategory function to get sub category by id
       
        $scope.subCategory = function (id) {
            //setting title for sub-category
              Page.setTitle('Sub-Register');
            registerService.getSubCategory(id).then(function (data) {
                  console.log(data);
                  $scope.cur_category = data.data; 
                 $state.go('app.home.register3', {'categoryId': id});
                   
            });
         $scope.cur_category=$scope.subCategory(categoryId);

       };
       
        //$scope.signin = function () {
        //    $state.go('app.login.step1')
        //}
    }
})();