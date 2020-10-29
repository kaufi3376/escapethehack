import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Statistic, Row, Col } from 'antd';

const { Countdown } = Statistic;

export default function Costumtimer({time}) {

  function onFinish() {
    console.log('finished!');
  }
 
  const deadline = Date.now() + time; 

  return(
    <div style={{textAlign :"center"}}>
      <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
    </div>
  )
}
