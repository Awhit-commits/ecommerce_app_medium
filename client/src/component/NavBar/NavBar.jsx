import React, { Fragment } from 'react';
import {Link,withRouter} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import Signup from '../Auth/Sign Up/Signup';
import Login from '../Auth/Login/Login';
import Button from 'react-bootstrap/esm/Button';

import {signOut,isAuthenicated} from '../Auth/index'

const isActive = (history,path)=>{
    if(history.location.pathname === path){
        return{color:"#ff9900"};
    }
    else{
        return{color:"#7F7F7F"};
    }
}

const Menu =({history})=> (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/"><Button style = {isActive(history,"/")} variant = "">Home</Button></Nav.Link>
      {!isAuthenicated() && <Fragment> <Nav.Item><Nav.Link href="#" ><Button  style = {isActive(history,"/signup")} variant = ""><Signup /></Button></Nav.Link></Nav.Item>
     <Nav.Item> <Nav.Link href="#"><Button  style = {isActive(history,"/login")} variant = ""><Login /></Button></Nav.Link></Nav.Item></Fragment>}

      {isAuthenicated() && (<div><Nav.Link href = "#"><Button style = {isActive(history,"/signout")} variant ="" onClick = {()=>signOut(()=>{history.push("/")})}>Signout</Button></Nav.Link></div>)}
      
      
      
    </Nav>
    </Navbar.Collapse>
    </Navbar>
)
export default withRouter(Menu)