import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import Costumheader from "../Component/layout/Header"
import Costumfooter from "../Component/layout/Footer"



import 'antd/dist/antd.css';
import "./antdLayout.css"

const { Header, Content, Footer, Sider } = Layout;



const antdLayout = ({ 
  children: children}) => (
  <>

    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Costumheader/>
    </Header>

    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {children}
      </div>
    </Content>
    <Footer style={{  textAlign: 'center' }}>
        <Costumfooter/>
    </Footer>
  </Layout>
 
  </>
);

export default antdLayout;  