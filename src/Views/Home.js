import { Button, Input, message, Space } from 'antd';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GameContext } from "../util/GameContext"

import * as costumqueries from "../graphql/customqueries"
import logo from "../Pictures/logo.png"

/**
 * 
 * functional component that gets loaded after you are starting the app
 * 
 * 
 */



function Home() {
  let history = useHistory();
  const gameCon = useContext(GameContext);
  const [input , setInput] = useState(0);
  const inputRegEx = /^[-+]?\d+$/

   /**
    * function that executes if the input field is changing values
    * 
    * @param {
    * } e 
    */
  const onChangeHandler = (e) =>{
    e.persist()
    setInput(e.target.value)


  }

  /**
   * function that checks if the input code is valid and if so the game is getting started
   * 
   * 
   */

  async function onStartHandler(){
    //Validation of input 
    const validInput = inputRegEx.exec(input)
    if(validInput === null){
      message.error("Der Startcode ist leider nicht valide !")
    }else{

      try{
        const seedInfo ={  seed : input }
        const fetchedRiddles= await API.graphql(graphqlOperation(costumqueries.getRiddlesBySeed, seedInfo ));
        console.log(fetchedRiddles.data.listEscapeRooms.items.length)
        if(fetchedRiddles.data.listEscapeRooms.items.length>0){
          gameCon.setSeed(input)
          history.push("/game");
        }else{
          message.error("Der Startcode ist leider nicht korrekt ")

        }
      }
      catch(error){
        console.log(error)

      }
     
    }
    
  
  }



  return (
      <div style={{ textAlign : "center"}}>
  
          <img style={{height :"300px" , width :"375px"}} src={logo}/><br/>

           <h2>Bewahre die Menschheit vor einer großen Katastrophe ! Das Internet steht kurz davor gehackt zu werden. Kannst du es schaffen und die Hacker überlisten ? </h2>
          <p>Um zu starten gib den Startcode hier ein: </p><br/>
          
          <Input onChange={onChangeHandler} style={{width: "10%"}}></Input><br/>
          <Button onClick={onStartHandler}> Starten</Button>
        
      </div>
   
 
  );
}

export default Home;
