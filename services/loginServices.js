//(function() {
//    angular.module('shoppingPad')
//        .factory('loginServices', function ($http,$q){


//            console.log('inside services');
//            var user={},
//                mobile=null,
//                password=null,
//                OTP=null;
//
//
//            return{
//
//                setMobile:function(data){
//
//                    return $q(function(resolve,reject){
//                        if(data) {
//
//                            resolve(data);
//                        }
//                        reject("data is not same");
//                    })
//                },
//
//                //setPassword:function(data){
//                //    console.log("password set");
//                //    password=data;
//                //},
//                //login:function(mob,pass)
//                //{
//                //    mobile=mob;
//                //    password=pass;
//                //},
//                //verifyOTP:function(data)
//                //{
//                //    return $q(function(resolve,reject){
//                //
//                //            if(data==5) resolve("data is 5");
//                //            reject("dat is not 5");
//                //    });
//                //},
//                //resendOTP:function(){
//                //
//                //}
//
//                getMobile:function(data){
//                    return ser;
//                }
//
//            }
//
//        });
//})();
//


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