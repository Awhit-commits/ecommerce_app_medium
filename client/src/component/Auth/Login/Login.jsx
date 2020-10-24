import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
import { Link } from 'react-router-dom'

function Login() {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({email:"",password:"",error:""})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Button variant="primary" onClick={handleClose,handleLogin}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Login;