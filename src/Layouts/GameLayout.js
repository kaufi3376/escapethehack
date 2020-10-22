import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Costumsider from "../Component/layout/Costumsider"

/**
 * 
 * Layout that is used in a EscapeRoom with a sider and content in the middle and a footer at the bottom
 * 
 * 
 */



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;





function GameLayout ({ 
  children: children}) {

    return(
  <>
     <Layout style={{ minHeight: '100vh' }}>
       <Costumsider/>
        <Layout className="site-layout">
         
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

 
  </>
  )};

export default GameLayout;  