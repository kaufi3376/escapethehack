import { Button, message,  Radio } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GameContext} from "../../util/GameContext"
import riddlePic from "../../Pictures/Socialhackernetwork.JPG"


const tipps = [
    {
      title: 'tipp1',
      content: " ",
    },
    {
      title: 'tipp2',
      content: '   ',
    },
  ];





function Socialhackernetwork () {
    
    const gameCon = useContext(GameContext)
    const [radioStatus, setRadioStatus] = useState(1)

    

    useEffect(()=>{
      gameCon.setTipps(tipps)
     },[])


    function checkanswer() {
       console.log("TODO: Zeitstrafe bei falschantwort")
       if(radioStatus === 3){
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
            <h1>Soziales Hacker Netzwerk</h1>
            <p>
                Unsere Profiler konnten einen Teil des Hackernetzwerk analysieren und herausfinden wer für wen gearbeitet hat. <br/>
                Die Profiler nennen einen Hacker, die nur Leute für sich arbeiten lassen , aber selbst für niemanden anderen arbeiten , "Blackhats"<br/><br/>

                <b>Ein Beispiel: </b> <br/>
                <li>Marc arbeitet für Paul und Celine</li>
                <li>Celine arbeitet für Paul und lässt Marc für sie arbeiten.</li><br/>

                Also arbeitet Paul für niemanden aber lässt Marc und Celine für sich arbeiten. <br/>
                <b>Paul ist somit also ein Blackhat</b>

            </p><img src={riddlePic}/>
            

            <div style={{ textAlign : "center"}}>
           
            </div>
             <div>

                 <p>Unsere Profiler konnten also folgendes über das Hackernetzwerk herausfinden:<br/>
                 <li> JayJay99 arbeitet für Donttack und Silverbaron</li>
                 <li> Donttack arbeitet für Ricciardo und Silverbaron</li>
                 <li> FranFreshco arbeitet für JayJay99, Silverbaron und Ricciardo</li>
                 <li> Ricciardo arbeitet für JayJay99 und Silverbaron </li>
                 </p><br/>

            
            </div>
            <div>
                <b> Wer aus diesem Teil des Netzwerks ist ein Blackhat ? </b>
            </div>


         <Radio.Group onChange={onChange} value={radioStatus}>
                 <Radio  value={1}>
                   JayJay99
                 </Radio>
                 <Radio value={2}>
                 Donttack
                 </Radio>
                 <Radio  value={3}>
                 Silverbaron
                </Radio>
                <Radio  value={4}>
                FranFreshco
                </Radio>
                <Radio  value={5}>
                Ricciardo
                </Radio>
           </Radio.Group>
            
             


              <Button  onClick={ checkanswer } danger > Check! </Button>

        </div>


    )
}


export default Socialhackernetwork;