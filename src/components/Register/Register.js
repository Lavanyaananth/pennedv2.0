import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Register.css";
export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const passwordConfirmationRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    console.log("hello");
    e.preventDefault();
    if (passwordRef.value !== passwordConfirmationRef.value) {
      return setError("Passwords do not match");
    }
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      Swal.fire({
        confirmButtonColor: "#fd007d",
        icon: "success",
        title: "You have been signed up successfully",
      }).then(function (result) {
        if (true) {
          navigate("/login");
        }
      });
    } catch {
      setError("Error while creating an account");
    }
    setLoading(false);
  }
  return (
    <>
      <div className="register">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Hello</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="register-email"
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="register-password"
                  type="password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="passwordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  className="register-passwordconfirm"
                  type="password"
                  ref={passwordConfirmationRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={loading}
                className="register-button"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </>
  );
}
