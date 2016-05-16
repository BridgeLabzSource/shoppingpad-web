// service for Login Page
angular.module('shoppingPad').service('loginServices',loginServices);

function loginServices($q){

    var users=[];
    var mobile=null;
    var password=null;

    //getting user value from loginController
    this.setUser=function(user){

        return $q(function(resolve,reject){
            if(user) {
                resolve(

                    mobile = user.mobile,
                    password = user.password,
                    users.push(user),
                    console.log(users)
                )
            }
                else
                {
                    reject("something is wrong")
                }


              //storing value to users array

        })


    };//end of setUser Function

    //passing user value to loginOTP
    this.getUser=function(){
         console.log("inside getuser");
        return $q(function(resolve,reject){

            if(users){
                resolve(users)
            }
            else{
                reject("something is wrong")
            }

        })


    }

    this.requestOTP=function(){}

    this.verifyOTP=function(){}
}