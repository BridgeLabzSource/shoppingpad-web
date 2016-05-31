angular.module('shoppingPad').service('Interceptor',interceptor);

var interceptor=function($q){

        return{
            request:function(config){
                console.log(config);
                return config;
            },

            response:function(result){

                return result;
            },

            responseError:function(rejection){
                console.log('failed with',rejection.status,'status');

                return $q.reject(rejection);
            }



        }
};
