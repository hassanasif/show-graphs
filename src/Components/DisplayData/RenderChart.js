import React, { Component } from 'react';

import { Line, Pie, Doughnut, Bar } from 'react-chartjs-2';
import { Col, Row, Button,  Container } from "react-bootstrap";

class RenderChart extends Component {
  constructor(props) {
    super(props);
  }
  render(){
      const { chartType, chartData, shouldShowChart } = this.props;
      if (shouldShowChart === false){
        return null;
      }
      if (chartType === "Pie") {
        return (<Pie ref="chart" data={chartData} />);
      } else if (chartType === "Line") {
        return (<Line ref="chart" data={chartData} />);
      } else if (chartType === "Doughnut") {
        return (<Doughnut ref="chart" data={chartData} />);
      } else if (chartType === "Bar") {
        return (<Bar ref="chart" data={chartData } />);
      } else {
        return (<div> No Chart Selected </div>);
      }
    }
}
  export default RenderChart;
  