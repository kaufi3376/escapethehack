import { Button, Input, Space } from 'antd';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GameContext } from "../util/GameContext"



function Home() {
  let history = useHistory();
  const gameCon = useContext(GameContext);
  const [input , setInput] = useState(0);


  const onChangeHandler = (e) =>{
    e.persist()
    setInput(e.target.value)


  }

  const onStartHandler = () =>{
    gameCon.setSeed(input)
   
    history.push("/game");
  }



  return (
      <div>
          <h3>Hallo und Herzlich Willkommen bei Escape the Hack</h3>
          <p>Um zu starten gib den Startcode hier ein: </p><br/>
          
          <Input onChange={onChangeHandler} style={{width: "10%"}}></Input><br/>
          <Button onClick={onStartHandler}> Starten</Button>
        
      </div>
   
 
  );
}

export default Home;
