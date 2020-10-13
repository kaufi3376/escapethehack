import React, { useEffect, useState } from "react"


export const HeaderContext = React.createContext({
    blueConstMenu : "1",
    changeVAlue :() => {}
});

const AuthContextProvider = props => {
    const [iswhichkey, setwhichkey] = useState("1")

    const setKeyValue = (keyvalue) =>{
        setwhichkey(keyvalue);
    }
 

   


    }

    return (
        <HeaderContext.Provider value={{isAuth : iswhichkey, setKeyValue : setKeyValue(keyvalue)}}>
            {props.children}
        </HeaderContext.Provider>

    );

    

export default AuthContextProvider;