import { Button, message,  Radio } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GameContext} from "../../util/GameContext"
import riddlePic from "../../Pictures/PathGrid.JPG"


const tipps = [
    {
      title: 'tipp1',
      content: "Versuche mit dem Finger den Weg abzugehen bis du zum Pfeil kommst",
    },
    {
      title: 'tipp2',
      content: ' Wie könntest du den Weg beschreiben ? ',
    },
  ];





function GridPath () {
    
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
            <h1>Der Weg durch das Netz</h1>
        
            
                
            <img src={riddlePic}/>
            <p>Du bist der Pfeil und schaust in die Richtung der Spitze. Du willst zu dem "X" navigieren. </p> 

            <p><b>Mit welcher Sequent erreichst du als Pfeil das Kreuz ? </b></p>   

            
           
      
             
          

         <Radio.Group onChange={onChange} value={radioStatus}>
                 <Radio  value={1}>
                   Gerade, Gerade , Drehung nach rechts , Gerade, Gerade, Drehung nach rechts, Gerade.
                 </Radio><br></br>
                 <Radio value={2}>
                   Drehung nach rechts, Drei mal Gerade, Drechung nach Links, 2 mal Gerade
                 </Radio><br></br>
                 <Radio  value={3}>
                   Solange gerade bis der Pfeil an der Wand ist, Drehung nach rechts, zwei mal Gerade, Drehung nach rechts, Gerade
                </Radio><br></br>
                <Radio  value={4}>
                  Dreimal Drehung nach links, Gerade , Gerade , Zwei mal Drehung nach rechts, Gerade, Gerade
                </Radio><br></br>
                <Radio  value={5}>
                  Drehung nach Rechts, Solange gerade bis am Ziel
                </Radio><br></br>
           </Radio.Group>
            
             


              <Button  onClick={ checkanswer } danger > Check! </Button>

        </div>


    )
}


export default GridPath;