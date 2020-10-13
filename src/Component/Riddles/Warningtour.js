import { Statistic, Row, Col, Input, Button, message, Table, Radio, Divider } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GameContext} from "../../util/GameContext"
import riddlePic from "../../Pictures/Warningtour.JPG"


const tipps = [
    {
      title: 'tipp1',
      content: " Welche Möglichekeiten gibt es  die Route zu absolvieren ? ",
    },
    {
      title: 'tipp2',
      content: ' Es lohnt sich bestimmt auch einmal den längeren Weg in kauf zu nehmen. ',
    },
  ];





function Warningtour () {
    
    const gameCon = useContext(GameContext)
    const [radioStatus, setRadioStatus] = useState(1)

    

    useEffect(()=>{
      gameCon.setTipps(tipps)
     },[])

    function checkanswer() {
       console.log("TODO: Zeitstrafe bei falschantwort")
       if(radioStatus === 4){
        gameCon.setEnable()
        message.success('Das ist die korrekte Antwort !');
       }
       else{
        message.error('Leider ist die Antwort falsch');

       }

    

    }
    
    const onChange = (e) =>{
        setRadioStatus(e.target.value)
     }

   


    return(
        <div>
            <h1> Warnungstour</h1>
            <p>Die Hacker wollen in ein paar Stunden eine komplette Stadt lahmlegen. Sie wollten den Strom und Internet anzapfen und abschalten. <br/>
               Es werden also alle Smartphones, Computer und ähnliches davon betroffen sein. Wir müssen die Bürger der Stadt warnen bevor die Hacker persönliche Daten der Bürger klauen. <br/>
               Telefonisch oder über das Internet können wir die Bewohner nicht kontaktieren. Die Hacker hören die Leitungen ab und überprüpfen den Internettraffic. <br/>
               Es muss schnell gehen . Wir müssen zu jedem einzelnen Bürger fahren und es ihm mitteilen. 
               Hier ist ein Plan der Stadt und die Strecke die zwischen den Häusern liegt. <br/>

               Wir starten bei Punkt A. <br/>
               Jedes Haus fahren wir nur genau einmal an. <br/>
               Die Tour ist zu Ende wenn wir das letzte Haus erreicht haben<br/>
               <b>Aber wie lang ist die kürzeste Strecke ?</b>

            </p>

            <div style={{ textAlign : "center"}}>
            <img src={riddlePic}/>
            </div>


         <Radio.Group onChange={onChange} value={radioStatus}>
                 <Radio  value={1}>
                    15 km
                 </Radio>
                 <Radio value={2}>
                    17km
                 </Radio>
                 <Radio  value={3}>
                    20km
                </Radio>
                <Radio  value={4}>
                    22km
                </Radio>
                <Radio  value={5}>
                    26km
                </Radio>
                <Radio  value={6}>
                    30km
                </Radio>
                <Radio  value={7}>
                    32km
                </Radio>
           </Radio.Group>
            
             


              <Button  onClick={ checkanswer } danger > Check! </Button>

        </div>


    )
}


export default Warningtour;