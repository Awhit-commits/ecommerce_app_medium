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
            <
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
