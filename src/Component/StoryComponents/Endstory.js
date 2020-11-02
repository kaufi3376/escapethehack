import React, { useContext, useEffect } from 'react';
import {GameContext} from "../../util/GameContext"
import victoryComic from "../../Pictures/victory.png"



function Endstory({
    time
}) {
    const gameCon = useContext(GameContext)

    useEffect(()=>{
        gameCon.setOffstory(true)
    })
  
    return (
        <div> 
            <h1>GEWONNEN!</h1>
            <div style={{width : "50%", height:"50%", alignItems: "center"}}>
            <img src={victoryComic} style={{width: "100%", height : "auto"}} ></img>
            </div>

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
  