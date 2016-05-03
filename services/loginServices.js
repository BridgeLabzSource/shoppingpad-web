(function() {
    angular.module('shoppingPad')
        .factory('loginService', function ($http,$q){
            var mobile=null,
                password=null,
                OTP=null;

            return{
                setMobile:function(data){
                    mobile=data;
                },
                setPassword:function(data){
                    console.log("password set")
                    password=data;
                },
                login:function(mob,pass)
                {
                    mobile=mob;
                    password=pass;
                },
                verifyOTP:function(){

                },
                resendOTP:function(){

                }
            }
        });
})