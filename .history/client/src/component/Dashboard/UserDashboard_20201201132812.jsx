import React from "react";
import Layout from "../Core/Layout";
import isAuthenicated from "../Auth/index";
import Card from "react-bootstrap/Card"
export default function UserDashboard() {
  return (
    <div>
      <Layout title="Dashboard" description="User Dashboard " />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>User Information</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}