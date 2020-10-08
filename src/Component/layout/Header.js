import React, { useContext, useEffect, useState } from 'react';
import { Menu} from 'antd';
import { RadarChartOutlined , UserOutlined  } from '@ant-design/icons';
import { Space} from 'antd';


import 'antd/dist/antd.css';
import "../../Layouts/antdLayout.css"
import { useHistory } from 'react-router-dom';

import { Auth } from 'aws-amplify';
import {AuthContext} from "../../util/AuthContext"



const Header = () => { 
  
  useEffect(()=>{

  })


    let history = useHistory();
    const [selectedKey, setSelectedKey] = useState("3")
    const authContext= useContext(AuthContext)



    const MenuOneHandler = () =>{
      
        history.push("/")
        setSelectedKey("1")
        
        
    }
    const MenuTwoHandler = () =>{
      
        history.push("/dashboard")
        setSelectedKey("2")
    }
    const MenuThreeHandler = () =>{
      
      history.push("/authentication")
      setSelectedKey("3")
      
    }

    async function MenuFourHandler() {
      Auth.currentUserInfo().then((result)=> {
        if(result === null){
          console.log("null")
        }else{ 
          console.log(result.username+ " "+ authContext.isAuth)

        }})
      
      
      
      setSelectedKey("4")
      
    }

    async function MenuFiveHandler (){
      try {
        await Auth.signOut({ global: true });
        authContext.logout();
        history.push("/")
    } catch (error) {
        console.log('error signing out: ', error);
    }
      
      
      setSelectedKey("3")
      
    }



  return(
    <div>
    <div className="logo" />
    <Menu selectedKeys={selectedKey} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      
         
            <Menu.Item key="1"  onClick={MenuOneHandler} icon = {<RadarChartOutlined style={{ fontsize : "40px" }}/>}>Escape the Hack</Menu.Item>
          
              {authContext.isAuth
                   ? <Menu.Item key="2" onClick={MenuTwoHandler}>Dashboard</Menu.Item>
                  : <Menu.Item key="3" onClick={MenuThreeHandler} icon= {<UserOutlined />}>Anmelden</Menu.Item>
                  }
               {authContext.isAuth
      ? <Menu.Item key="5" onClick={MenuFiveHandler} icon= {<UserOutlined />}>Abmelden</Menu.Item>
      : <Menu.Item key="6"></Menu.Item>
       }
       {/*
       <Menu.Item key="7" onClick={MenuFourHandler}> Userinfo</Menu.Item>
       */}
    </Menu>
    </div>
  )
}

export default Header;  