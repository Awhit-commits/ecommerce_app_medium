import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
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
const {user} = isAuthenicated();

const Menu = ({ history }) => (
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

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">
          <Button style={isActive(history, "/")} variant="">
            Home
          </Button>
        </Nav.Link>
        {!isAuthenicated() && (
          <Fragment>
            {" "}
            <Nav.Item>
              <Nav.Link href="#">
                <Button style={isActive(history, "/signup")} variant="">
                  <Signup />
                </Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {" "}
              <Nav.Link href="#">
                <Button style={isActive(history, "/login")} variant="">
                  <Login />
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Fragment>
        )}

        { async isAuthenicated() && (
          <Fragment>
            <Nav.Item>
              {" "}
              <Nav.Link href="#">
                <Button
                  style={isActive(history, "/signout")}
                  variant=""
                  onClick={() =>
                    signOut(() => {
                      history.push("/");
                    })
                  }
                >
                  Signout
                </Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/dashboard">
                <Button style={isActive(history, "/dashboard")} variant="">
                  Dashboard
                </Button>
              </Nav.Link>
            </Nav.Item>
          </Fragment>)}
      </Nav>
      {isAuthenicated()&& <>
      <Nav className ="ml-auto">
        <NavDropdown title={`Hello, ${user.name}`} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Your Cart</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Edit Profile</NavDropdown.Item>
          <NavDropdown.Item href="/signout" onClick={() =>
                    signOut(() => {
                      history.push("/");
                    })
                  }>Logout</NavDropdown.Item>
          
        </NavDropdown>
      </Nav>
      </>}
    </Navbar.Collapse>
  </Navbar>
);
export default withRouter(Menu);
