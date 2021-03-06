import React, { useContext, useEffect } from 'react';
import {GameContext} from "../../util/GameContext"
import prestoryComic from "../../Pictures/stroy _comic2.png"

function Prestory({
    storylength
}) {
    const gameCon = useContext(GameContext)

    useEffect(()=>{
        gameCon.setOffstory(true)
    })
    return (
        <div> 
            <h1 style = {{ textAlign : "center"}}>Escape the Hack</h1>
            <img src={prestoryComic} style={{width: "100%", height : "auto"}} ></img>
      
            <p>Die Welt ist nicht so wie wir sie kennen.. Der Präsident der Vereinigten Staaten braucht deine Hilfe um die Welt vor einem Hackerangriff zu schützen <br/>
                <b> Du musst  {storylength} Attacken abwehren...</b></p><br/>
            <p>Es wäre gelacht wenn du das nicht schaffen !</p><br/>
            
            
            <p>Regeln:</p>
            <li>Du musst alle Rätsel innerhalb der Vorgegebenen zeit schaffen</li>
            <li>Pro Runde hast du Tipps die du einsetzten darfst</li>
            <li>Falls du bei Multiple Choice Rätseln falsch antwortest, bekommst du eine Zeitstrafe</li>


            <h3><b>Happy Hacking und viel Erfolg!</b></h3>


        </div>
    );
  }
  
export default Prestory;
  