import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Signup from "../Auth/Sign Up/Signup";
import Login from "../Auth/Login/Login";
import Button from "react-bootstrap/esm/Button";

import { signOut, isAuthenicated } from "../Auth/index";
import UserDashboard from "../Dashboard/UserDashboard";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#7F7F7F" };
  }
};

const Menu = ({ history }) =>
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

  '<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">\r\n    <a class="navbar-brand" href="#">Navbar</a>\r\n    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\r\n        <span class="navbar-toggler-icon"></span>\r\n    </button>\r\n    <div class="collapse navbar-collapse" id="navbarNavDropdown">\r\n        <ul class="navbar-nav w-100">\r\n            <li class="nav-item active">\r\n                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\r\n            </li>\r\n            <li class="nav-item">\r\n                <a class="nav-link" href="#">Features</a>\r\n            </li>\r\n            <li class="nav-item">\r\n                <a class="nav-link" href="#">Pricing</a>\r\n            </li>\r\n            <li class="nav-item dropdown ml-auto">\r\n                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown link </a>\r\n                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">\r\n                    <a class="dropdown-item" href="#">Action</a>\r\n                    <a class="dropdown-item" href="#">Another action</a>\r\n                    <a class="dropdown-item" href="#">Something else here</a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>';
export default withRouter(Menu);
