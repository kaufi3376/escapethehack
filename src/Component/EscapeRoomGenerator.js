import { Button, Input } from "antd";
import React, { useEffect, useState } from "react"
import {API, Auth, graphqlOperation} from "aws-amplify"
import * as mutations from "../graphql/mutations"


const EscapeRoomGenerator = (
    {username:username}
) => { 

    const [escRoNam, setescRoNam] = useState('');
    const [currentUserName, setCurrentUserName] = useState('');

    useEffect ( () =>{
        setCurrentUserName(username)
        console.log(username)

    },[])


    const onChange= (e) => {
        e.persist()
          setescRoNam(e.target.value)
        
    
    }
    async function submitHandler() {
        
        const escapeRoom ={ input :{ name : escRoNam , author : currentUserName}}
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