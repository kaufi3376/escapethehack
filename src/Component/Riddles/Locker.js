import { Statistic, Row, Col, Input, Button, message } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'antd';
import { GameContext} from "../../util/GameContext"


const tipps = [
    {
      title: 'tipp1',
      content: "Die Person hat im zweiten Weltkrieg geholfen , verschlüsselte Nachrichten zu dekodieren",
    },
    {
      title: 'tipp2',
      content: 'Die Person entwickelte die Turing-Maschine',
    },
  ];





function Cleanpaper () {
    const [currentinput, setCurrentInput] = useState("")
    const gameCon = useContext(GameContext)
    

    useEffect(()=>{
      gameCon.setTipps(tipps)
     },[])

    function checkanswer() {
        if(currentinput === "Alan Turing"){
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
              <p>Unsere Informanten konnten beobachten wie ein Hacker vom Café aus einen Hack startet. Seinen Pc hat er dannach in ein Schließfach im Bahnhof eingesperrt</p>
              <p><br></br>
               Wenn wir an den PC rankommen dann könnnten wir weitere Informationen über die Hacker sammeln</p>
               <br></br><p>Gratis Tipp: Das Passwort ist eine berühmt und bekannte Person aus der Informatik</p>

               Das Passwort besteht aus diesen Buchstaben . Bring sie in die richtige Reihenfolge. Es handelt sich um zwei Wörter.
               <br></br>
             <p> <b> l a A n    <br></br>     T r n g i u </b></p>

              <p>Passwort: </p>
              <Input name="answer"  onChange={onChange} style={{width :300}}></Input>
              <Button  onClick={ checkanswer } danger > Check! </Button>
                

            </div>

        </div>


    )
}


export default Cleanpaper;