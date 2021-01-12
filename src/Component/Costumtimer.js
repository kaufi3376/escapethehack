import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Statistic, Modal } from 'antd';
import { useHistory } from "react-router-dom";

const { Countdown } = Statistic;

export default function Costumtimer({time}) {

  const [showModal,setShowModal] = useState(false)
  let history= useHistory()

  function onFinish() {
    setShowModal(true)
  }
  function goBack() {
    history.push("/")
    
  }
 
  const deadline = Date.now() + time; 

  return(
    <div style={{textAlign :"center"}}>
      <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
      <Modal
          title="Zeit überschritten!"
          visible={showModal}
          okText="OK"
          onOk={goBack}
          onCancel={goBack}
          
          cancelText="Zurück"
        >
          <p>Leider hast du es nicht geschafft... Die Zeit ist dir leider davongelaufen....</p>
        </Modal>
    </div>
  )
}
