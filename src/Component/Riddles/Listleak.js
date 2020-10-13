import { Statistic, Row, Col, Input, Button, message, Table, Radio, Divider } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { GameContext} from "../../util/GameContext"


const tipps = [
    {
      title: 'tipp1',
      content: "Welche Websiten kann man streichen und es passiert nichts? ",
    },
    {
      title: 'tipp2',
      content: 'Welche Teilmenge an Websiten betrifft jeden Hacker ?  ',
    },
  ];



const columns = [
    {
        title: "Name",
        dataIndex : "name"
    },
    {
        title: "Websiten",
        dataIndex : "websites"
    }

]

const data = [
    {
      key: '1',
      name: 'John Brown',
      websites : "H4cker.fr, Tor.com, instahack.de, codebook.net",
    },
    {
      key: '2',
      name: 'Jim Green',
      websites: "Tor.com , Stackunderflow.it , codebook.net",
    },
    {
        key: '3',
        name: 'Blue',
        websites: "Tor.com",
      },
      {
        key: '4',
        name: 'xxfarmx',
        websites: "Tikclok.at, instahack.de",
      },
      {
        key: '5',
        name: 'anonymous1337',
        websites: "H4cker.fr, Tikclok.at, codebook.net",
      },
      {
        key: '6',
        name: 'AlanTuriX',
        websites: "Tor.com , instahack.de",
      },
      {
        key: '7',
        name: 'AdaLuv',
        websites: "H4cker.fr, stackunderflow.it",
      },

]



function Listleak () {
    
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
            <h1>Listenleak</h1>
            <div>
            <p> Sie waren unvorsichtig. Wir konnten einen ihrer Server hacken und einen Teil einer Datei entschlüsseln. <br/>
            Die Datei zeigt , welche Hacker welche Website nutzt um untereinander zu kommunizieren. <br/>
            Wir müssen die Kommunikation so gut es geht einschränken , aber jede Website abzuschalten dauert zu lang und würde uns zu viele Ressourcen kosten.<br/>
            Hier ist der Auszug aus der Liste : </p>

            

            <Table
                 columns={columns}
                  dataSource={data}
              />




            <b>Wie viele Platformen müssen wir abschalten damit jeder Hacker mindestens auf eine Platform keinen Zugriff mehr hat ? </b>
            </div>
            


         <Radio.Group onChange={onChange} value={radioStatus}>
                 <Radio  value={1}>
                    1
                 </Radio>
                 <Radio value={2}>
                    2
                 </Radio>
                 <Radio  value={3}>
                    3
                </Radio>
                <Radio  value={4}>
                    4
                </Radio>
                <Radio  value={5}>
                    5
                </Radio>
                <Radio  value={6}>
                    6
                </Radio>
                <Radio  value={7}>
                    7
                </Radio>
           </Radio.Group>
            
             


              <Button  onClick={ checkanswer } danger > Check! </Button>

        </div>


    )
}


export default Listleak;