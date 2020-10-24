import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Login from "../Login/Login";

function Signup() {
  const [show, setShow] = useState(false);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, email, password, success, error } = values;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const handleSubmission = async (event) => {
    event.preventDefault();
    let accountInfo = {
      name,
      email,
      password,
    };
    let response = await fetch("/api/signup", {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accountInfo),
    });
    let json = await response.json();
    if (json.error) {
      console.log(json.error);
      setValues({ ...values, error: json.error, success: false });
    } else {
      setValues({
        ...values,
        name: "",
        email: "",
        passowrd: "",
        error: "",
        success: true,
      });
    }
  };
  const showError = () => (
    <Alert variant="danger" style={{ display: error ? "" : "none" }}>
      <p>{error}</p>
    </Alert>
  );
  const showSuccess = () => (
    <Alert variant="info" style={{ display: success ? "" : "none" }}>
      <p>
        New account was created. Please{" "}
        <Link>
          <Login />
        </Link>
        .
      </p>
    </Alert>
  );

  return (
    <>
      <span onClick={handleShow}>Create An Account</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create An Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showError()}
          {showSuccess()}
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                onChange={handleChange("name")}
                value={name}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={handleChange("email")}
                value={email}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange("password")}
                value={password}
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 6-32 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
              <Form.Text className="" style={{ textAlign: "center" }}>
                Already have an account?{" "}
                <Link to="/login" onClick={handleClose}>
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
          <Button variant="primary" onClick={(handleClose, handleSubmission)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Signup;
