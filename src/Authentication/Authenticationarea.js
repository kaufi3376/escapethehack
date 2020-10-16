import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Auth } from 'aws-amplify';
import {AuthContext} from "../util/AuthContext"
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';




const initialFormState= {
    username : "", password : "", email : "" , authCode : "" , formType : "signIn"
}



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};



function Authenticationarea() {
    const [formState, updateFormState] = useState(initialFormState)
    const authContext = useContext(AuthContext);
    let history = useHistory();


    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      function onChange(e){
        e.persist()
        updateFormState(() => ({...formState, [e.target.name]: e.target.value }))

    }

    const {formType} = formState

    async function signUp() {
        const {username , email , password} = formState
        await Auth.signUp({ username , password, attributes :{ email }})
        updateFormState(() => ({...formState, formType: "confirmSignUp" }))

    }

    async function confirmSignUp() {
        const {username , authCode} = formState
        await Auth.confirmSignUp(username, authCode)
        updateFormState(() => ({...formState, formType: "signIn" }))
        
    }


    async function signIn() {
        const {username , password} = formState
       
        

        try {
            const user = await Auth.signIn(username, password);
            authContext.login()
        } catch (error) {
            console.log('error signing in', error);
        }
        updateFormState(() => ({...formState, formType: "signedIn" }))
      
    
        
    }
    function signInFirst() {
        updateFormState(() => ({...formState, formType: "signUp" }))
    }


 

 

  return (

    <div style={{width : 300, paddingBottom : 530 , margin : "0 auto" , alignItems:'center'}} > 
        { formType === "signIn" && (
              <div>
              <h1>Jetzt Einloggen !</h1>
                    <Form name="normal_login"
                          className="login-form"
                          initialValues={{  remember: true}}
                          onFinish={onFinish} >
                            <Form.Item
                                       name="username"
                                       rules={[
                                                 {
                                                    required: true,
                                                    message: 'Please input your Username!'
                                                   },]}>
                                                         <Input name="username" 
                                                                 prefix={<UserOutlined className="site-form-item-icon" />} 
                                                                 placeholder="Username" 
                                                                 onChange={onChange}/>
                            </Form.Item>
                            <Form.Item
                                       name="password"
                                       rules={[
                                         {
                                           required: true, 
                                           message: 'Please input your Password!'},]}>
                                                   <Input  name="password"
                                                           prefix={<LockOutlined className="site-form-item-icon" />}
                                                           type="password"
                                                           placeholder="Password"
                                                           onChange={onChange}/>
                           </Form.Item>
      

                           <Form.Item>
                                      <Button type="primary" htmlType="submit" className="login-form-button" onClick={signIn}>
                                       Einloggen
                                      </Button>
                                            Oder     <a onClick={signInFirst}>Registrieren</a>
                         </Form.Item>
                  </Form>
                </div>


                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    )
                    }
                    {
                    formType === "signUp" && (
                      <div>
                      <h1>Jetzt Registrieren !</h1>
                      <Form name="normal_signIn"
                          className="login-form"
                          initialValues={{  remember: true}}
                          onFinish={onFinish} >
                            <Form.Item
                                       name="username"
                                       rules={[
                                                 {
                                                    required: true,
                                                    message: 'Please input your Username!'
                                                   },]}>
                                                         <Input name="username" 
                                                                 prefix={<UserOutlined className="site-form-item-icon" />} 
                                                                 placeholder="Username" 
                                                                 onChange={onChange}/>
                            </Form.Item>
                            <Form.Item
                                       name="password"
                                       rules={[
                                         {
                                           required: true, 
                                           message: 'Please input your Password!'},]}>
                                                   <Input  name="password"
                                                           prefix={<LockOutlined className="site-form-item-icon" />}
                                                           type="password"
                                                           placeholder="Password"
                                                           onChange={onChange}/>
                           </Form.Item>
                           <Form.Item
                                       name="email"
                                       rules={[
                                         {
                                           required: true, 
                                           message: 'Please input your Email!'},]}>
                                                   <Input  name="email"
                                                           prefix={<MailOutlined className="site-form-item-icon" />}
                                                           type="text"
                                                           placeholder="E-mail"
                                                           onChange={onChange}/>
                           </Form.Item>
      

                           <Form.Item>
                                      <Button type="primary" htmlType="submit" className="login-form-button" onClick={signUp}>
                                       Einloggen
                                      </Button>
                         </Form.Item>
    </Form>
    </div>




                    )



            }
            {
                    formType === "confirmSignUp" && (
                      <div>
                      <h1>Bestätigen Sie bitte Ihre Registrierung mit den Code der Ihnen per Mail zugesendet wurde !</h1>
                            <Form name="normal_login"
                                  className="login-form"
                                  initialValues={{  remember: true}}
                                  onFinish={onFinish} >
                                    <Form.Item
                                               
                                               rules={[
                                                         {
                                                            required: true,
                                                            message: 'Bitte geben Sie den Bestätigungscode ein!'
                                                           },]}>
                                                                 <Input name="authCode" 
                                                                         prefix={<UserOutlined className="site-form-item-icon" />} 
                                                                         placeholder="Code" 
                                                                         onChange={onChange}/>
                                    </Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={confirmSignUp}>
                                       Bestätigen
                                      </Button>
                                    
              
        
                          </Form>
                        </div>





                    )



            }
            {
                    formType === "signedIn" && (
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
    
                    <h1> Willkommen ! Gehe zum Dashboard um anzufangen ! </h1>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => history.push("/dashboard")}>Zum Dashboard</Button>
                        </div>)



            }
        
        
        </div>

  );
}

export default Authenticationarea;