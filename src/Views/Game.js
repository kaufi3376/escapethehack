import { Steps, Button, message, Divider, Input  } from 'antd';
import React, { useContext, useEffect, useState } from 'react';


import Costumtimer from "../Component/Costumtimer"

import { GameContext } from "../util/GameContext"

import { API, graphqlOperation } from 'aws-amplify';
import * as costumqueries from "../graphql/customqueries"


import Prestory from "../Component/StoryComponents/Prestory"
import Endstory from "../Component/StoryComponents/Endstory"
import Numberencryption from "../Component/Riddles/Numberencryption"
import Unregularhouses from "../Component/Riddles/Unregularhouses"
import Listleak from "../Component/Riddles/Listleak"
import Warningtour from "../Component/Riddles/Warningtour"
import Multipleattacks from "../Component/Riddles/Multipleattacks"
import Socialhackernetwork from "../Component/Riddles/Socialhackernetwork"

/**
 * 
 * functional component that manages a game, fetches riddles and build up the EscapeRoom
 * 
 */

const { Step } = Steps;



function Game() {

    const [current, setCurrent] = useState(0)
    const  gameCon = useContext(GameContext)
    const [loadingRiddles , setLoadingRiddles]= useState(true)
    const [riddles,setRiddels]= useState([])
    const [onPrestory, setOnPrestory]= useState(true)
    const [onMainQuest, setOnMainQuest]= useState(false)
    const [onEndstory, setOnEndstory]= useState(false)


    const [temp, setTemp]= useState(0)
    const [duration, setDuration]= useState(0)

    

    const next = ()=> {
        gameCon.setDisable();
        setCurrent(current+1)
      }
    
      const prev = ()=> {
        setCurrent(current-1)
      }

      useEffect(  ()=>{
        loadData();


      },[])

      /**
       * 
       * fetching data about the room based on the game seed
       * 
       */

      async function loadData(){
        const seedInfo ={  seed : gameCon.seed }
        const fetchedRiddles= await API.graphql(graphqlOperation(costumqueries.getRiddlesBySeed, seedInfo ));

      
        const fetchedduration= await API.graphql(graphqlOperation(costumqueries.getDurationBySeed, seedInfo ));

        setDuration(fetchedduration.data.listEscapeRooms.items[0].duration)

        let containerRiddles = []

        fetchedRiddles.data.listEscapeRooms.items[0].riddles.items.forEach( riddle =>{
          
          switch(riddle.riddle.name){
            case "Numberencryption" : 
              containerRiddles.push({title :"Geheimer Zahlentext", content : <Numberencryption/>})

              break;
            case "Unregularhouses" : 
              containerRiddles.push({title :"", content : <Unregularhouses/>})

              break;
            case "Listleak" : 
              containerRiddles.push({title :"", content : <Listleak/>})

              break;
            case "Warningtour" : 
              containerRiddles.push({title :"", content : <Warningtour/>})

              break;
            case "Multipleattacks" : 
              containerRiddles.push({title :"", content : <Multipleattacks/>})

              break;
            case "Socialhackernetwork" : 
              containerRiddles.push({title :"", content : <Socialhackernetwork/>})

              break;
            
          }
        })

        setRiddels(containerRiddles)


        setLoadingRiddles(false)


      }


    

  return (
        <div>
         { onPrestory &&(<div>
            <Prestory storylength={riddles.length} />
            <Button onClick={()=> {setOnPrestory(false); setOnMainQuest(true); gameCon.setStart(true); setTemp(1000*60*duration+1000)}} >Starten!</Button>
          </div>)}
      


          {onMainQuest &&(<div>

          <Costumtimer time={temp}/>
          <Divider/>
           <Steps current={current}>
          {riddles.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <Divider/>
        

        <div className="steps-content">
          { loadingRiddles ?
             <div> Rätsel werden geladen... </ div> 
            :(riddles[current].content)}
          
          </div>
        <div className="steps-action">
       
          {current < riddles.length - 1 && (
            <Button name="nextbutton" type="primary" onClick={() => next()} disabled={gameCon.isNextButtonDisabled}>
              Nächstes Rätsel
            </Button>
          )}
          
          {current === riddles.length - 1 && (
            <Button type="primary" disabled={gameCon.isNextButtonDisabled} onClick={() => {setOnMainQuest(false); setOnEndstory(true)}}>
              Geschafft!
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
        
          
        
      </div>)}
      { onEndstory && (<div>
        <Endstory/>
      </div>)

      }

    </div>
     
   
 
  );
}

export default Game;
