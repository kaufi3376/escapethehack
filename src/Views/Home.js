import { Button, Input, Space } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';



function Home() {
  let history = useHistory();
  return (
      <div>
          <h3>Hallo und Herzlich Willkommen bei Escape the Hack</h3>
          <p>Um zu starten gib den Startcode hier ein</p><br/>
          
          <Input style={{width: "50%"}}></Input><br/>
          <Button onClick={()=> history.push("/game") }> Starten</Button>
        
      </div>
   
 
  );
}

export default Home;
