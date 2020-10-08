import React, { useContext, useEffect, useState } from "react"
import {API, Auth, graphqlOperation} from "aws-amplify"
import * as customQuerie from "../graphql/customqueries"
import * as customMutations from "../graphql/custommutations"
import {AuthContext} from "../util/AuthContext"
import { Card, Col, Popconfirm, Row , Space,  message} from "antd"
import { DeleteTwoTone } from "@ant-design/icons"


const EscapeRoomDash = ({}) => { 


    const [currentUserEscaperooms, setCurrentUserEscaperooms] = useState('');
    const [loading, setLoading] = useState(true);
    const authContext= useContext(AuthContext)

    useEffect(() =>{
        loadData()
    })


    async function loadData() {
        if(!authContext.isLoading){

        const userInfo ={  author : authContext.username}
        const userEscapeRooms = await API.graphql(graphqlOperation(customQuerie.getEscapeRoomByName, userInfo ));
        setCurrentUserEscaperooms(userEscapeRooms.data)
        setLoading(false)}
        else{
            setLoading(true)
        }

    }

  
    async function deleteHandler (itemid) {

        const itemInfo ={  id : itemid }
        await API.graphql(graphqlOperation(customMutations.deleteEscapeRoom, itemInfo ));

        message.success('Escaperoom gelöscht');

    }

    function cancelDeletion(){
        message.error('Escaperoom nicht gelöscht');

    }
    
    return (
        <div >{
            loading 
            ? <div></div>
            : <div style={{ background: "#ececec", paddingBottom : 500}}><Row gutter={[25,15]} >{ 
                
                
                currentUserEscaperooms.listEscapeRooms.items.map(
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
                                       Autor : {item.author} 
                                       
                                    </Card>
                                    </Space>
                                 </Col>
                            
                        
             ))}</Row></div>
      }</div>
    );
  
}

 

export default EscapeRoomDash;