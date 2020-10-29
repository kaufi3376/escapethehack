import { Button, Input, Select, message, Card , Collapse, Slider } from "antd";
import React, { useContext, useEffect, useState } from "react"
import RiddleCheckbox from "../Component/layout/RiddleCheckbox"


import {API, Auth, graphqlOperation} from "aws-amplify"
import * as mutations from "../graphql/mutations"
import * as customQueries from "../graphql/customqueries"
import * as customMutation from "../graphql/custommutations"

import {AuthContext} from "../util/AuthContext"
import {RiddleContext} from "../util/RiddleContext"
import { wait } from "@testing-library/react";
import { useHistory } from "react-router-dom";


/**
 * 
 * functional component that returns the whole escaperoomgeneratong process
 * 
 */



const EscapeRoomGenerator = () => { 

    const [escRoNam, setescRoNam] = useState('');
    const [escapeRoomId, setEscapeRoomID]= useState("");

    const [duration, setDuration] = useState('');
    const [maxMinRiddleNum, setMaxMinRiddleNum]= useState(0);

    const authCon= useContext(AuthContext);
    const riddleCon = useContext(RiddleContext);

    const { Option } = Select;
    const { Panel } = Collapse;

    const [nameTrigger, setNameTrigger] = useState(true);
    const [durationTrigger, setDurationTrigger] = useState(false);
    const [chooseHelpTrigger, setChooseHelpTrigger] = useState(false);

    const [randomRoomGenerator, setRandomRoomGenerator] = useState(false);
    const [categoryGenerator, setCategoryGenerator] = useState(false);
    const [riddleGenerator, setRiddleGenerator] = useState(false);

    const [viewSumup, setviewSumup] = useState(false);


    const[algoNum, setAlgoNum]= useState(0);
    const[kodNum, setKodNum]= useState(0);
    const[theoNum, setTheoNum]= useState(0);
    const[graphNum, setGraphNum]= useState(0);
    const[progNum, setProgNum]= useState(0);
    const[modNum, setModNum]= useState(0);

    let history = useHistory()
    const nameRegEx= /^[^%]{4,}$/;

    
    


    /**
     * function that stores if something is written in the input field
     * 
     * @param {
     * } e 
     */

    const onChange= (e) => {
        e.persist()
          setescRoNam(e.target.value)
        
    
    }

    /**
     * 
     * function that is executed after configuring the escaperoom. It submits all information to the backend
     * 
     */


    async function submitHandler() {

        //EscapeRoom erstellen in AWS
        const escapeRoom ={ input :{ name : escRoNam , author : authCon.username, duration : duration}}
        const mutationreturn = await API.graphql(graphqlOperation(mutations.createEscapeRoom, escapeRoom));  
        
        let escapeRoomId = mutationreturn.data.createEscapeRoom.id

        setEscapeRoomID(escapeRoomId);

        riddleCon.selectedRiddles.forEach( async (riddle) => {  
            const escapeRoomRiddleInput ={ input :{ escapeRoomRiddlesEscaperoomId : escapeRoomId , escapeRoomRiddlesRiddleId : riddle.id}}
            await API.graphql(graphqlOperation(mutations.createEscapeRoomRiddles, escapeRoomRiddleInput));
            })
         
        //Generieren eines Links bzw einer zahl oder hashen der ID 
        let hashcoded = hashCode(escapeRoomId)

        //Abspeichern der EscapeRoomId und des HashCodes

        const setSeed ={ input :{ id : escapeRoomId , seed : hashcoded }}
        const updatenreturn = await API.graphql(graphqlOperation(mutations.updateEscapeRoom, setSeed));  


        

        history.push("/")
        history.push("/dashboard")


    }
    /**
     * 
     * Mathematical function that gets an ID of an EscapeRoom and is hashing it to an shorter Integer
     * 
     * @param {
     * 
     * } s 
     */

    const hashCode=(s)=>{
        let h;
        for(let i = 0; i < s.length; i++) 
              h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    
        return h;
       }


       /**
        * 
        * function that gets executed after a name for the escaperoom gets entered
        * 
        */


    const onNameEnteredHandler = () =>{
        let validName = nameRegEx.exec(escRoNam)
        if(validName === null){
            message.error("Der Name für den EscapeRoom muss mindestens 4 Zeichen lang sein")

        }
        else{
            setNameTrigger(false)
        setDurationTrigger(true)

        }
    
    }

/**
 *  function that gets executed after the time has been choosen by the creator
 * 
 */


    const onDurationEnteredHandler = () =>{
        if(duration != ''){
        setDurationTrigger(false)
        setChooseHelpTrigger(true)}else{
            message.error('Bitte wählen Sie eine Zeit aus!');
        }
    }

    const onChangeSelectDuration =(value) =>{
        setDuration(value)
        if(value===10){
            setMaxMinRiddleNum(3)
        }
        else if(value === 15){
            setMaxMinRiddleNum(4)
        }
        else if(value === 30){
            setMaxMinRiddleNum(9)
        }
        else if(value === 45){
            setMaxMinRiddleNum(12)
        }
    }



    /**
     * 
     * function that saves all choosen riddles into one array
     * 
     * 
     */

    const chooseRiddlesByCategory=() =>{
        
        //Choose Random Riddles for Algorithmik
        let randAlgoRiddles = randomRiddles(riddleCon.algorithmikRiddle, algoNum)
       //Choose Random Riddle for Kodierung
        let randKodRiddles = randomRiddles(riddleCon.kodierungRiddle, kodNum)
        //Choose Random Riddle for Theoretische Informatik
        let randTheoRiddles = randomRiddles(riddleCon.theoretischeInformatikRiddle, theoNum)
        //Coose Random Riddle for Grapehen und Datenstrukturen 
        let randGraphRiddles = randomRiddles(riddleCon.graphenUndDatenstrukturenRiddle, graphNum)
        //Coose Random Riddle for Programmieren 
        let randProgRiddles = randomRiddles(riddleCon.programmierenRiddle, progNum)
        //Coose Random Riddle for Modellieren
        let randModRiddles = randomRiddles(riddleCon.modellierenRiddle, modNum)


       riddleCon.setSelectedRiddles(randAlgoRiddles.concat(randKodRiddles, randTheoRiddles, randGraphRiddles, randProgRiddles, randModRiddles ))
        
      
       
        


    }

    /**
     * 
     * function that selects a certain number of items out of an array
     * 
     * 
     * @param {
     * } conArray 
     * @param {*} number 
     */


    const randomRiddles=(conArray, number)=>{
         
        let conRiddles =[...conArray]
        let choosedRiddles = []
       
       for(let i =0 ; i< number; i++){
           const index = Math.floor(Math.random() *conRiddles.length)
           
           let myvalue = conRiddles[index]
           if(index >-1){
              conRiddles.splice(index,1)
           }

           choosedRiddles.push(myvalue)


       }
       return choosedRiddles

    }

    /**
     * 
     * function that selects a random amout of riddles and random riddles
     * 
     */

    const randomRoom = () =>{   

        let algo = Math.floor(Math.random() * riddleCon.algorithmikRiddle.length)
        let allRiddles = [] 


        let kod = Math.floor(Math.random() * riddleCon.kodierungRiddle.length)
        
        let kodrids= randomRiddles(riddleCon.kodierungRiddle, kod)


        let theo = Math.floor(Math.random() * riddleCon.theoretischeInformatikRiddle.length)

        let theorids= randomRiddles(riddleCon.theoretischeInformatikRiddle, theo)


        let graph = Math.floor(Math.random() * riddleCon.graphenUndDatenstrukturenRiddle.length)

        let graphrids= randomRiddles(riddleCon.graphenUndDatenstrukturenRiddle, graph)


        let prog = Math.floor(Math.random() * riddleCon.programmierenRiddle.length)

        let progrids= randomRiddles(riddleCon.programmierenRiddle, prog)


        let mod = Math.floor(Math.random() * riddleCon.modellierenRiddle.length)

        let modrids= randomRiddles(riddleCon.modellierenRiddle, mod)


        let all= allRiddles.concat(randomRiddles(riddleCon.algorithmikRiddle, algo), kodrids , theorids, graphrids, progrids, modrids)
        
        if(all.length < maxMinRiddleNum){
            if(maxMinRiddleNum===3){
                let first=randomRiddles(riddleCon.algorithmikRiddle,1)
                let second=randomRiddles(riddleCon.kodierungRiddle,1)
                let third=randomRiddles(riddleCon.graphenUndDatenstrukturenRiddle,1)
                all = first.concat(second,third)
            }
            if(maxMinRiddleNum===4){
                let first=randomRiddles(riddleCon.algorithmikRiddle,2)
                let second=randomRiddles(riddleCon.kodierungRiddle,1)
                let third=randomRiddles(riddleCon.graphenUndDatenstrukturenRiddle,1)
                all = first.concat(second,third)
            }
            /*
            if(maxMinRiddleNum===9){
                let first=randomRiddles(riddleCon.algorithmikRiddle,2)
                let second=randomRiddles(riddleCon.kodierungRiddle,2)
                let third=randomRiddles(riddleCon.graphenUndDatenstrukturenRiddle,2)
                let forth=randomRiddles(riddleCon.theoretischeInformatikRiddle,2)
                let fifth=randomRiddles(riddleCon.programmierenRiddle,1)
                all = first.concat(second,third,forth, fifth)
            }
            if(maxMinRiddleNum===12){
                let first=randomRiddles(riddleCon.algorithmikRiddle,3)
                let second=randomRiddles(riddleCon.kodierungRiddle,2)
                let third=randomRiddles(riddleCon.graphenUndDatenstrukturenRiddle,3)
                let forth=randomRiddles(riddleCon.theoretischeInformatikRiddle,2)
                let fifth=randomRiddles(riddleCon.programmierenRiddle,2)
                all = first.concat(second,third,forth, fifth)
            }*/


        }

        riddleCon.setSelectedRiddles(all)

    }

    
    return (
        <div>
            <div style={{textAlign : "center"}}>
            {  nameTrigger && ( 
                <div style={{ textAlign : "center"}}>
            <Input name="EscapeRoNam" type="text" placeholder="Name des EscapeRooms" onChange={onChange} style={{width: "20%"}}></Input>
            <Button className="button button-primary button-wide-mobile button-sm" onClick={onNameEnteredHandler}>Weiter</Button><br/></div>)}





            {  durationTrigger && ( 
                <div>
                    <h1>Wie lange darf der EscapeRoom circa dauern ? </h1>
                      <Select
                            style={{ width: 200 }}
                            placeholder="Zeit wählen"
                           onChange={onChangeSelectDuration}>
                                    <Option value= {10}>10 Minuten</Option>
                                    <Option value={15}>15 Minuten</Option>
                                    <Option value={30}>30 Minuten</Option>
                                    <Option value={45}>45 Minuten</Option>
                       </Select>
                       <Button name="timeButton" onClick={()=>{onDurationEnteredHandler()}}> Weiter</Button>
   
            </div>)}









            {  chooseHelpTrigger && ( 
                <div>

                    <Card  title="Zufälligen Raum erstellen" >
                         <p>Es wird ein Raum erstellt mit zufälligen Themen und zufälligen Rätseln</p><br/>
                         <Button onClick={()=>{ randomRoom() ;setChooseHelpTrigger(false); setviewSumup(true)}}>Weiter</Button>
                         
                   </Card>
                   <Card  title="Kathegorien auswählen" >
                         <p>Sie können die Kathegorien der Themen wählen</p><br/>
                         <Button onClick={()=>{ setChooseHelpTrigger(false); setCategoryGenerator(true)}}>Weiter</Button>
                         
                   </Card>

                   {/*
                   <Card  title="Einzelne Rätsel wählen" >
                         <p>Wählen sie einzelne Rätsel aus</p><br/>
                         <Button onClick={()=>{ setChooseHelpTrigger(false); setRiddleGenerator(true)}}>Weiter</Button>
                         
                   </Card>
                   */}
            </div>)}







            { randomRoomGenerator  && ( 
                <div>



                   Random



            </div>)}

            {  categoryGenerator && ( 
                <div style={{textAlign :"center"}} >
                    <h3>Es werden <b style={{ color : "#4e89ed"}}>{maxMinRiddleNum}</b> Rätsel empfohlen damit Sie die Zeit von {duration} Minuten nicht überschreiten oder unterschreiten</h3>

                    Algorithmik<br/>

                    <Slider tooltipVisible  style={{ width:"20%"}} onChange={(value)=> {setAlgoNum(value)} }  max={riddleCon.algorithmikRiddle.length}  /><br/>

                       Kodierung<br/>

                    <Slider tooltipVisible style={{ width:"20%"}} onChange={(value)=> {setKodNum(value)} } max={riddleCon.kodierungRiddle.length} /><br/>

                    Theoretische Informatik<br/>

                    <Slider tooltipVisible style={{ width:"20%"}} onChange={(value)=> {setTheoNum(value)} } max={riddleCon.theoretischeInformatikRiddle.length} /><br/>

                    Graphen und Datenstrukturen<br/>

                    <Slider tooltipVisible style={{ width:"20%"}} onChange={(value)=> {setGraphNum(value)} } max={riddleCon.graphenUndDatenstrukturenRiddle.length} /><br/>

                     Programmieren<br/>

                    <Slider tooltipVisible style={{ width:"20%"}} onChange={(value)=> {setProgNum(value)} } max={riddleCon.programmierenRiddle.length} /><br/>


                    Modellieren<br/>

                   <Slider tooltipVisible style={{ width:"20%"}} onChange={(value)=> {setModNum(value)} } max={riddleCon.modellierenRiddle.length}  /><br/>

                   <Button onClick={()=>{ chooseRiddlesByCategory();
                     setCategoryGenerator(false); 
                     setviewSumup(true)
                      }} >Weiter</Button>



                    
            




            </div>)}

            { riddleGenerator && ( 
                <div>
                    
                  <Collapse defaultActiveKey={['1']} >

                    <Panel header="Kodierung" key="1">
                        <RiddleCheckbox arrayToPortrait={riddleCon.kodierungRiddle} />
                    </Panel>

                <Panel header="Algorithmik" key="2">
                        <RiddleCheckbox arrayToPortrait={riddleCon.algorithmikRiddle} />
                
                </Panel>
                 <Panel header="Theoretische Informatik" key="3" >
                        <RiddleCheckbox arrayToPortrait={riddleCon.theoretischeInformatikRiddle} />
                </Panel>
              <Panel header="Graphen und Datenstrukturen" key="4" >
                        <RiddleCheckbox arrayToPortrait={riddleCon.graphenUndDatenstrukturenRiddle} />
                </Panel>
                <Panel header="Programmieren" key="5" >
                        <RiddleCheckbox arrayToPortrait={riddleCon.programmierenRiddle} />
                </Panel>
                <Panel header="Modellieren" key="6" >
                        <RiddleCheckbox arrayToPortrait={riddleCon.modellierenRiddle} />
                </Panel>
              </Collapse>

              <Button onClick={()=>{ setRiddleGenerator(false); setviewSumup(true) }} >Weiter</Button>





                    









            </div>)}















            { viewSumup && ( 
                <div>
                    Der Name deines EscapeRooms lautet : <b>{escRoNam}</b> <br/>
                    Vorraussichtlich soll er dauern : <b>{duration}</b> Minuten<br/>

                    Folgende Rätsel kommen in dem Escaperoom vor : 
                    {riddleCon.selectedRiddles.map( item =>(
                        <b><li>{item.id} |{item.name}</li></b>
                    ))}<br/>



                     <Button className="button button-primary button-wide-mobile button-sm" onClick={submitHandler}>Abschicken</Button><br/>
                     
                     </div>)}


            </div>
    </div>
    );
  
}

 

export default EscapeRoomGenerator;