import { Button, message,  Radio } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GameContext} from "../../util/GameContext"
import riddlePic from "../../Pictures/MultipleAttacken.JPG"


const tipps = [
    {
      title: 'tipp1',
      content: " Die erste Attacke legt PC1 lahm, die zweite legt PC2 lahm und so weiter. ",
    },
    {
      title: 'tipp2',
      content: ' Es sieht fast so aus als ob die Attacken die Datenstruktur : "Stack" haben  ',
    },
  ];





function Multipleattacks () {
    
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
            <h1>Multiple Angriffe</h1>
            <p>Wir wurden angegriffen. Es waren mehrere Cyberangriffe hintereinander.<br/>
            Die DDos Attacke kam als erstes und hat PC1 lahmgelegt. Der nächste Pc der an PC1 angeschlossen ist , ist von der zweiten Attacke betroffen <br/>
            Wir haben alle Angriffe nach diesem Schema aufgezeichnet. <br/>
            Auch ein Kreditkartenangriff wurde aufgezeichnet <br/>
            <b>Welcher PC war von dem Kreditkartenangriff betroffen ?</b> </p>
            <div style={{ textAlign : "center"}}>
           
            </div>
             <div>

            <img src={riddlePic}/>
            </div>


         <Radio.Group onChange={onChange} value={radioStatus}>
                 <Radio  value={1}>
                    PC1
                 </Radio>
                 <Radio value={2}>
                    PC2
                 </Radio>
                 <Radio  value={3}>
                    PC3
                </Radio>
                <Radio  value={4}>
                    PC4
                </Radio>
                <Radio  value={5}>
                    PC5
                </Radio>
           </Radio.Group>
            
             


              <Button  onClick={ checkanswer } danger > Check! </Button>

        </div>


    )
}


export default Multipleattacks;