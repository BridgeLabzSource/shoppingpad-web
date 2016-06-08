
angular.module('shoppingPad').service('loginServices',loginServices)

function loginServices($q,restService){


    var users=[];
    var mobile=null;
    var password=null;
    var otp=null;
    var deferred=$q.defer();

    //getting user value from loginController

    this.setUser=function(user){
        console.log("inside post");


        return restService.postRequest('save/saveOTP',user,null).then(function(response){
                //console.log('inside setUser');
                deferred.resolve(response.status);
                mobile = user.mobile;
                    password = user.password;
                    users.push(user);
                    console.log(users);
                console.log("inside set service");

                //return promise object
                return deferred.promise;
            },
            function(error){
                deferred.reject(error);
                return deferred.promise;
            }
        );
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
    };

    this.verifyOTP=function(data){
        return restService.postRequest('save/saveData',data,null).then(function(response){
                //console.log('inside setUser');
                deferred.resolve(response.status);

                //return promise object
                return deferred.promise;
            },
            function(error){
                deferred.reject(error);
                return deferred.promise;
            }
        );
    }

}
