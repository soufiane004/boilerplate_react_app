import React, { Component } from 'react';
import Badge from '../../components/widgets/Badge.js'

class Dashboard extends Component {

    render() {



        return (
          <div>
            <div class="row wrapper border-bottom navigation-path page-heading">
                <div class="col-lg-10">
                    <h2>Dashboard</h2>
                </div>
            </div>
            <div className="wrapper wrapper-content">
                <div className="row">
                  <div class="col-lg-12">
                      <div class="col-lg-4">
                        <Badge icon="fa fa-angle-double-up fa-2x" iconColor={{'colo':'rgb(23, 156, 53)'}} backStyle="widget style1 navy-bg" text="Total des revenus" value={Number(1000000).toLocaleString()}/>
                      </div>
                      <div class="col-lg-4">
                        <Badge icon="fa fa-angle-double-down fa-2x" iconColor={{'colo':'#d32d1c'}} backStyle="widget style1 navy-bg" text="Total des charges" value={Number(11236454).toLocaleString()}/>
                      </div>
                      <div class="col-lg-4">
                        <Badge icon="fa fa-balance-scale fa-2x" backStyle="widget style1 navy-bg" text="Montant Net" value={Number(23456754).toLocaleString()}/>
                      </div>
                  </div>
                </div>
            </div>

          </div>
        )
    }

}

export default Dashboard
