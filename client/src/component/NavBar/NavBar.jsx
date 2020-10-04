import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import Signup from '../Auth/Signup';
import Login from '../Auth/Login';

const isActive = (history,path)=>{
    if(history.location.pathname === path){
        return{color:"#ff9900"};
    }
    else{
        return{color:"#ffffff"};
    }
}

const Menu =({history})=> (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#"><Signup/></Nav.Link>
      <Nav.Link href="#"><Login/></Nav.Link>
      
    </Nav>
    </Navbar.Collapse>
    </Navbar>
)
export default withRouter(Menu)