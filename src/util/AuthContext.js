import React, { useEffect, useState } from "react"
import { Auth } from "aws-amplify"

export const AuthContext = React.createContext({
    isAuth : false,
});

const AuthContextProvider = props => {
    const [isAuthenticated, setIstAuthenticated] = useState(false)

    const loginHandler = () =>{
        setIstAuthenticated(true);
    }
    const logoutHandler = () =>{
        setIstAuthenticated(false);
    }

    useEffect( () => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = Auth.currentUserInfo();
        
        const user= response.then(res =>{
            if(res === null){
                setIstAuthenticated(false);

            }
            else{
                setIstAuthenticated(true);
                
            }
            })
        
        

    }

    return (
        <AuthContext.Provider value={{isAuth : isAuthenticated, login : loginHandler, logout : logoutHandler}}>
            {props.children}
        </AuthContext.Provider>

    );

}

export default AuthContextProvider;