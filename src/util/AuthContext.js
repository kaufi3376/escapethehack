import React, { useEffect, useState } from "react"
import { Auth } from "aws-amplify"

export const AuthContext = React.createContext({
    isAuth : false,
    username: "",
    isLoading: true
});




const AuthContextProvider = props => {
    const [isAuthenticated, setIstAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [currentUsername, setCurrentUsername] = useState("")


    const loginHandler = () =>{
        setIstAuthenticated(true);
    }
    const logoutHandler = () =>{
        setIstAuthenticated(false);
    }

    useEffect( () => {
        loadData();
    });

    const loadData = async () => {
        const response = Auth.currentUserInfo();
        
        const user= response.then(res =>{
            if(res === null){
                setIstAuthenticated(false);

            }
            else{
                setIstAuthenticated(true);
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