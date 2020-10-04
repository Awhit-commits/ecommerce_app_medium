import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
function Login() {
  const [show, setShow] = useState(false);
  const [email,setEmail] = useState ('');
  const [password,setPassword] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button variant="" onClick={handleShow}>
        Login
      </Button>

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
                    <Form.Control  onChange =  {e =>setEmail(e.target.value)} value = {email} type = "email" placeholder = "Enter email"/>
                   

                   

                </Form.Group>
            <Form.Group controlId= "formBasicPassword" >
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type = "password" placeholder = "Password" onChange = {e => setPassword(e.target.value)} value = {password}/>
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