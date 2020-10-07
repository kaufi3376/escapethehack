import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Auth } from 'aws-amplify';
import {AuthContext} from "../util/AuthContext"




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
        authContext.login()

        try {
            const user = await Auth.signIn(username, password);
        } catch (error) {
            console.log('error signing in', error);
        }
       
        updateFormState(() => ({...formState, formType: "signedIn" }))
      
    
        
    }
    function signInFirst() {
        updateFormState(() => ({...formState, formType: "signUp" }))
    }


 

 

  return (

    <div > 
        { formType === "signIn" && (
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="400">

              
                    
                  <div>
                    Benutzername
                   <Input name="username" type="text" placeholder="Username" onChange={onChange}></Input><br />
                  </div><br/>
                  <div>
                   Passwort
                   <Input name="password" type="password" placeholder="Passwort" onChange={onChange}></Input><br />
                  </div>
                  <div>
                     
                  </div>
                  <div style={{paddingTop : 30}} >
                  <Button className="button button-primary button-wide-mobile button-sm" style={{margin : 10}} onClick={signIn} >Einloggen</Button>
                  <Button className="button button-primary button-wide-mobile button-sm" onClick={signInFirst} >Registrieren</Button>
                  
                  </div>
                
            
                 
                    
                
                    </div>)
                    }
                    {
                    formType === "signUp" && (
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
    
                    
                      <div>
                        Benutzername
                       <Input name="username" type="text" placeholder="Username" onChange={onChange}></Input><br />
                      </div>
                      <div>
                       Passwort
                       <Input name="password" type="password" placeholder="Passwort" onChange={onChange}></Input><br />
                      </div>
                      <div>
                       E-mail
                       <Input name="email" type="text" placeholder="E-mail" onChange={onChange}></Input><br />
                      </div>
                      <div>
                          
                      </div>
                      <div style={{paddingTop : 30}} >
                      <Button className="button button-primary button-wide-mobile button-sm" style={{margin : 10}} onClick={signUp}>Registrieren</Button>
                    
                      
                      </div>
                    
                     
                     
                   
                        </div>)



            }
            {
                    formType === "confirmSignUp" && (
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
    
                   
                      <div>
                        Sie haben einen Code per Email bekommen!
                       <Input name="authCode"  placeholder="Code" onChange={onChange}></Input><br />
                      </div>
                      
                      <div style={{paddingTop : 30}} >
                      <Button className="button button-primary button-wide-mobile button-sm" style={{margin : 10}} onClick={confirmSignUp} >Bestätigen</Button>
                    
                      
                      </div>
                    
                     
                     
                   
                        </div>)



            }
            {
                    formType === "signedIn" && (
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
    
                    <p>Willkommen !</p>
                        </div>)



            }
        
        
        </div>

  );
}

export default Authenticationarea;
