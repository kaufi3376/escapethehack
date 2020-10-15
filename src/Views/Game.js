import { Steps, Button, message, Divider, Input  } from 'antd';
import React, { useContext, useState } from 'react';
import Costumtimer from "../Component/Costumtimer"
import { GameContext } from "../util/GameContext"


import Numberencryption from "../Component/Riddles/Numberencryption"
import Unregularhouses from "../Component/Riddles/Unregularhouses"
import Listleak from "../Component/Riddles/Listleak"
import Warningtour from "../Component/Riddles/Warningtour"
import Multipleattacks from "../Component/Riddles/Multipleattacks"
import Socialhackernetwork from "../Component/Riddles/Socialhackernetwork"


const { Step } = Steps;

const riddels = [
    {
      title: 'First',
      content: <Multipleattacks/> ,
    },
    {
      title: 'Second',
      content: <Unregularhouses/>,
    },
    {
      title: 'Last',
      content: <Warningtour/>,
    },
  ];




function Game() {

    const [current, setCurrent] = useState(0)
    const  gameCon = useContext(GameContext)
    

    const next = ()=> {
        gameCon.setDisable();
        setCurrent(current+1)
      }
    
      const prev = ()=> {
        setCurrent(current-1)
      }



    

  return (
      <div>
          <Costumtimer/>
          <Divider/>
           <Steps current={current}>
          {riddels.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <Divider/>
        

        <div className="steps-content">{riddels[current].content}</div>
        <div className="steps-action">
       
          {current < riddels.length - 1 && (
            <Button name="nextbutton" type="primary" onClick={() => next()} disabled={gameCon.isNextButtonDisabled}>
              Nächstes Rätsel
            </Button>
          )}
          
          {current === riddels.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
        
          
        
      </div>
   
 
  );
}

export default Game;
