import { Statistic, Row, Col, Input, Button, message } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'antd';
import { GameContext} from "../../util/GameContext"


const tipps = [
    {
      title: 'tipp1',
      content: "Wenn man ASCII Code googelt, dann findet man schnell einen Übersetzter",
    },
    {
      title: 'tipp2',
      content: ' Es gibt viele Arten der Verschlüsselung. Der ASCII Code ist eine davon ',
    },
  ];





function Numberencryption () {
    const [currentinput, setCurrentInput] = useState("")
    const gameCon = useContext(GameContext)
    

    useEffect(()=>{
      gameCon.setTipps(tipps)
     },[])

    function checkanswer() {
        if(currentinput === "112 97 115 115 119 111 114 116"){
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
            <h1> Geheimer Zahlentext</h1>
            <p>Uns hat ein komischer Text erreicht... Er besteht leider nur aus Zahlen... Wenn wir wüssten was in dem Text steht dann könnten wir das Passwort für die Lösung des Rätsels herausfinden !</p>
            <div style={{ borderColor: "#5c0011"}}>
               <Card title="71 101 104 101 105 109 99 111 100 101"  style={{ width: "300" }}>
                   <p>79 107 101 121 46 46 46 32 87 101 110 110 32 100 117 32 100 97 115 32 108 105 101 115 116 32 100 97 110 110 32 104 97 115 116 32 100 117 32 100 101 110 32 84 101 120 116 32 101 110 116 115 99 104 108 117 101 115 115 101 108 116 46 32 68 101 114 32 65 83 67 73 73 32 67 111 100 101 32 119 117 114 100 101 32 97 109 32 49 57 54 51 32 118 111 110 32 100 101 114 32 65 109 101 114 105 99 97 110 32 83 116 97 110 100 97 114 100 115 32 65 115 115 111 99 105 97 116 105 111 110 32 97 108 115 32 83 116 97 110 100 97 114 100 32 103 101 98 105 108 108 105 103 116 46 32 66 105 115 32 104 101 117 116 101 32 119 105 114 100 32 101 114 32 98 101 110 117 116 122 116 46 32 68 97 115 32 80 97 115 115 119 111 114 116 32 102 117 101 114 32 100 105 101 115 101 110 32 82 97 117 109 32 105 115 116 32 58 32 49 49 50 32 57 55 32 49 49 53 32 49 49 53 32 49 49 57 32 49 49 49 32 49 49 52 32 49 49 54</p>
                   
              </Card>
              <p>Passwort: </p>
              <Input name="answer"  onChange={onChange} style={{width :300}}></Input>
              <Button  onClick={ checkanswer } danger > Check! </Button>
                

            </div>

        </div>


    )
}


export default Numberencryption;