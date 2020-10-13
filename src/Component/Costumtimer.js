import { Statistic, Row, Col } from 'antd';
import React, { useState } from 'react';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
    console.log('finished!');
  }


function Costumtimer () {
    return( 
    <Row justify="center">
      
        <Col >
          <Countdown title="Timer" value={deadline} format="HH:mm:ss:SSS" onFinish={onFinish}/>
        </Col>
      </Row>

    )
}


export default Costumtimer;