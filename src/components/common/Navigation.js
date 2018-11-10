import React, { Component } from 'react';
//import { Link, Location } from 'react-router-dom';
import { Link } from 'react-router';
import bmcecap from '../../public/img/bkm.png'
import {Image} from 'react-bootstrap'
import $ from 'jquery'
import metismenu from 'metismenu';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeSecondLevel(secondLevelName){
      return this.props.location.pathname.indexOf(secondLevelName) > -1  ? "activeSecondLevelName" : "";
    }

    activeRoute(routeName) {
      return this.props.location.pathname.indexOf(routeName) > -1  ? "active" : "";
    }

    secondLevelActive(routeName) {
      return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                             </span>
                                  <Link to="/reporting/synthese" data-toggle="dropdown" className="dropdown-toggle"><Image src={bmcecap} style={{'width':'190px','height':'50px','paddin':'5px'}}/></Link>
                            </div>
                            <div className="logo-element">
                                BKM
                            </div>
                        </li>
                        <li className={this.activeRoute("/reporting")}>
                            <Link><i className="fa fa-bar-chart"></i> <span className="nav-label">Reporting</span><span className="fa arrow"></span></Link>
                            <ul className={this.secondLevelActive("/reporting")}>
                                <li><Link to="/reporting/synthese" className={this.activeSecondLevel("/reporting/synthese")}>Synthèse</Link></li>
                                <li><Link to="/reporting/historique" className={this.activeSecondLevel("/reporting/historique")}>Historique</Link></li>
                            </ul>
                        </li>
                        <li className={this.activeRoute("/administration")}>
                          <Link to="/administration"><i className="fa fa-cogs"></i> <span className="nav-label">Administration</span></Link>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation
