import { Button, Input } from "antd";
import React, { useContext, useEffect, useState } from "react"
import {API, Auth, graphqlOperation} from "aws-amplify"
import * as mutations from "../graphql/mutations"
import {AuthContext} from "../util/AuthContext"


const EscapeRoomGenerator = () => { 

    const [escRoNam, setescRoNam] = useState('');
    const authContext= useContext(AuthContext)

    useEffect ( () =>{

    },[])


    const onChange= (e) => {
        e.persist()
          setescRoNam(e.target.value)
        
    
    }
    async function submitHandler() {
        
        const escapeRoom ={ input :{ name : escRoNam , author : authContext.username}}
        await API.graphql(graphqlOperation(mutations.createEscapeRoom, escapeRoom));   
    }


    
    return (
        <div>
            
            <Input name="EscapeRoNam" type="text" placeholder="Name des EscapeRooms" onChange={onChange}></Input>
            <Button className="button button-primary button-wide-mobile button-sm" onClick={submitHandler}>Abschicken</Button><br/>

    </div>
    );
  
}

 

export default EscapeRoomGenerator;