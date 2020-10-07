import React, { useEffect, useState } from "react"
import {API, Auth, graphqlOperation} from "aws-amplify"
import * as customQuerie from "../graphql/customqueries"


const EscapeRoomDash = ({
    username
}) => { 


    const [currentUserEscaperooms, setCurrentUserEscaperooms] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        loadData()
    },[])


    async function loadData() {

        const userInfo ={  author : username}
        const userEscapeRooms = await API.graphql(graphqlOperation(customQuerie.getEscapeRoomByName, userInfo ));
        console.log(userEscapeRooms)
        setCurrentUserEscaperooms(userEscapeRooms.data)
        setLoading(false)

    }
    
    return (
        <div >{
            loading 
            ? <div></div>
            : <div>{ currentUserEscaperooms.listEscapeRooms.items.map(
                 item =>(
                          <li  key = {item.id}> {item.name} </li>
  
             ))}</div>
      }</div>
    );
  
}

 

export default EscapeRoomDash;