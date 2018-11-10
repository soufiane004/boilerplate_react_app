import React from 'react';
import { Button } from 'react-bootstrap';
import { smoothlyMenu } from '../layouts/Helpers';
import $ from 'jquery'
import Auth from '../../utils/Auth.js'
import {hashHistory} from 'react-router';
import CommonsData from '../../utils/CommonsData.js'


class TopHeader extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    disconnect(){
      Auth.clearLocalStorage()
      hashHistory.push('/')
      
    }

    componentDidMount(){
      /*console.log("top header CommonsData.currentUser : "+CommonsData.currentUser)
      console.log("top header localStorage.currentUser : "+localStorage.currentUser[0])
      console.log("top header localStorage.currentUser : "+localStorage.currentUser[1])
      console.log("top header localStorage.currentUser : "+localStorage.currentUser[2])
      console.log("top header localStorage.currentUser : "+localStorage.currentUser[3])
      console.log("top header localStorage.currentUser : "+localStorage.currentUser[4])
      console.log("top header localStorage.currentUser : "+localStorage.currentUser[5])
      console.log("top header localStorage.currentUser : "+localStorage.currentUser[6])
      console.log("whichIsVisible()[0].nom : "+localStorage.currentUser)*/

    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-success " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"></i> </a>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a style={{'paddingTop':'10px','paddingBottom':'10px'}}>
                                <Button onClick={this.disconnect} style={{'color':'#7b7b7b','backgroundColor':'#f3f3f4','border':'none'}}><i className="fa fa-sign-out"></i>Déconnexion</Button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default TopHeader
