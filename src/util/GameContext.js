import React, { useEffect, useState } from 'react';


/**
 * 
 * Context that provides all information about the current game
 * 
 * it also exports the gamecontextprovider that wrapps the other components
 * 
 * 
 */


export const GameContext = React.createContext({
    isNextButtonDisabled: true,
    tippsCount :2,
    joker :1,
    tipps: [],
    seed : 0,
    start: false,
    time : 0,
    offstory: true
});


/**
 * 
 * The provider which is getting exported
 * 
 * @param {
 * } props 
 */


const GameContextProvider = props => {
    const [isNextDisabled, setIsNextDisabled] = useState(true)
    const [tippsCount, setTippsCount] = useState(2)
    const [joker, setJoker] = useState(1)
    const [tipps , setTipps]= useState([])
    const [seed , setSeed]= useState(0)
    const [start, setStart]= useState(false)
    const [time, setTime]= useState(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30)
    const [offstory, setOffstory]= useState(true)



    const setNextButtonDisable = () =>{
        setIsNextDisabled(true)
    }
       
    const setNextButtonEnable = () =>{
        setIsNextDisabled(false)
    }

    const decrementTipps = () =>{
        setTippsCount(tippsCount-1)
    }
    const decrementJoker = () =>{
        setJoker(joker-1)
    }
    const setCostumTipps = (tippsArr) =>{
        setTipps(tippsArr)
    }
    const setTippsCountHandler = () =>{
        setTippsCount(2)
    }
    const setSeedHandler = (seed) =>{
        setSeed(seed)
    }
    const setStartHandler = (start) =>{
        setStart(start)
    }
    const setTimeHandler = (time) =>{
        setTime(time)
    }
    const resetTippsCount =()=>{
        setTippsCount(2)
    }
    const setOffstoryHandler =(bool)=>{
        setOffstory(bool)
    }


    useEffect( () => {
        loadData();
    });

    const loadData = async () => {
        
    }



    return (
        <GameContext.Provider value={{isNextButtonDisabled: isNextDisabled, 
                                      setDisable : setNextButtonDisable, 
                                      setEnable : setNextButtonEnable ,
                                      tippsCount : tippsCount,
                                      setTippsCount: setTippsCountHandler,
                                      joker : joker,
                                      decrementTipps : decrementTipps,
                                      decrementJoker : decrementJoker,
                                      tipps : tipps,
                                      setTipps : setCostumTipps,
                                      resetTippsCount: resetTippsCount,
                                      seed :seed,
                                      setSeed: setSeedHandler,
                                      start: start,
                                      setStart : setStartHandler,
                                      time : time,
                                      setTime : setTimeHandler,
                                      offstory: offstory,
                                      setOffstory: setOffstoryHandler }}>
            {props.children}
        </GameContext.Provider>

    );

}

export default GameContextProvider;