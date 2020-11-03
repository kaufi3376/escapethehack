import React, { useContext, useEffect, useState } from 'react';
import { GameContext} from "../../util/GameContext"
import riddlePic from "../../Pictures/Hackerlanguage.JPG"
import { Switch, Col , Row, message, Button } from 'antd';


const tipps = [
    {
      title: 'tipp1',
      content: "Es handelt sich hier im einen DEA( endlicher Automat)",
    },
    {
      title: 'tipp2',
      content: 'Gehe die Kanten mit dem Finger ab. Landest du zum schluss auf der 3 oder 5 ? Dann ist das Wort korrekt',
    },
  ];





function Hackerlanguage () {
    const gameCon = useContext(GameContext)
    const [s1checked, setS1checked]= useState(false)
    const [s2checked, setS2checked]= useState(false)
    const [s3checked, setS3checked]= useState(false)
    const [s4checked, setS4checked]= useState(false)
    const [s5checked, setS5checked]= useState(false)
 

    
    

    useEffect(()=>{
      gameCon.setTipps(tipps)
      gameCon.setTippsCount();
     },[])

    


     const confirmHandler = () =>{
        if(s1checked && !s2checked && s3checked  && s4checked && !s5checked){
            gameCon.setEnable()
            message.success('Das ist die korrekte Antwort !');
        }
        else{
            message.error('Leider ist die Antwort falsch');
        }

       }


    return(
        <div>
            <h1>Hackersprache</h1>
            <p>
                Wir haben ein Gespräch zwischen zwei Hackern abfangen können die sich über den nächsten Angriff unterhalten haben.
                Dabei wurden zwei Dateien versendet die wir ebenfalls abgefangen haben.<br/>
                Die erste Datei enthält eine Auswahl an Ämtern. Vermutlich wollen Sie die Server dieser Ämter hacken, aber um alle zu hacken ist nicht genug Zeit! <br/>
                Die zweite Datei beinhaltet einen Graphen. Mit ihm können wir herausfinden auf welche Ämter sie es wirklich abgesehen haben und welche nur zur Verwirrung aufgelistet sind! 
           </p>

           <h3>Die erste Datei</h3>
           <li>Pentagon</li>
           <li>Finanzamt</li>
           <li>WeissesHaus</li>
           <li>USArmy</li>
           <li>WallStreet</li>

           <p> Wie finden wir heraus welche welche Ämter die nächsten Ziele sind und welche nur Verwirrung ?<br/> 
               Wir geben die Namen der Ämter in den Graphen ein. Mit jedem Buchstaben springen wir entlang der Linie zu einem neuen Feld. <br/> 
               <b>Beginnen werden wir auf dem Feld mit dem großen roten Pfeil</b>. Ist kein Buchstabe vom Wort mehr übrig müssen wir auf einem Feld stehen, dass eingekreist ist. <br/>
               Dann gehört es zu den Zielen der Hacker. Landen wir zum Schluss auf einem Feld , das nicht eingekreist ist , so steht das nur auf der Liste um uns zu verwirren
               Beachte die groß und Kleinschreibung ! Du darfst nur in die Richtung gehen in die die Pfeile zeigen und nicht anderstrum! </p>
            
            
            <img src={riddlePic} style={{width:"60%", height :"auto"}}></img>

            <h3> Was sind die nächsten Ziele der Hacker ?</h3>
            <div style={{width : "10%"}}>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s1checked} onChange={() =>{ setS1checked(!s1checked);  }} /> </Col>
                <Col span={12} ><p>Pentagon</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s2checked} onChange={() =>{ setS2checked(!s2checked);  }} /> </Col>
                <Col span={12} ><p>Finanzamt</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s3checked} onChange={() =>{ setS3checked(!s3checked); }} /></Col>
                <Col span={12} ><p>WeissesHaus</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s4checked} onChange={() =>{ setS4checked(!s4checked); }} /></Col>
                <Col span={12} ><p>USArmy</p> </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={12} ><Switch  checked={s5checked} onChange={() =>{ setS5checked(!s5checked);  }} /></Col>
                <Col span={12} ><p>WallStreet</p> </Col>
            </Row>
            
         


            
            </div>
            <Button onClick={confirmHandler}> Bestätigen</Button>
            </div>
            
           


    )
}


export default Hackerlanguage;