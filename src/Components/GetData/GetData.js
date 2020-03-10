import React, { Component } from "react";

import { Line, Pie, Doughnut, Bar } from "react-chartjs-2";
import { Col, Row, Button, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import RenderChart from "../DisplayData/RenderChart";
import RowData from "../GetData/RowData";
import "./GetData.css";
class GetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      energyData: [
        {
          key: Math.random(),
          device_type: "",
          energy_units: 0
        }
      ],
      chartType: "Pie",
      chartData: {},
      shouldShowChart: false
    };
    this.onChangeDeviceType = this.onChangeDeviceType.bind(this);
    this.setChartType = this.setChartType.bind(this);
    this.addNewData = this.addNewData.bind(this);
    this.onChangeEnergyUnit = this.onChangeEnergyUnit.bind(this);
    this.generateChart = this.generateChart.bind(this);
    this.deleteDataRow = this.deleteDataRow.bind(this);
  }
  setChartType(chartType) {
    this.setState({
      chartType: chartType
    });
  }
  addNewData() {
    let { energyData } = this.state;
    const newEnergyDataRow = {
      key: Math.random(),
      device_type: "",
      energy_units: 0
    };
    energyData.push(newEnergyDataRow);
    this.setState({
      energyData: energyData
    });
  }
  onChangeDeviceType(key, value) {
    const { energyData } = this.state;
    const newEnergyData = energyData.map(data => {
      if (data.key === key) {
        return {
          ...data,
          device_type: value
        };
      } else {
        return data;
      }
    });
    this.setState({
      energyData: newEnergyData
    });
  }
  onChangeEnergyUnit(key, value) {
    const { energyData } = this.state;
    const newEnergyData = energyData.map(data => {
      if (data.key === key) {
        return {
          ...data,
          energy_units: value
        };
      } else {
        return data;
      }
    });
    this.setState({
      energyData: newEnergyData
    });
  }
  generateChart() {
    const { energyData } = this.state;
    const labels = energyData.map(ed => {
      return ed.device_type;
    });
    const data = energyData.map(ed => {
      return ed.energy_units;
    });

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: "Energy Units Used",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          hoverBackgroundColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          weight: '10',
          borderWidth: 4,
          animateanimateScale: true,
          responsive:true,
          defaultFontColor:'rgba(255,99,132,1)',
          defaultFontSize: '15',
          data: data
        }
      ]
    };
    this.setState({
      shouldShowChart: true,
      chartData: chartData
    });
  }
  deleteDataRow(key) {
    const { energyData } = this.state;
    if (energyData.length === 1){
      console.log("cannot delete the only row in the data");
    }
    const newEnergyData = energyData.filter(data => {
      if (data.key !== key) {
        return data;
      }
    });
    this.setState({
      energyData: newEnergyData
    });
  }
  render() {
    const { energyData, shouldShowChart, chartData, chartType } = this.state;
    const {
      onChangeEnergyUnit,
      onChangeDeviceType,
      addNewData,
      setChartType,
      generateChart,
      deleteDataRow
    } = this;
    const templateData = ["Pie", "Line", "Doughnut", "Bar"];
    return (
      <div className="styleGetData">
        <Container>
          <Row className="styleRow">
            <Col sm={6} className="styleCol">
              <div className="styleData">
              <Row className="styleRow">
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Select a Chart Template
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {templateData.map((template, index) => {
                      return (
                        <Dropdown.Item
                          key={index}
                          active={template === chartType ? true : false}
                          onClick={() => setChartType(template)}>
                          {template}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </Row>
              <Row className="styleRow">
                <Col>
                <h4>Enter Data</h4>
                </Col>
                <Col>
                </Col>
                <Col>
                    <Button variant="primary" onClick={addNewData}>
                      Add Row
                    </Button>
                  </Col>
              </Row>
              <Row className="styleRow">
                <Col className="styleCol">
                  <Form.Label className="styleLabel">Device Type</Form.Label>
                </Col>
                <Col className="styleCol">
                  <Form.Label className="styleLabel">Energy Units Used</Form.Label>
                </Col>
                <Col className="styleCol">
                  <Form.Label className="styleLabel">Actions</Form.Label>
                </Col>
              </Row>
              <Row className="styleRow">
                {energyData.map((ev, index) => {
                  return (
                    <div key={index}> 
                      <RowData
                        row_key={ev.key}
                        device_type={ev.device_type}
                        energy_units={ev.energy_units}
                        onChangeEnergyUnit={onChangeEnergyUnit}
                        onChangeDeviceType={onChangeDeviceType}
                        deleteDataRow={deleteDataRow}
                      />
                    </div>
                  );
                })}
              </Row>
              <Row className="styleRow">
                  <Button variant="primary" onClick={generateChart}>
                    Generate Chart
                  </Button>
              </Row>
              </div>
            </Col>
            <Col sm={6} className="styleDisplay">
              <h1> Display Graphs </h1>
              <div className="displayDiv">
                <RenderChart chartType={chartType} chartData={chartData} shouldShowChart={shouldShowChart} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default GetData;
