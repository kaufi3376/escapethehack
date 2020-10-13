import React, { useEffect, useState } from 'react';



export const GameContext = React.createContext({
    isNextButtonDisabled: true,
    tippsCount :2,
    joker :1,
    tippsCount : []


});





const GameContextProvider = props => {
    const [isNextDisabled, setIsNextDisabled] = useState(true)
    const [tippsCount, setTippsCount] = useState(2)
    const [joker, setJoker] = useState(1)
    const [tipps , setTipps]= useState([])


    useEffect(() =>{
        //TODO : Alle Riddels des EscapeRooms fetchen
        //Tipps laden 

    })
    

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
                                      setTipps : setCostumTipps }}>
            {props.children}
        </GameContext.Provider>

    );

}

export default GameContextProvider;