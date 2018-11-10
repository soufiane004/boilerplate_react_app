import $ from 'jquery'

export default class CFPApiUpload{

static cfpRequest (urlReq,params,typeReq,callback)
{


  $.ajax({
        url:urlReq,
        type:typeReq,
        data:params,
        processData: false,
        contentType: false,
        success:function(result){
               if(result){
                    if(callback!=null)
                      callback(result,urlReq+JSON.stringify(params))
               }else{
                  if(callback!=null)
                    callback([])
               }
        },
        error:function(xhr,status,error){
              console.log('Error calling API',status,error.toString());
        }
  })


  }
}
