angular.module('shoppingPad').service('restService',restService);
function restService($http){
    //set port number and baseUrl here
    var port=3055;
    var baseUrl="http://localhost:"+port;

//generic getRequest function
    this.getRequest=function(path,query){
        console.log("we are in the getRequest");
        var def=$http.get(baseUrl+"/"+path,query);
        console.log(def)
        return def;
    };//end of getRequest function

//generic post Request function
    this.postRequest=function(path,data,headers){
        //call http post method
        var result=$http.post(baseUrl+"/"+path,data);
        console.log("inside postRequest");
        return result;
    };//end of postRequest method
}//end of service


