import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'antd';
import EscapeRoomGenerator from "../Component/EscapeRoomGenerator"
import EscapeRoomDash from "../Component/EscapeRoomDash"

import { Card } from 'antd';


function Home() {
    const [isInEditor, setIsInEditor]= useState(false)
    const [key, setKey]= useState("tab1")

    const tabList = [
        {
          key: 'tab1',
          tab: 'Meine Escaperooms',
        },
        {
          key: 'tab2',
          tab: 'Neuen EscapeRoom erstellen',
        },
      ];
      const contentList = {
        tab1: <EscapeRoomDash/>,
        tab2: <EscapeRoomGenerator/>,
      };

    
    const toggleHandlerToGene = () =>{
        setIsInEditor(true)

    }
    const toggleHandlerToDash = () =>{
        setIsInEditor(false)

    }
    const onTabChange = key => {
        setKey(key)
      };
    
   

  return (

      <div>
          {/*
          <Button type="primary" onClick={toggleHandlerToDash} >Meine Escape Rooms</Button>
          <Button type="primary" onClick={toggleHandlerToGene}>Neuen Escape Room erstellen</Button>
          {
              isInEditor
              ? <EscapeRoomGenerator/>
              : <EscapeRoomDash/>

          }
        */}
           <Card
          style={{ width: '100%' }}
          title="Dashboard"
          tabList={tabList}
          activeTabKey={key}
          onTabChange={key => {
            onTabChange(key);
          }}
        >
          {contentList[key]}
        </Card>
          

      </div>
   
 
  );
}

export default Home;
