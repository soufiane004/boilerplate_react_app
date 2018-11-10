import $ from 'jquery'
import Auth from '../utils/Auth.js'
import {hashHistory} from 'react-router'

export default class CFPApi{

static cfpRequest (urlReq,params,typeReq,callback)
{

  params.SID=localStorage.SID
  $.ajax({
        url:urlReq,
        type:typeReq,
        data:params,
        success:function(result){

             if(result==="AUTHENTIFICATION_ERROR"){
                Auth.clearLocalStorage()
                hashHistory.push("/")
                console.log("result :"+result)
             }
             else{
               if(result){
                    if(callback!=null){
                      callback(result,urlReq+JSON.stringify(params))
                    }

               }else{
                  if(callback!=null)
                    callback([])
               }
             }
        },
        error:function(xhr,status,error){
              console.log('Error calling API',status,error.toString());
        }
  })


  }
}
