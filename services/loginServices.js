
angular.module('shoppingPad').service('loginServices',loginServices);

function loginServices($q,restService){

    var users=[];
    var mobile=null;
    var password=null;
    var deferred=$q.defer();

    //getting user value from loginController
    this.setUser=function(user){
        alert("inside post");

            return restService.postRequest('save/saveOTP',user,null).then(function(response){
                deferred.resolve(response.status);
                    mobile = user.mobile,
                        password = user.password,
                        users.push(user),
                        console.log(users)
                    console.log("inside set service");

                //return promise object
                return deferred.promise;
            },
            function(error){
                deferred.reject(error);
                return deferred.promise;
            }
            );
        //return $q(function(resolve,reject){
        //    if(user) {
        //        resolve(
        //
        //            mobile = user.mobile,
        //            password = user.password,
        //            users.push(user),
        //            console.log(users)
        //        )
        //    }
        //        else
        //        {
        //            reject("something is wrong")
        //        }
        //
        //
        //      //storing value to users array
        //
        //})
        //

    };//end of setUser Function

    //passing user value to loginOTP
    this.getUser=function(){

        return $q(function(resolve,reject){

            if(users){
                resolve(users)
            }
            else{
                reject("something is wrong")
            }

        })
        //return restService.getRequest('save/all',null).then(function(response){
        //
        //        console.log('inside get service');
        //        //return promise object
        //        deferred.resolve(response.status);
        //        console.log(response)
        //        return deferred.promise;
        //    },
        //    function(error){
        //        deferred.reject(error)
        //        return deferred.promise;
        //
        //})

    }

    this.requestOTP=function(){}

    this.verifyOTP=function(){}
}