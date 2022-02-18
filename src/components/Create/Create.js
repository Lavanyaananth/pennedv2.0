import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import "./Create.css";
export default function Create() {
  console.log("hello");
  const handleDataSubmit = (e) => {
    e.preventDefault();
    console.log("Data submit handled");
  };
  return (
    <div className="create-container">
      <Link to="/dashboard"> Go back</Link>
      <Form onSubmit={handleDataSubmit}>
        <Form.Group id="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            className="login-email"
            type="text"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group id="date">
          <Form.Label className="login-label">Date</Form.Label>
          <Form.Control
            type="date"
            className="login-password"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group id="title">
          <Form.Label>Story</Form.Label>
          <Form.Control
            className="login-email"
            type="text"
            required
          ></Form.Control>
        </Form.Group>
        <Button className="login-button" type="submit">
          submit
        </Button>
      </Form>
    </div>
  );
}
