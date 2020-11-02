import React, { useContext, useEffect, useState } from "react"
import {API, Auth, graphqlOperation} from "aws-amplify"
import * as customQuerie from "../graphql/customqueries"
import * as customMutations from "../graphql/custommutations"
import * as mutations from "../graphql/mutations"

import {AuthContext} from "../util/AuthContext"
import {GameContext} from "../util/GameContext"
import { Card, Col, Popconfirm, Row , Space,  message, Input, Button} from "antd"
import { DeleteTwoTone, EditOutlined, EditTwoTone, PlayCircleTwoTone } from "@ant-design/icons"
import Modal from "antd/lib/modal/Modal"
import { useHistory } from "react-router-dom"


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
    const gameCon = useContext(GameContext)
    let history = useHistory()
    const [editItems , setEditItems]= useState([])
    const [editNameInput, setEditNameInput]= useState("")

    useEffect(() =>{
        loadData()
    })
    
    /**
     * function that is fetching data. It fetches all EscapeRooms that the user has been created
     * 
     */

    async function loadData() {
        if(!authContext.isLoading){

        const userInfo ={  author : "MeinBenutzername"}
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

    /**
     * An array that stores if an input flied is collapsed or not. it toggles the input field
     * 
     * @param {
     * } itemid 
     */

    function addItemsEditArray(itemid){
        if(!editItems.includes(itemid)){
            setEditItems([...editItems,itemid])
        }else{
            deleteItemsEditArray(itemid)
        }

    }
    /**
     * 
     * Secound function to store an array and delete the items
     * 
     * @param {
     * } itemid 
     */

    function deleteItemsEditArray(itemid){
        if(editItems.includes(itemid)){
            setEditItems(editItems.filter(listitem => listitem !== itemid))
        }

    }
    /**
     * function that stores the input of the field
     * 
     * @param {
     * } e 
     */

    const onChange = e =>{
        e.persist()
        setEditNameInput(e.target.value)

    }

    /**
     * 
     * async function that updates the name of the Escaperoom
     * 
     * @param {
     * } itemid 
     */

    async function submitChangeNameHandler(itemid){
        deleteItemsEditArray(itemid)

        const itemInfo ={ input: { id:itemid, name : editNameInput} }
        await API.graphql(graphqlOperation(mutations.updateEscapeRoom, itemInfo ));




        message.success('Escaperoomname wurde geändert');



    }

    /**
     * 
     * starts an Escaperoom out of the Cards
     * 
     * @param {
     * } itemseed 
     */
    
    function playEscapeRoom(itemseed){
        gameCon.setSeed(itemseed)
        history.push("/game")

    }
    
    return (
        <div >{
            loading 
            ? <div></div>
            : <div style={{ background: "#ececec", paddingBottom : 500}}><Row gutter={[25,15]} >{ 
                
                
                currentUserEscaperooms.map(
                 item =>(   
                               <Col span={8} key = {item.id}>
                                   {}
                                   <Space align="center">
                                   <Card hoverable title={item.name}
                                         bordered={true} 
                                         style={{ width: 300 , margin: "30px" , textAlign: "center" }}
                                         extra={ <div> 
                                            
                                                <EditTwoTone style={{ color : "#08c", fontSize : "25px"}} onClick={()=> addItemsEditArray(item.id) } />
                                                

                                                <Popconfirm
                                                title="Wollen Sie den Escaperoom wirklich löschen ? "
                                                onConfirm={() => deleteHandler(item.id)}
                                                onCancel={cancelDeletion}
                                                okText="Ja"
                                                cancelText="Nein">
                                                             <DeleteTwoTone 
                                                               style={{ color : "#08c", fontSize : "25px"}} /></Popconfirm></div>}
                                         >
                                       Autor : {item.author} <br/>
                                       StartCode: <b> {item.seed}</b>
                                       {  editItems.includes(item.id) &&(
                                          <div>
                                              <Input onChange={onChange}></Input>
                                              <Button onClick={()=>{submitChangeNameHandler(item.id)}}>Erneuern</Button></div>
                                       )
                                       
                                       }<br/>
                                       <Space align="center"></Space>
                                       <PlayCircleTwoTone onClick={()=> playEscapeRoom(item.seed)} style={{ fontSize: "50px", textAlign: "center"}} />

                                       
                                    </Card>
                                    </Space>
                                 </Col>
                            
                        
             ))}</Row>
             </div>
      }
      </div>
    );
  
}

 

export default EscapeRoomDash;