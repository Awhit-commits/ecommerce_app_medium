import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Layout from "../../Core/Layout";
import { Link,Redirect } from 'react-router-dom'
import 


export default function LoginForm() {
    const [values, setValues] = useState({email:"",password:"",error:""})
    const {email,password,error} = values
  
    const handleChange = (name) => (event) => {
      setValues({ ...values, error: false, [name]: event.target.value });
    };
  

      const handleLogin = async (event)=>{
        let loginInfo = {
             email:email,
             password:password
         }
         event.preventDefault();
          let response =  await fetch("/api/login",{
              method:"Post",
              headers:{
                  "Accept":"application/json",
                  "Content-Type":"application/json"
              },
              body:JSON.stringify(loginInfo)
          })
         let json = await response.json();
         console.log(json);
         setValues({...values,error:false,loading:true})
         if(json.error){
           setValues({...values,error:json.error,loading:false,redirectToReferrer:false})
       }
       else{
         authenicate(json,()=>{
           setValues ({...values,redirectToReferrer:true})
         })
      
           handleClose()
       }
     }
     const showError = () => (
       <Alert variant="danger" style={{ display: error ? "" : "none" }}>
         <p>{error}</p>
       </Alert>
     );
   const showLoading  = ()=>(
     loading && (<Alert variant ="info"><h2>Loading...</h2></Alert>)
   )
   
   const redirectUser = ()=>{
     if(redirectToReferrer){
       return ( <Redirect to ="/"/>)
   
     }
   }

  return (
    <div>
        <Layout title = "Login" description = "Login to the E-Commerce Store"></Layout>
        {showError()}
      <Form>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange = {handleChange('email')} />
          
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange = {handleChange('password')} />
         
          
        </Form.Group>
       
        <Button variant="primary" type="submit" onClick = {handleLogin}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
