    (function() {
    angular.module('shoppingPad').service('businessService', businessService);
        function businessService($http, $q,restService) {
            console.log('inside business service');
            this.businessSignUp=function (user) {
                    //post method to send business form data to backend
                var deferred = $q.defer();
                return restService.postRequest('business/save',user,null).then
                (function (response) {
                //    resolve the promise
                        deferred.resolve(response.status);
                        return deferred.promise;
                        },
                        function (error) {
                            console.log('reject');
                            //error
                            deferred.reject(error);
                            return deferred.promise;
                        })
                }

            }
    })();
