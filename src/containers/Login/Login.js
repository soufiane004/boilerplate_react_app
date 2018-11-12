import React, { Component } from 'react';
import {ToastContainer, ToastStore} from 'react-toasts';
import {hashHistory} from 'react-router';
import CommonsData from '../../utils/CommonsData.js'
import {Image} from 'react-bootstrap'
import bmcecap from '../../public/img/logo.png'
import $ from 'jquery'
import Constantes from '../../utils/Constantes.js'
import CFPApi from '../../api/CFPApi.js'
import Auth from '../../utils/Auth.js'
//import { Redirect } from 'react-router'

class Login extends Component {

  constructor(props, context) {
      super(props, context);

      this.state = {
        login:'',
        password:'',
        checkUserAuthenticated:false,
      }
      this.onAuthenticate=this.onAuthenticate.bind(this);
      this.onLoginChange=this.onLoginChange.bind(this);
      this.onPasswordChange=this.onPasswordChange.bind(this);

      this.onAuthenticateCallback=this.onAuthenticateCallback.bind(this)
  }

  onLoginChange(e) {
    var tempState = this.state;
    tempState.login=e.target.value;
    this.setState(tempState);
  }

  onPasswordChange(e) {
    var tempState = this.state;
    tempState.password=e.target.value;
    this.setState(tempState);
  }

  onAuthenticate(){
    console.log("onAuthenticate")
    if(this.state.login.length===0 || this.state.password.length===0){
      var tempState=this.state
      tempState.checkUserAuthenticated=false
      this.setState(tempState)

      ToastStore.error('Un ou plusieurs champs sont requis',3000);
    }else{
      var form_data={
        login: this.state.login,
        password: this.state.password,
      }
      CFPApi.cfpRequest(Constantes.URL+'Authentification/authentification',form_data,'POST',this.onAuthenticateCallback);
    }

  }

  onAuthenticateCallback(result){

    console.log("result.statut : "+result.statut)
    if(result.statut==="Authentication_succeeded"){
      CommonsData.SID=result.SID
      CommonsData.currentUser=result.user
      localStorage.SID = result.SID
      localStorage.currentUser = result.user.length

      console.log("onAuthenticateCallback CommonsData.currentUser : "+JSON.stringify(CommonsData.currentUser))
      /*var tempState=this.state
      tempState.checkUserAuthenticated=true
      this.setState(tempState)*/
      //browserHistory.push('/CFPBKM/#/reporting/synthese');
      //this.props.history.push('/CFPBKM/#/reporting/synthese');
      //Router.browserHistory.push('/somepath');
      hashHistory.push("/reporting/synthese");
    }
    else if(result.statut==="User_desactivated"){
      ToastStore.error('Compte utilisateur désactivé',3000);
    }
    else{
      ToastStore.error('Login ou mot de passe incorrect',3000);
    }
  }

  componentDidMount(){
      $('body').addClass('gray-bg');
      /*if(Auth.isUserAuthenticated()){
        browserHistory.push('/CFPBKM/#/reporting/synthese');
      }*/
  }

  componentWillUnmount(){
      $('body').removeClass('gray-bg');
  }



    render() {

        return (
          <div className="loginPage">
          <ToastContainer store={ToastStore}/>
          <div class="middle-box text-center loginscreen  animated fadeInDown">

            <div>
                  <div>
                      <h3 class="logo-name"></h3>
                  </div>

                  <div>
                      <Image src={bmcecap} style={{'width':'100%','height':'50%','padding-bottom':'15px'}}/>
                  </div>

                            {/*<div class="well">
                                <h4>
                                    Hola Statistics
                                </h4>
                            </div>*/}


                      <div class="form-group">
                          <input type="text" class="form-control" placeholder="Login" onChange={this.onLoginChange}/>
                      </div>
                      <div class="form-group">
                          <input type="password" class="form-control" placeholder="Password" onChange={this.onPasswordChange}/>
                      </div>
                      <button class="btn btn-primary block full-width m-b btnConnexion" onClick={this.onAuthenticate}>Connexion</button>



                  <p class="m-t"> <small><strong>Copyright &copy; 2018</strong></small> </p>
              </div>
          </div>
          </div>
        )
    }

}

export default Login;
