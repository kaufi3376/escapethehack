import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import EscapeRoomGenerator from "../Component/EscapeRoomGenerator"
import EscapeRoomDash from "../Component/EscapeRoomDash"
import { Auth } from 'aws-amplify';


function Home() {
    const [isInEditor, setIsInEditor]= useState(false)
    const [currentUserName, setCurrentUserName] = useState('');


    const toggleHandlerToGene = () =>{
        setIsInEditor(true)

    }
    const toggleHandlerToDash = () =>{
        setIsInEditor(false)

    }
    useEffect(() =>{
        loadUserData();
    }, [])


    const loadUserData = async () => {
        await Auth.currentUserInfo().then( res => {
            setCurrentUserName(res.username)
        })
        
        
    }


  return (
      <div>
          <Button type="primary" onClick={toggleHandlerToDash} >Meine Escape Rooms</Button>
          <Button type="primary" onClick={toggleHandlerToGene}>Neuen Escape Room erstellen</Button>
          {
              isInEditor
              ? <EscapeRoomGenerator username={currentUserName}/>
              : <EscapeRoomDash username={currentUserName}/>

          }
      </div>
   
 
  );
}

export default Home;
