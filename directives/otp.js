angular.module('shoppingPad').directive('enterOtpValidator', enterOtpValidator);

function enterOtpValidator($q,restService){
    var deffered=$q.defer();

    return{
        restrict:'EA',
        require:'ngModel',
        link:function($scope,elem,attr,ngModel){
            ngModel.$asyncValidators.enterOtp = function (modelValue, viewValue){
                var otp=(modelValue || viewValue).toString();

                if(otp.length==5){
                    restService.getRequest('save/getOtp?o='+otp).then(function(response){
                        if (response.data=='invalid otp') {
                            deffered.reject(response.status);
                            console.log(response.data)
                        }
                        else {
                            deffered.resolve();
                        }
                    },function(error){
                        return deffered.promise;
                    })
                }else{
                    deffered.resolve();
                }
                return deffered.promise;

            }
        }
    }

}
