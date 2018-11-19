import React from 'react';
import Chart from 'react-google-charts'
import './PieChartStyle.css'

const PieChartOld = (props) =>(
    <Chart className="PieChart"
      height={'200px'}
      chartType="PieChart"
      loader={<div className="iconLoading"><i class="fa fa-spinner fa-spin fa-3x"></i>{' '}Chargement en cours...</div>}
      data={props.data}
      options={{
        title: props.title,
        // Just add this option
        is3D: true,
      }}
      rootProps={{ 'data-testid': '2' }}
    />
)
export default PieChartOld
