import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './LineChartStyle.css'


class LineCharts extends Component {
  render() {
    const { datas, width, height, colors } = this.props;
    return (
        <div className="LineChartStyle">
          <ResponsiveContainer  width={width} height={height}>
            <LineChart
              data={datas}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" stroke={colors[3]} />
              <YAxis stroke={colors[3]} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Charges"
                stroke={colors[0]}
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="Revenus" stroke={colors[1]} />
            </LineChart>
          </ResponsiveContainer>
        </div>
    );
  }
}

export default LineCharts
