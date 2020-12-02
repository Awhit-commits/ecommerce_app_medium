import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
import Alert from "react-bootstrap/Alert"
import { Link,Redirect } from 'react-router-dom'
import{authenicate,isAuthenicated} from '../index'

function Login() {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({email:"",password:"",error:"",loading:false,redirectToReferrer:false})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {email,password,error,loading,redirectToReferrer} = values
  
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const {user} = isAuthenicated();

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
    if()
   

  }
}
  return (
    <>
       <span onClick={handleShow}>
        Login</span>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <Form>
            {redirectUser()}
          {showLoading()}
              {showError()}
                <Form.Group controlId = "formBasicEmail" >
                    <Form.Label>
                        Email Address
                    </Form.Label>
                    <Form.Control  onChange =  {handleChange('email')} value = {email} type = "email" placeholder = "Enter email"/>
                   

                   

                </Form.Group>
            <Form.Group controlId= "formBasicPassword" >
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type = "password" placeholder = "Password" onChange = {handleChange('password')} value = {password}/>
                    <Form.Text className="" style={{ textAlign: "center" }}>
                Need to create an account?{" "}
                <Link to="/signup" onClick={handleClose}>
                  Click Here!
                </Link>
              </Form.Text>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Login;