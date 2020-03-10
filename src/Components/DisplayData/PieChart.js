import React, { Component } from 'react';

import { Line, Pie, Doughnut, Bar } from 'react-chartjs-2';
import { Col, Row, Button,  Container } from "react-bootstrap";
const data2 = {
    labels: ['AC', 'Refrigerator', 'Washing Machine'],
    datasets: [
      {
        label: 'Energy Units Used',
 
        
        data: ['24', '28', '34']
      }
    ]
  };
class PieChart extends Component {
    
    render (props){
        var deviceType=this.props.deviceType;
        var energyUnits=this.props.energyUnits;
      return (
        <div className="Pie">
          <h1>Blah </h1>
      <h1> {this.props.deviceType} </h1>
      <h1> {this.props.energyUnits}</h1>

          
        </div>
      );
    }
    
  }
  export default PieChart;
  