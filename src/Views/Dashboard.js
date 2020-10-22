import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'antd';
import EscapeRoomGenerator from "../Component/EscapeRoomGenerator"
import EscapeRoomDash from "../Component/EscapeRoomDash"

import { Card } from 'antd';


/**
 * 
 * functional Component that creats tabs and toggles between the tabs 
 * 
 * 
 */

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
        {
          key: 'tab3',
          tab: 'Rätsel ansehen (t.b.a)',
        },
        {
          key: 'tab4',
          tab: 'Lösungen der Rätsel (t.b.a)',
        },
      ];
      const contentList = {
        tab1: <EscapeRoomDash/>,
        tab2: <EscapeRoomGenerator/>,
        tab3: <div></div>,
        tab4 : <div></div>
      };

    
    const onTabChange = key => {
        setKey(key)
      };
    
   

  return (

      <div>
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
