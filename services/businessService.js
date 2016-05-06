(function() {
    angular.module('shoppingPad').factory('businessService', function ($http, $q) {
        console.log('inside business service');
        return {
            businessSignup: function (user) {
                //post method to send business form data to backend
                var deferred = $q.defer();
                return $http({
                    method: 'POST',
                    url: '',
                    data: user,
                    headers: {'Content-Type': 'application/json'}
                }).then
                (function (response) {
                        //    resolve the promise
                        deferred.resolve(response.status);
                        return deferred.promise;
                    },
                    function (error) {
                        //error
                        deferred.reject(error);
                        return deferred.promise;
                    })
            }
        }

    });
})();
