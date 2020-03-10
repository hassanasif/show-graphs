import React, { Component } from "react";

import { Col, Row, Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class RowData extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      const {
        row_key,
        device_type,
        energy_units,
        onChangeEnergyUnit,
        onChangeDeviceType,
        deleteDataRow
      } = this.props;
      return (
        <Row>
          <Col>
            <Form.Control
              type="text"
              name="deviceType"
              onChange={evt => onChangeDeviceType(row_key, evt.target.value)}
              value={device_type}
              placeholder="Enter Device Type such as AC, Refrigerator .."
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              name="energyUnits"
              value={energy_units}
              onChange={evt => onChangeEnergyUnit(row_key, evt.target.value)}
              placeholder="Enter units used such as 20 .. "
            />
          </Col>
          <Col>
            <Button variant="primary" onClick={()=>deleteDataRow(row_key)}>
              Delete
            </Button>
          </Col>
        </Row>
      );
    }
  }
  export default RowData;

  