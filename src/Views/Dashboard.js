import React, { useState } from 'react';
import EscapeRoomGenerator from "../Component/EscapeRoomGenerator"
import EscapeRoomDash from "../Component/EscapeRoomDash"

import { Card } from 'antd';


/**
 * 
 * functional Component that creats tabs and toggles between the tabs 
 * 
 * 
 */

function Dashboard() {

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

    
    const onTabChange = key => {
        setKey(key)
      };
    
   

  return (

      <div classname={"cards"}>
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

export default Dashboard;
