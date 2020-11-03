import { Statistic, Row, Col, Input, Button, message } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'antd';
import { GameContext} from "../../util/GameContext"


const tipps = [
    {
      title: 'tipp1',
      content: "",
    },
    {
      title: 'tipp2',
      content: ' ',
    },
  ];





function Cleanpaper () {
    const [currentinput, setCurrentInput] = useState("")
    const gameCon = useContext(GameContext)
    

    useEffect(()=>{
      gameCon.setTipps(tipps)
     },[])

    function checkanswer() {
        if(currentinput === "Ada Lovelace"){
            gameCon.setEnable()
            message.success('Das ist die korrekte Antwort !');


        }else{
            message.error('Leider ist die Antwort falsch');
        }
    

    }


    const onChange = (e) =>{
        e.persist()
        setCurrentInput(e.target.value)
       }


    return(
        <div>
            <h1> leeres Papier</h1>
            <div style={{ borderColor: "#5c0011"}}>
               <p style={{color :"white"}}>Hack gegen die Amerikanische Regierung wurde begonnen...Startcode: start <br/> Passwort zum Abbruch: Ada Lovelace </p>
              <p>Passwort: </p>
              <Input name="answer"  onChange={onChange} style={{width :300}}></Input>
              <Button  onClick={ checkanswer } danger > Check! </Button>
                

            </div>

        </div>


    )
}


export default Cleanpaper;