import React, { Component } from 'react';
import { GridColumn as Column } from '@progress/kendo-react-grid';
import {colors,colorsAreaChart} from '../Config.js'
import AreaChart from '../../components/Charts/AreaChart/AreaChart.js'
import MonthPickerInput from 'react-month-picker-input'
import 'react-month-picker-input/dist/react-month-picker-input.css'
import GridTable from '../../components/GridTable/GridTable.js'

class DetailMensuel extends Component {
    render() {
        return (
            <div style={{'margin-top':'10px'}}>
                {/*Entete----
                /*----------*/}
                <div className="row">
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
                <div class="row" style={{'margin-top':'10px'}}>
                {/*Grid------
                ------------*/}
                <div class="col-sm-12">
                    <GridTable dataGrid={[
                      {date_recette: '10/12/2018',argent:1000,personnel:123,petit_dej:12,lait:20,limonade:122,glace:122,cafe:122,eau_mineral:111,eau:100,electricite:11,autres:23,total_charges: 4000, matin: 2400, apm: 2400,total_recette:122,net:1234},
                      {date_recette: '10/12/2018',argent:1000,personnel:123,petit_dej:12,lait:20,limonade:122,glace:122,cafe:122,eau_mineral:111,eau:100,electricite:11,autres:23,total_charges: 4000, matin: 2400, apm: 2400,total_recette:122,net:1234},
                      {date_recette: '10/12/2018',argent:1000,personnel:123,petit_dej:12,lait:20,limonade:122,glace:122,cafe:122,eau_mineral:111,eau:100,electricite:11,autres:23,total_charges: 4000, matin: 2400, apm: 2400,total_recette:122,net:1234},
                      {date_recette: '10/12/2018',argent:1000,personnel:123,petit_dej:12,lait:20,limonade:122,glace:122,cafe:122,eau_mineral:111,eau:100,electricite:11,autres:23,total_charges: 4000, matin: 2400, apm: 2400,total_recette:122,net:1234},
                      {date_recette: '10/12/2018',argent:1000,personnel:123,petit_dej:12,lait:20,limonade:122,glace:122,cafe:122,eau_mineral:111,eau:100,electricite:11,autres:23,total_charges: 4000, matin: 2400, apm: 2400,total_recette:122,net:1234},
                      {date_recette: '10/12/2018',argent:1000,personnel:123,petit_dej:12,lait:20,limonade:122,glace:122,cafe:122,eau_mineral:111,eau:100,electricite:11,autres:23,total_charges: 4000, matin: 2400, apm: 2400,total_recette:122,net:1234},
                      {date_recette: '10/12/2018',argent:1000,personnel:123,petit_dej:12,lait:20,limonade:122,glace:122,cafe:122,eau_mineral:111,eau:100,electricite:11,autres:23,total_charges: 4000, matin: 2400, apm: 2400,total_recette:122,net:1234},
                      {date_recette: '10/12/2018',argent:1000,personnel:123,petit_dej:12,lait:20,limonade:122,glace:122,cafe:122,eau_mineral:111,eau:100,electricite:11,autres:23,total_charges: 4000, matin: 2400, apm: 2400,total_recette:122,net:1234},
                      {date_recette: '10/12/2018',argent:1000,personnel:123,petit_dej:12,lait:20,limonade:122,glace:122,cafe:122,eau_mineral:111,eau:100,electricite:11,autres:23,total_charges: 4000, matin: 2400, apm: 2400,total_recette:122,net:1234}                  ]}>
                                <Column field="date_recette" title="Date" filter="text" width={70}/>
                                <Column field="argent" title="Argent" filterable={false}/>
                                  <Column field="personnel" title="Perso." filterable={false}/>
                                  <Column field="petit_dej" title="Petit déj." filterable={false}/>
                                  <Column field="lait" title="Lait" filterable={false}/>
                                  <Column field="limonade" title="Limonade" filterable={false}/>
                                  <Column field="glace" title="Glaçe" filterable={false}/>
                                  <Column field="cafe" title="Café" filterable={false}/>
                                  <Column field="eau_mineral" title="Eau Min." filterable={false}/>
                                  <Column field="eau" title="Eau" filterable={false}/>
                                  <Column field="electricite" title="Electr." filterable={false}/>
                                  <Column field="autres" title="Autres" filterable={false}/>
                                  <Column field="total_charges" title="Tot. Charges" filterable={false}/>

                                  <Column field="matin" title="Matin" filterable={false}/>
                                  <Column field="apm" title="Apm" filterable={false}/>
                                  <Column field="total_recette" title="Tot. Recette" filterable={false}/>
                                <Column field="net" title="Net" filterable={false}/>
                    </GridTable>
                </div>
                {/*Evolution----
                ----------*/}
                <div className="col-sm-12" style={{'padding-right':'0px','padding-left':'0px'}}>
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
      )
    }
}

export default DetailMensuel
