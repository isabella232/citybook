import React, { Component } from 'react';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';
import '../../../styles/instructions.scss';

export default class Step1 extends Component {
  render(){
    return(
      <Row>
        <Col md={12}>
          <p>Build a new Google Spreadsheet using the CityBook template. You'll need to copy the template to your own Google Drive account by clicking the "Use this template" button.</p>
          <Button className="btn-blue" bsSize="large" href="https://drive.google.com/previewtemplate?id=18YIZlfxxlffHVytbR8zY1cvmKShGOK3z_Cf9JYow4pg&mode=public" target='_blank'>Get the Template <Glyphicon glyph='new-window' /></Button>
        </Col>
      </Row>
    )
  }
}
