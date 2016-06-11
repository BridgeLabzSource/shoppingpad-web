angular.module('shoppingPad').directive('phoneNumberValidator', phoneNumberValidator);


function phoneNumberValidator($q, loginServices, restService) {
    return {
        restrict: 'EA',
        require: 'ngModel',

        link: function ($scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.phoneNumber = function (modelValue, viewValue) {
                var deferred = $q.defer();

                var mobile = (modelValue || viewValue).toString();
                if (mobile.length === 10) {
                    restService.getRequest('save/all?m=' + mobile).then(function (response) {
                        if (response.data=='user exist') {
                            deferred.reject(response.status);
                            console.log(response.data)
                        }
                        else {
                            deferred.resolve();
                        }

                    }, function (error) {
                        //todo reject or resolve
                        return deferred.promise;
                    });

                } else {
                    //no validation error if length is not 10
                    deferred.resolve();
                }
                return deferred.promise;
            }
        }


    }

}
//angular.module('shoppingPad').directive('phoneNumberValidator',phoneNumberValidator)
//
//
//    function phoneNumberValidator($q,loginServices,restService) {
//        var deferred = $q.defer();
//        return {
//            restrict: 'EA',
//            require: 'ngModel',
//
//            link: function ($scope, element, attrs, ngModel) {
//                ngModel.$asyncValidators.phoneNumber = function (modelValue, viewValue) {
//                    var deferred = $q.defer();
//
//                    var mobile = (modelValue || viewValue).toString();
//                    if (mobile.length === 10) {
//                        restService.getRequest('save/all?m=' + mobile).then(function (response) {
//                            if (response.status === 'mobile already exist') {
//                                deferred.reject(response.status)
//                            }
//                            else {
//                                deferred.resolve();
//                            }
//
//                        }, function (error) {
//
//                            return deferred.promise;
//                        });
//
//                    } else {
//                        //no validation error if length is not 10
//                        deferred.resolve();
//                    }
//                    return deferred.promise;
//                }
//            }
//        }
//    }
                //ngModel.$asyncValidators.phoneNumber=loginServices.checkUser()
                //{
                //
                //    var mobile= (modelValue || viewValue).toString();
                //
                //        if(mobile.length == 10){
                //
                //            return restService.getRequest('save/all?m='+mobile,null).then(function(response){
                //                deferred.reject();
                //                return deferred.promise;
                //            },function(error){
                //                deferred.resolve();
                //
                //            });
                //
                //
                //            //return $q(function(resolve,reject){
                //            //    if(loginServices.checkMobile(mobile))
                //            //    {
                //            //        resolve(console.log('mobile number exist'));
                //            //    }
                //            //    else
                //            //    {
                //            //        reject(console.log('not exist'));
                //            //    }
                //            //});
                //
                //    }
                //
                //}

            //link:function($scope,element,attrs,ngModel){
            //    //ngModel.$asyncValidators.phoneNumber=function(modelValue , viewValue) {
            //
            //
            //
            //        ngModel.$asyncValidators.userMobile=function(modelValue,viewValue){
            //            console.log(viewValue);
            //            console.log(modelValue);
            //            var mobile= (modelValue || viewValue).toString();
            //            console.log(mobile);
            //            return restService.getRequest('save/all?m='+mobile,null).then(function(response){
            //                    console.log("inside get");
            //
            //                    return deferred.promise;
            //                },
            //                function(error){
            //                    deferred.reject(error);
            //                    return deferred.promise;
            //                }
            //            )
            //        };
            //
            //    }






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
//
//            }
//            else reject("not validated");
//        });
//
//    }
//
//
//}

//if(mobile.length == 10){
//    console.log('mobile 2' + typeof loginServices.getMobileNo());
//    return $q(function(resolve,reject){
//        if(loginServices.checkMobile(mobile))
//        {
//            console.log('mobile number exist');
//        }
//        else
//        {
//            console.log('not exist');
//        }
//    });
//
//}