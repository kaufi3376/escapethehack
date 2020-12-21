import { Statistic, Row, Col, Input, Button, message, Table, Radio, Divider } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GameContext} from "../../util/GameContext"
import riddlePic from "../../Pictures/Names.JPG"


const tipps = [
    {
      title: 'tipp1',
      content: " Teile den Namen in die Buchstaben auf ",
    },
    {
      title: 'tipp2',
      content: ' Gehe die Tabelle ab für jeden einzelnen Buchstaben',
    },
  ];





function HackerNames () {
    
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
            <h1> Namen</h1>
            <p>Yurine aus Japan gibt ihren Hackern welche für sie arbeiten Ehrennamen, nach einer alten Tradition.
               Ein Ehrenname wird aus dem richtigen Vornamen gemacht, indem jeder Buchstabe
              des Vornamens durch eine Silbe ersetzt wird, und zwar so

            </p>

            <div style={{ textAlign : "center"}}>
            <img src={riddlePic}/>
            </div>

            <p>Einem Hacker aus Kroatien gibt Yurine diesen Ehrennamen:
               <b>Zukame Moru</b></p>


         <Radio.Group onChange={onChange} value={radioStatus}>
                 <Radio  value={1}>
                   Josip
                 </Radio>
                 <Radio value={2}>
                   Jani
                 </Radio>
                 <Radio  value={3}>
                   Jakov
                </Radio>
                <Radio  value={4}>
                Jurica
                </Radio>
           </Radio.Group>
            
             


              <Button  onClick={ checkanswer } danger > Check! </Button>

        </div>


    )
}


export default HackerNames;