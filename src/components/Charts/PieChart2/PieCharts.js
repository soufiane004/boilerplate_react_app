import React, { Component } from 'react';
import { PieChart, Pie, Sector,ResponsiveContainer,Tooltip,Legend,Cell } from 'recharts';
import './PieChartStyle.css'


const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>

      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#788195"
      >{payload.name}{' '}{`${value} Dhs`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


class PieCharts extends Component {
  constructor(props) {
    super(props);
    this.onPieEnter = this.onPieEnter.bind(this);
    this.state = { activeIndex: [0,1,2,3,4,5,6]};
  }
  onPieEnter(data, index) {
     this.setState({
       activeIndex: index,
     });
  }
  render() {
    const { datas, width, height,colors } = this.props;
    // <div className="isoChartWrapper">
    return (
        <div className="PieChartStyle">
              <PieChart width={width} height={height}>
                  <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    dataKey="value"
                    data={datas}
                    cx={300}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill={colors[0]}
                    paddingAngle={2}
                  >
                  {
                  	datas.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
                  }
                  </Pie>
                

              </PieChart>
        </div>
    );
  }
}

export default PieCharts
