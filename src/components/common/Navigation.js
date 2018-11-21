import React, { Component } from 'react';
//import { Link, Location } from 'react-router-dom';
import { Link } from 'react-router';
import holaLogo from '../../public/img/logo-white.png'
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
                                  <Link to="/reporting/synthese" data-toggle="dropdown" className="dropdown-toggle"><Image src={holaLogo} style={{'width':'190px','height':'50px','paddin':'5px'}}/></Link>
                            </div>
                            <div className="logo-element">
                                HB
                            </div>
                        </li>
                        <li className={this.activeRoute("/dashboard")}>
                          <Link to="/dashboard"><i className="fa fa-bar-chart"></i> <span className="nav-label">Dashboard</span></Link>
                        </li>
                        <li className={this.activeRoute("/detail")}>
                            <Link><i className="fa fa-bar-chart"></i> <span className="nav-label">Détail</span><span class="fa arrow"></span></Link>
                            <ul className={this.secondLevelActive("/detail")}>
                                <li><Link to="/detail/detailAnnuel" className={this.activeSecondLevel("/detail/detailAnnuel")}>Annuel</Link></li>
                                <li><Link to="/detail/detailMensuel" className={this.activeSecondLevel("/detail/detailMensuel")}>Mensuel</Link></li>
                            </ul>
                        </li>
                        <li className={this.activeRoute("/data")}>
                          <Link to="/data"><i className="fa fa-database"></i> <span className="nav-label">Data</span></Link>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation
