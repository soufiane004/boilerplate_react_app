import $ from 'jquery'
import CommonsData from './CommonsData.js'
import CFPApi from '../api/CFPApi.js'
import Constantes from './Constantes.js'
export default class Auth{

    static authenticateUser(username,password,callback){
      console.log(username+" "+password+" "+callback)

          if(localStorage.token){
            CommonsData.AuthenticationObject = $.parseJSON(Auth.getAuthenticationObject())
            if(callback)
            callback(true,CommonsData.AuthenticationObject)
          }else
          Auth.authRequest(username,password,(authResult)=> {
              if(authResult.authenticated){
                  console.log("authResult ok :"+JSON.stringify(authResult))
                  CommonsData.AuthenticationObject = authResult
                  localStorage.token = authResult.token
                  localStorage.authenticationObject = JSON.stringify(authResult)
                  localStorage.user=authResult.result.user
                  //localStorage.banques=JSON.stringify(authResult.result.banques)
                  //localStorage.agences=JSON.stringify(authResult.result.agences)
                  //localStorage.natures=JSON.stringify(authResult.result.natures)
                    if(callback)
                    callback(true,authResult)

              }else{
                console.log("authResult nok :"+JSON.stringify(authResult))
                if(callback)
                    callback(false)
              }
          })

    }

    static getUserAuthenticatedState(){
      return localStorage.getItem('stateUser')
      //CommonsData.AuthenticationObject = $.parseJSON(Auth.getAuthenticationObject())
      //console.log(Auth.getAuthenticationObject());
      //var state

      //console.log("1state :"+state)
      //console.log("state : "+state)
      //return state
      //return localStorage.getItem('SID')!==null
    }

    static clearLocalStorage()
    {
      localStorage.removeItem('SID')
      localStorage.removeItem('currentUser')
      localStorage.removeItem('nom')
      localStorage.removeItem('prenom')
      localStorage.removeItem('groupeLibelle')

      //localStorage.removeItem('agences')
      //localStorage.removeItem('natures')
      //localStorage.removeItem('authenticationObject')
    }

    static deautheticateUser(cb){
      var params={}
      params.userId=3384
      Auth.clearLocalStorage()
      $.ajax({

        url:'http://localhost:8088/BackService/login/disconnect/',//Constants.BASE_URL+'/client/login/logout',
        type:'POST',
        data:params,
        success:function(result){
          cb()
    },

    error:function(xhr,status,error){
    console.log('login',status,error.toString());
    cb()
    }


      })



    }


    static isUserAuthenticated(){
      return localStorage.getItem('SID')!==null
    }


    static getAuthenticatedUser(){
      return localStorage.getItem('currentUser')

    }

    static getAuthenticatedUserID(){
      return localStorage.getItem('idUser')
    }

    static getAuthenticatedUserFullName(){
      return localStorage.getItem('nom')+" "+localStorage.getItem('prenom')
    }

    static getAuthenticatedUserEmail(){
      return localStorage.getItem('email')
    }

    static getAuthenticatedUserPassword(){
      return localStorage.getItem('password')
    }

    static getAuthenticatedUserGroupe(){
      return localStorage.getItem('groupeLibelle')
    }



    static authRequest (username,password,callback)
    {
      var params = {}
      params.login = username
      params.password = password
      params.hasCookie = false
      params.isCookieAvailable = false
      params.frontedVersion = "2.1"

    $.ajax({
    url:'http://localhost:8088/BackService/login/authentification',
    type:'POST',
    data:params,
    success:function(result){
      console.log("result : "+JSON.stringify(result))
    if(result){
       if(result.statut==="Authentication_succeeded")
       {

      callback({
        authenticated : true,
        token :result.sessionId,
        result:result
      })

    }else callback({
       authenticated :false
    })
    }},
    error:function(xhr,status,error){
    console.log('login',status,error.toString());
    }
    })
    }
}
