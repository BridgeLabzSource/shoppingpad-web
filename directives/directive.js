angular.module('shoppingPad').directive('phoneNumberValidator',phoneNumberValidator)


    function phoneNumberValidator($q,restService){
        var deferred=$q.defer();
        return{
            restrict:'EA',
            require:'ngModel',

            link:function($scope,element,attrs,ngModel){
                //ngModel.$asyncValidators.phoneNumber=function(modelValue , viewValue) {



                    ngModel.$asyncValidators.userMobile=function(modelValue,viewValue){
                        console.log(viewValue);
                        console.log(modelValue);
                        var mobile= (modelValue || viewValue).toString();
                        console.log(mobile);
                        return restService.getRequest('save/all?m='+mobile,null).then(function(response){
                                console.log("inside get");

                                return deferred.promise;
                            },
                            function(error){
                                deferred.reject(error);
                                return deferred.promise;
                            }
                        )
                    };

                }


            }

    }

//return validateMobile(mobile);

//function validateMobile(mobileNo)
//{
//
//}

//angular.module('shoppingPad').directive('phoneNumberValidator',userVerification)
//
//
//
//function userVerification($q,restService){
//    var deferred=$q.defer();
//    return{
//        require:'ngModel',
//
//        link:function(scope,elem,attr,ngModel){
//            console.log("inside link");
//
//            ngModel.$asyncValidators.userMobile=function(mobile){
//                return restService.getRequest('save/all',null).then(function(response){
//                        console.log("inside get");
//
//                        return deferred.promise;
//                },
//                    function(error){
//                        deferred.reject(error);
//                        return deferred.promise;
//                    }
//                )
//            }
//        }
//    }
//}


//link:function($scope,element,attrs,ngModel){
//    ngModel.$asyncValidators.phoneNumber=function(modelValue , viewValue) {
//
//        var mobile= (modelValue || viewValue).toString();
//        console.log(mobile);
//        return $q(function(resolve,reject){
//            if(mobile.length == 10){
//                return restService.getRequest('save/all?m='+ mobile,null);
//            }
//            else reject("not validated");
//        });
//
//    }
//
//
//}