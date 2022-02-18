import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
export default function Login() {
  console.log("test");
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, googleSignIn } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("hello");
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to log in");
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to log in");
    }
  };

  return (
    <>
      <div className="login">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Hello welcome back</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="login-email"
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label className="login-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  className="login-password"
                  required
                ></Form.Control>
              </Form.Group>
              <Button className="login-button" type="submit">
                Login
              </Button>
              <Button
                className="login-google"
                type="submit"
                onClick={handleGoogleSignIn}
              >
                Sign in with Google
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/register">SignUp</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Forgot Password? <Link to="/resetpassword">Reset Password</Link>
      </div>
    </>
  );
}
