import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './AreaChartStyle.css'


class AreaCharts extends React.Component {
  render() {
    const { datas, width, height, colors } = this.props;
    return (
      <div className="AreaChartStyle">
        <ResponsiveContainer  width="100%" height={height}>
          <AreaChart
            data={datas}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" stroke={colors[3]} />
            <YAxis stroke={colors[3]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Charges"
              stackId="1"
              stroke={colors[0]}
              fill={colors[0]}
            />
            <Area
              type="monotone"
              dataKey="Net"
              stackId="1"
              stroke={colors[1]}
              fill={colors[1]}
            />
            <Area
              type="monotone"
              dataKey="Revenus"
              stackId="1"
              stroke={colors[2]}
              fill={colors[2]}
            />
          <Legend/>
          </AreaChart>
      </ResponsiveContainer>
      </div>

    );
  }
}

export default AreaCharts
