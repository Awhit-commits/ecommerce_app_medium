import React, { Fragment } from 'react';
import {Link,withRouter} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import Signup from '../Auth/Sign Up/Signup';
import Login from '../Auth/Login/Login';
import Button from 'react-bootstrap/esm/Button';

import {signOut,isAuthenicated} from '../Auth/index'
import UserDashboard from '../Dashboard/UserDashboard';

const isActive = (history,path)=>{
    if(history.location.pathname === path){
        return{color:"#ff9900"};
    }
    else{
        return{color:"#7F7F7F"};
    }
}

const Menu =({history})=> (
  //   <Navbar bg="light" expand="lg">
  // <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  // <Navbar.Toggle aria-controls="basic-navbar-nav" />
  // <Navbar.Collapse id="basic-navbar-nav">
  //   <Nav className="mr-auto">
  //     <Nav.Link href="/"><Button style = {isActive(history,"/")} variant = "">Home</Button></Nav.Link>
  //     {!isAuthenicated() && <Fragment> <Nav.Item><Nav.Link href="#" ><Button  style = {isActive(history,"/signup")} variant = ""><Signup /></Button></Nav.Link></Nav.Item>
  //    <Nav.Item> <Nav.Link href="#"><Button  style = {isActive(history,"/login")} variant = ""><Login /></Button></Nav.Link></Nav.Item>
  //    </Fragment>}

  //     {isAuthenicated() && (<Fragment><Nav.Item> <Nav.Link href="#" ><Button style = {isActive(history,"/signout")} variant ="" onClick = {()=>signOut(()=>{history.push("/")})}>Signout</Button></Nav.Link></Nav.Item>
  //     <Nav.Item><Nav.Link href = "/dashboard"><Button style = {isActive(history,"/dashboard")} variant ="">Dashboard</Button></Nav.Link></Nav.Item></Fragment>
  //     )}
      
      
      
  //   </Nav>
  //   </Navbar.Collapse>
  //   </Navbar>

  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav w-100">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown ml-auto">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown link </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
)
export default withRouter(Menu)