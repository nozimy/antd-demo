import React, { Component } from 'react';
import './App.css';

import { Row, Col } from 'antd';
import LvHeader from './components/LvHeader';
import LvAsideMenu from './components/LvAsideMenu';




class App extends Component {
  
  render() {
     
    return (
       <div>
        <LvHeader />
        <Row>
          <Col span={4} offset={3}>
          <LvAsideMenu />
           </Col>
        </Row>
      </div>
    );
  }
}


export default App;
