import React, { useContext, useEffect, useState } from 'react';
import { GameContext} from "../../util/GameContext"
import riddlePic from "../../Pictures/unregularhouses.JPG"
import { Switch, Col , Row, message, Button } from 'antd';


const tipps = [
    {
      title: 'tipp1',
      content: "Die Hacker leben in den Häusern die nicht steigen wie die anderen",
    },
    {
      title: 'tipp2',
      content: 'Es sieht fast so aus als ob die Gebäude REGELMÄßIG steigen ',
    },
  ];





function Unregularhouses () {
    

    const gameCon = useContext(GameContext)
    const [s1checked, setS1checked]= useState(false)
    const [s2checked, setS2checked]= useState(false)
    const [s3checked, setS3checked]= useState(false)
    const [s4checked, setS4checked]= useState(false)
    const [s5checked, setS5checked]= useState(false)
    const [s6checked, setS6checked]= useState(false)
    const [s7checked, setS7checked]= useState(false)
    const [s8checked, setS8checked]= useState(false)
    const [s9checked, setS9checked]= useState(false)

    
    
    

    useEffect(()=>{
        gameCon.setTipps(tipps);
        gameCon.setTippsCount();
       },[])
    


    const confirmHandler = () =>{
        if(!s1checked && s2checked && !s3checked  && !s4checked && !s5checked && s6checked && !s7checked && s8checked){
            gameCon.setEnable()
            message.success('Das ist die korrekte Antwort !');
        }
        else{
            message.error('Leider ist die Antwort falsch');
        }

       }


    return(
        <div>
        <div style={{ textAlign : "center"}}>
            <h1> Wo wohnen die Hacker? </h1>
            <p>Unser Informat hat sich gemeldet. "Hacker leben nicht nach der Regel" schriebt er und sendet uns ein Foto mit einer Skyline aus Gebäuden.</p>
             <div style={{ justifyContent : "center", alignItems : "center"}}>  
               <img src={riddlePic}/>
               
             </div>
             
          

            <b>In welchem Haus könnten Hacker wohnen ?</b>
            


           <div style={{width : "10%"}}>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s1checked} onChange={() =>{ setS1checked(!s1checked);  }} /> </Col>
                <Col span={12} ><p>Haus1</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s2checked} onChange={() =>{ setS2checked(!s2checked);  }} /> </Col>
                <Col span={12} ><p>Haus2</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s3checked} onChange={() =>{ setS3checked(!s3checked); }} /></Col>
                <Col span={12} ><p>Haus3</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s4checked} onChange={() =>{ setS4checked(!s4checked); }} /></Col>
                <Col span={12} ><p>Haus4</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s5checked} onChange={() =>{ setS5checked(!s5checked);  }} /></Col>
                <Col span={12} ><p>Haus5</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch checked={s6checked} onChange={() =>{ setS6checked(!s6checked); }} /></Col>
                <Col span={12} ><p>Haus6</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch checked={s7checked} onChange={() =>{ setS7checked(!s7checked);}} /> </Col>
                <Col span={12} ><p>Haus7</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s8checked} onChange={() =>{ setS8checked(!s8checked); }} /></Col>
                <Col span={12} ><p>Haus8</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch checked={s9checked} onChange={() =>{ setS9checked(!s9checked); }} /> </Col>
                <Col span={12} ><p>Haus9</p> </Col>
            </Row>
         


            
            </div>
            <Button onClick={confirmHandler}> Bestätigen</Button>
            </div>
            
            
            </div>
        


    )
}


export default Unregularhouses;