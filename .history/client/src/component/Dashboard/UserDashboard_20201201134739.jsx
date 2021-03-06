import React from "react";
import Layout from "../Core/Layout";
import isAuthenicated from "../Auth/index";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container"
export default function UserDashboard() {
    const {user:{user:_id}}
  return (
    <div>
        
      <Layout title="Dashboard" description="User Dashboard " />
      <Container>
      
      <Card style={{ width: "18rem" }} className = "mb-5">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>User Information</Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>name</ListGroup.Item>
              <ListGroup.Item>email</ListGroup.Item>
              <ListGroup.Item>Phone</ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>

       <Card style={{ width: "18rem" }} className = "mb-5">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Purchase History</Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>History</ListGroup.Item>
             
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>

      
      </Container>
    </div>
  );
}
