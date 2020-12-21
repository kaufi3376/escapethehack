import { Button, message,  Radio } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GameContext} from "../../util/GameContext"
import riddlePic from "../../Pictures/Alarm.JPG"

const tipps = [
    {
      title: 'tipp1',
      content: "Versuch nachzuvollziehen wann wie viele im Raum waren",
    },
    {
      title: 'tipp2',
      content: 'Gehe jede Einzelne Minute durch',
    },
  ];





function Alarm () {
    
    const gameCon = useContext(GameContext)
    const [radioStatus, setRadioStatus] = useState(1)

    

    useEffect(()=>{
      gameCon.setTipps(tipps)
     },[])


    function checkanswer() {
       console.log("TODO: Zeitstrafe bei falschantwort")
       if(radioStatus === 5){
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
            <h1>Alarm!</h1>
            Im Hauptquatier gibt es ein intelligentes Sicherheitssystem.<b></b>
Das System ermittelt jede Minute, wie viele Personen in jedem Raum sind, und trägt
die Zahlen in eine Tabelle ein.<b></b> Außerdem prüft es anhand der Zahlen, ob ein Eindringling
im Hauptquartier ist. Ein Eindringling ist eine Person, die in das Hauptquartier gelangt ist, aber nicht
die Eingangstür benutzt hat.<b></b>
Sobald das System meint, dass ein Eindringling im Hauptquartier ist, schlägt es Alarm.<b></b>
Links siehst du die Tabelle des Systems für die Minuten 10:01 bis 10:07.<b></b>
Rechts siehst du den Raumplan des Hauptquartiers mit den Nummern der Räume.<b></b>
Das Hauptquartier ist groß: Von einer Minute zur nächsten kann man es höchstens
durch eine Tür schaffen. 
<br></br>

       <img src={riddlePic}/>

       <p><b>In einer der Minuten in der Tabelle schlägt das System Alarm. In welcher?</b></p>


         <Radio.Group onChange={onChange} value={radioStatus}>
                 <Radio  value={1}>
                   10:01
                 </Radio>
                 <Radio value={2}>
                 10:02
                 </Radio>
                 <Radio  value={3}>
                 10:03
                </Radio>
                <Radio  value={4}>
                10:04
                </Radio>
                <Radio  value={5}>
                10:05
                </Radio>
                <Radio  value={6}>
                10:06
                </Radio>
                <Radio  value={7}>
                10:07
                </Radio>
           </Radio.Group>
            
             


              <Button  onClick={ checkanswer } danger > Check! </Button>

        </div>


    )
}


export default Alarm;