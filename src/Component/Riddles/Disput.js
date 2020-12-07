import React, { useContext, useEffect, useState } from 'react';
import { GameContext} from "../../util/GameContext"
import { Switch, Col , Row, message, Button } from 'antd';


const tipps = [
    {
      title: 'tipp1',
      content: " Wer könnte nach Prinzipien der Logik der Hacker sein ?",
    },
    {
      title: 'tipp2',
      content: 'Wer könnte lügen ?  ',
    },
  ];





function Disput () {
    

    const gameCon = useContext(GameContext)
    const [s1checked, setS1checked]= useState(false)
    const [s2checked, setS2checked]= useState(false)
    const [s3checked, setS3checked]= useState(false)
    const [s4checked, setS4checked]= useState(false)
    const [s5checked, setS5checked]= useState(false)
    const [s6checked, setS6checked]= useState(false)

    
    
    

    useEffect(()=>{
        gameCon.setTipps(tipps);
        gameCon.setTippsCount();
       },[])
    


    const confirmHandler = () =>{
        if(s1checked && !s2checked && s3checked  && s4checked && !s5checked && !s6checked){
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
            <h1> Auch Hacker streiten sich. </h1>
            <p>Anscheinend gab es einen kleinen Streit unter den Angreifern. Sie haben ihren Streit online ausgetragen.
                </p> <br/>
            <p> Wir konnten einen Angriff abwehren und jetzt schieben sie sich gegenseitig den schwarzen Peter zu wer schuld gewesen ist</p>
               
             </div>
             
          

            <b>Die Frage ist wer hat der Angreifer war. Hier ein Auszug aus dem Chatverlauf:</b>
            <div style={{ textAlign : "center"}}>
            <p><b>JayJay 99:</b> "Ich habe den Hack nicht durchgeführt"</p>
            <p><b>Silverbaron:</b> "Ich bin mir sicher , dass es JayJay99 oder Eikensen war"</p>
            <p><b>Eikensen:</b> "TopLud lügt !"</p>
            <p><b>TopLud:</b> "Eikensen war es sicher."</p>
            </div>
            
            <p> Welche Aussagen sind wahr ? </p>


           <div style={{width : "10%"}}>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s1checked} onChange={() =>{ setS1checked(!s1checked);  }} /> </Col>
                <Col span={12} ><p>Eikensen hat den Hack durchgeführt</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s2checked} onChange={() =>{ setS2checked(!s2checked);  }} /> </Col>
                <Col span={12} ><p>Silverbaron hat den Hack durchgeführt und versucht nur abzulenken </p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s3checked} onChange={() =>{ setS3checked(!s3checked); }} /></Col>
                <Col span={12} ><p>TopLud hat recht</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s4checked} onChange={() =>{ setS4checked(!s4checked); }} /></Col>
                <Col span={12} ><p>JayJay99 lügt </p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s5checked} onChange={() =>{ setS5checked(!s5checked);  }} /></Col>
                <Col span={12} ><p>Eikensen lügt</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch checked={s6checked} onChange={() =>{ setS6checked(!s6checked); }} /></Col>
                <Col span={12} ><p>Silverbaron lügt</p> </Col>
            </Row>
          
         


            
            </div>
            <Button onClick={confirmHandler}> Bestätigen</Button>
            </div>
            
            
           
        


    )
}


export default Disput;