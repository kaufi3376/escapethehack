import React, { useContext, useEffect, useState } from "react"
import {API, Auth, graphqlOperation} from "aws-amplify"
import * as customQuerie from "../graphql/customqueries"
import * as customMutations from "../graphql/custommutations"
import {AuthContext} from "../util/AuthContext"
import { Card, Col, Popconfirm, Row , Space,  message} from "antd"
import { DeleteTwoTone } from "@ant-design/icons"


/**
 * 
 * functional component that shows all Escaperooms of the user and gives him the ability to delete them. 
 * 
 * @param {
 * 
 * } param0 
 */

const EscapeRoomDash = ({}) => { 


    const [currentUserEscaperooms, setCurrentUserEscaperooms] = useState('');
    const [loading, setLoading] = useState(true);
    const authContext= useContext(AuthContext)

    useEffect(() =>{
        loadData()
    })
    
    /**
     * function that is fetching data. It fetches all EscapeRooms that the user has been created
     * 
     */

    async function loadData() {
        if(!authContext.isLoading){

        const userInfo ={  author : authContext.username}
        const userEscapeRooms = await API.graphql(graphqlOperation(customQuerie.getEscapeRoomByName, userInfo ));
        setCurrentUserEscaperooms(userEscapeRooms.data.listEscapeRooms.items)
        setLoading(false)
        
        
    
    }
        else{
            setLoading(true)
        }

    }

    /**
     * 
     * function that deletes an given item from the backend
     * 
     * @param {
     * } itemid 
     */

  
    async function deleteHandler (itemid) {

        const itemInfo ={  id : itemid }
        await API.graphql(graphqlOperation(customMutations.deleteEscapeRoom, itemInfo ));




        message.success('Escaperoom gelöscht');

    }

    /**
     * function that gives feedback if the user decided not to delete an EscapeRoom
     * 
     */

    function cancelDeletion(){
        message.error('Escaperoom nicht gelöscht');

    }


    
    return (
        <div >{
            loading 
            ? <div></div>
            : <div style={{ background: "#ececec", paddingBottom : 500}}><Row gutter={[25,15]} >{ 
                
                
                currentUserEscaperooms.map(
                 item =>(   
                               <Col span={8} key = {item.id}>
                                   <Space align="center">
                                   <Card hoverable title={item.name}
                                         bordered={true} 
                                         style={{ width: 300 , margin: "30px" }}
                                         extra={
                                                <Popconfirm
                                                title="Wollen Sie den Escaperoom wirklich löschen ? "
                                                onConfirm={() => deleteHandler(item.id)}
                                                onCancel={cancelDeletion}
                                                okText="Ja"
                                                cancelText="Nein">
                                                             <DeleteTwoTone 
                                                               style={{ color : "#08c", fontSize : "25px"}} /></Popconfirm>}
                                         >
                                       Autor : {item.author} <br/>
                                       StartCode: <b> {item.seed}</b>
                                       
                                    </Card>
                                    </Space>
                                 </Col>
                            
                        
             ))}</Row></div>
      }</div>
    );
  
}

 

export default EscapeRoomDash;