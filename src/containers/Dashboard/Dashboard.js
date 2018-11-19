import React, { Component } from 'react';
import {colors,colorsAreaChart} from '../Config.js'
import Badge from '../../components/widgets/Badge.js'
import PieChart from '../../components/Charts/PieChart2/PieCharts.js'
import AreaChart from '../../components/Charts/AreaChart/AreaChart.js'
import MonthPickerInput from 'react-month-picker-input'
import 'react-month-picker-input/dist/react-month-picker-input.css'


class Dashboard extends Component {

    render() {

        return (
          <div>

            <div className="wrapper wrapper-content">
                  {/*Entete----
                  ----------*/}
                  <div className="row" style={{'margin-left':'1px','margin-right':'1px'}}>
                    <div className="col-lg-12">
                      <div class="ibox float-e-margins">
                            <div class="ibox-title MonthPickerInputStyle" >
                                  <div className="col-xs-8 col-lg-8 cls">
                                    <button class="btn btn-white btn-bitbucket" style={{'float':'left'}}>
                                          <i class="fa fa-refresh"> </i> Actualiser
                                    </button>
                                    <MonthPickerInput
                                      onChange={function(maskedValue, selectedYear, selectedMonth) {
                                      console.log(maskedValue, selectedYear, selectedMonth);
                                      }}
                                    />
                                  </div>
                                  <div className="pull-right">
                                          <h2 class="no-margins">235364,346</h2>
                                          <small>Montant Net</small>
                                  </div>
                            </div>
                      </div>
                    </div>
                  </div>
                  {/*PieChart----
                  ----------*/}
                  <div className="row">
                    <div className="col-lg-12">
                      <div class="col-lg-6">
                          <Badge value="386200" text="Total des revenus" icon="fa fa-angle-double-up fa-2x">
                            <PieChart
                              colors={colors}
                              width={600}
                              height={350}
                              datas={[
                                {name: 'Matin', value: 400},
                                {name: 'Apm.', value: 300}
                              ]}
                            />
                          </Badge>
                      </div>
                      <div class="col-lg-6">
                        <Badge value="386200" text="Total des charges" icon="fa fa-angle-double-down fa-2x">
                          <PieChart
                            colors={colors}
                            width={600}
                            height={350}
                            datas={[
                              {name: 'Perso.', value: 400},
                              {name: 'Eau/Elec.', value: 300},
                              {name: 'Glaçe', value: 400},
                              {name: 'Limon.', value: 300},
                              {name: 'Eau Min.', value: 400},
                              {name: 'Petit Déj.', value: 300},
                              {name: 'Autres', value: 400}
                            ]}
                          />
                        </Badge>
                      </div>
                    </div>
                  </div>
                  {/*Evolution----
                  ----------*/}
                  <div className="row">
                    <div className="col-lg-12">
                        <AreaChart
                            height = {350}
                            colors = {colorsAreaChart}
                            datas =  {[
                              {name: '1', Charges: 4000, Revenus: 2400, Net: 2400},
                              {name: '2', Charges: 3000, Revenus: 1398, Net: 2210},
                              {name: '3', Charges: 2000, Revenus: 9800, Net: 2290},
                              {name: '4', Charges: 2780, Revenus: 3908, Net: 2000},
                              {name: '5', Charges: 1890, Revenus: 4800, Net: 2181},
                              {name: '6', Charges: 2390, Revenus: 3800, Net: 2500},
                              {name: '7', Charges: 3490, Revenus: 4300, Net: 2100},
                              {name: '8', Charges: 4000, Revenus: 2400, Net: 2400},
                              {name: '9', Charges: 3000, Revenus: 1398, Net: 2210},
                              {name: '10', Charges: 2000, Revenus: 9800, Net: 2290},
                              {name: '11', Charges: 4000, Revenus: 2400, Net: 2400},
                              {name: '12', Charges: 3000, Revenus: 1398, Net: 2210},
                              {name: '13', Charges: 2000, Revenus: 9800, Net: 2290},
                              {name: '14', Charges: 2780, Revenus: 3908, Net: 2000},
                              {name: '15', Charges: 1890, Revenus: 4800, Net: 2181},
                              {name: '16', Charges: 2390, Revenus: 3800, Net: 2500},
                              {name: '17', Charges: 3490, Revenus: 4300, Net: 2100},
                              {name: '18', Charges: 4000, Revenus: 2400, Net: 2400},
                              {name: '19', Charges: 3000, Revenus: 1398, Net: 2210},
                              {name: '20', Charges: 2000, Revenus: 9800, Net: 2290},
                              {name: '21', Charges: 4000, Revenus: 2400, Net: 2400},
                              {name: '22', Charges: 3000, Revenus: 1398, Net: 2210},
                              {name: '23', Charges: 2000, Revenus: 9800, Net: 2290},
                              {name: '24', Charges: 2780, Revenus: 3908, Net: 2000},
                              {name: '25', Charges: 1890, Revenus: 4800, Net: 2181},
                              {name: '26', Charges: 2390, Revenus: 3800, Net: 2500},
                              {name: '27', Charges: 3490, Revenus: 4300, Net: 2100},
                              {name: '28', Charges: 4000, Revenus: 2400, Net: 2400},
                              {name: '29', Charges: 3000, Revenus: 1398, Net: 2210},
                              {name: '30', Charges: 2000, Revenus: 9800, Net: 2290},
                              {name: '31', Charges: 2000, Revenus: 9800, Net: 2290}
                            ]}/>
                    </div>
                  </div>
            </div>

          </div>
        )
    }

}

export default Dashboard
