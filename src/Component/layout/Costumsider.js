import React, { useContext, useEffect, useState } from 'react';
import { Affix, Badge, Button, Layout, Menu, Popconfirm} from 'antd';
import {
  RadarChartOutlined,
  InfoCircleOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import {GameContext} from "../../util/GameContext"
import MenuItem from 'antd/lib/menu/MenuItem';
import Modal from 'antd/lib/modal/Modal';
import { useHistory } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;






function Costumsider () {
  
      const [collapsed, setCollapsed]= useState(true)
      const [visible, setVisible]= useState(false)
      const [showTip, setShowTip ]= useState(false)
      const gameCon = useContext(GameContext)
      let reveledtipps =[]
      let history = useHistory()
    

      const pressTippsHandler = () =>{
        showModal()
      }
  
  
  
      const onCollapse = collapsed => {
          setCollapsed(collapsed);
        };

       const showModal = () => {
          setVisible(true);
          setShowTip(false);
        };
      
        const handleOk = e => {
          
          setVisible(false);
          setShowTip(false);
        };
      
        const handleCancel = e => {
          
          setVisible(false);
          setShowTip(false);
        };

        function showRevealedTipps(){

          let temptips = []

          for (let i = 0; i < (gameCon.tipps.length
            -gameCon.tippsCount); i++) {
             temptips[i]= gameCon.tipps[i]
            
            
          }
          return(temptips)
        };

        useEffect(() =>{
         reveledtipps= showRevealedTipps()
         console.log(reveledtipps)


        })

        const backToHomeHandler = () => {
          gameCon.setStart(false)
          history.push("/")

        }



  
  
      return(
    <>

          <Sider collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<RadarChartOutlined />} onClick={backToHomeHandler}>
              
              </Menu.Item>
                     
                       <Menu.Item key="2" icon={
                                                 <Badge count={gameCon.tippsCount} offset={[10, 13]}>
                                                          <InfoCircleOutlined />
                                                 </Badge>
                                                } 

                                        onClick={pressTippsHandler}>
                       </Menu.Item>
                
                      

             
            </Menu>
          </Sider>
          <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
  
          onCancel={handleCancel}
          
        >
          <Button onClick={ ()=>{  
                                   if(gameCon.tippsCount >0 ){
                                    setShowTip(true);
                                    gameCon.decrementTipps();
                                   }
                                
                                   

                                    }}> Ich möchte einen Tipp!</Button>
          {
            
              true && (reveledtipps.map( tip =>(
              <li>{tip.content} </li>
              )))


          }

          {
             showTip && (
               
              <li>{gameCon.tipps[gameCon.tippsCount].content} </li>
              
              )
             }      

        </Modal>
        
   
    </>
    )};
  
  export default Costumsider;  