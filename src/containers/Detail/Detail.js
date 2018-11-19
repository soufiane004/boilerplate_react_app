import React, { Component } from 'react';
import MonthPickerInput from 'react-month-picker-input'
import 'react-month-picker-input/dist/react-month-picker-input.css'

class Detail extends Component {

    render() {



        return (
          <div>
            <div class="row wrapper border-bottom navigation-path page-heading">
                <div class="col-lg-10">
                    <h2>Detail</h2>
                </div>
            </div>
            <div className="wrapper wrapper-content">
            {/*Entete----
            /*----------*/}
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
            </div>

          </div>
        )
    }

}

export default Detail
