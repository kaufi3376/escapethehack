import React, { useEffect, useState } from "react"
import { Auth } from "aws-amplify"


/**
 *  Context class that stores all information about the Authentication process. 
 * The AuthContextProvider is exported for wrapping other routes
 * 
 * 
 */



export const AuthContext = React.createContext({
    isAuth : false,
    username: "",
    isLoading: true
});




const AuthContextProvider = props => {
    /**
     * State Hooks that store authentication data
     * 
     */
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [currentUsername, setCurrentUsername] = useState("")

    const loginHandler = () =>{
        setIsAuthenticated(true);
    }
    const logoutHandler = () =>{
        setIsAuthenticated(false);
    }

    useEffect( () => {
        loadData();
    });


    /**
     * 
     * async function that loads all data about the current user.
     * 
     */


    const loadData = async () => {
        const response = Auth.currentUserInfo();
        
        const user= response.then(res =>{
            if(res === null){
                setIsAuthenticated(false);

            }
            else{
                setIsAuthenticated(true);
                setCurrentUsername(res.username)
                setIsLoading(false)
                
            }
            })
        
        

    }

    return (
        <AuthContext.Provider value={{isAuth : isAuthenticated, login : loginHandler, logout : logoutHandler , username : currentUsername , isLoading :isLoading}}>
            {props.children}
        </AuthContext.Provider>

    );

}

export default AuthContextProvider;