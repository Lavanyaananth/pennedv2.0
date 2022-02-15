import React, { useRef, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./ResetPassword.css";
export default function ResetPassword() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(emailRef.current.value);
      Swal.fire({
        confirmButtonColor: "#fd007d",
        icon: "success",
        title: "Reset link has been sent.Please check your mail address",
      }).then(function (result) {
        if (true) {
          navigate("/login");
        }
      });
    } catch {
      setError("Failed to log in");
    }
    console.log("hello");
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="reset-email"
                type="email"
                ref={emailRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button type="submit" className="reset-button">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
