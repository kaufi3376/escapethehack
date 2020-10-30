import React, { useContext, useEffect } from 'react';
import {GameContext} from "../../util/GameContext"



function Endstory({
    time
}) {
    const gameCon = useContext(GameContext)

    useEffect(()=>{
        gameCon.setOffstory(true)
    })
  
    return (
        <div> 
            <b>Hier Victory Comic einsetzten!!</b>

            <p> DU hast es geschafft ! Du konntest alle Hacker Angriffe abwehren ! </p>
            <p>Du hast dafür {time} gebraucht</p>
            {/* TODOS
            <p> Deine Punktzahl : {score} </p>
            <p> Achievments unlocked : {achvievments} </p>

            */}


        </div>
    );
  }
  
export default Endstory;
  