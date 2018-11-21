import React, { Component } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import '@progress/kendo-theme-default/dist/all.css';
import './GridTableStyle.css'


class GridTable extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    }

    //grid function
    this.cellRender=this.cellRender.bind(this)
    this.createAppState=this.createAppState.bind(this)
    this.dataStateChange=this.dataStateChange.bind(this)

  }

  //grid function
  createAppState(dataState) {
      const groups = dataState.group;
      if (groups) { groups.map(group => group.aggregates = this.state.aggregates); }

      var tempState = this.state;
      tempState.result=process(this.props.dataGrid, dataState);
      tempState.dataState=dataState;
      this.setState(tempState);
  }

  dataStateChange = (event) => {
      this.setState(this.createAppState(event.data));
  }

  cellRender(tdElement, cellProps) {

      if (cellProps.field === 'total_charges') {
        return (
            <td className="TotalColumn_Charges">
              {cellProps.dataItem.total_charges}
            </td>
        );
      }

      if (cellProps.field === 'total_recette') {
        return (
            <td className="TotalColumn_Recette">
              {cellProps.dataItem.total_recette}
            </td>
        );
      }

      if (cellProps.field === 'net') {
        return (
            <td className="TotalColumn_Net">
              {cellProps.dataItem.net}
            </td>
        );
      }




      return tdElement;
  }

  componentDidMount(){
    this.createAppState({
          skip: 0,
          take: 5,
    });
  }

  render() {
    return (
        <div className="GridTableStyle">
        <Grid
            filterable={true}
            sortable={true}
            scrollable="scrollable"
            pageable={{ pageSizes: false ,info:false}}

            data={this.state.result}


            {...this.state.dataState}
            onDataStateChange={this.dataStateChange}
            cellRender={this.cellRender}

            resizable={true}
        >
            {this.props.children}
        </Grid>
        </div>
      )
    }
}


export default GridTable
