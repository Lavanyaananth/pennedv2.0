import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import Swal from "sweetalert2";
import "./Create.css";
export default function Create() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const { state } = useLocation();
  const location = useLocation();
  console.log(location);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  console.log("hello");

  const handleDataSubmit = (e) => {
    e.preventDefault();
    addDataToFireStore(date, title, story);
  };
  const addDataToFireStore = async (datevar, titlevar, storyvar) => {
    const getDate = new Date().getTime().toString();
    console.log(getDate);
    const journalRef = doc(db, "journals", currentUser.email, "data", getDate);
    console.log("adding data to firestore");
    try {
      await setDoc(journalRef, {
        title: titlevar,
        date: datevar,
        story: storyvar,
      });
      setDate("");
      setTitle("");
      setStory("");
      Swal.fire({
        confirmButtonColor: "#fd007d",
        icon: "success",
        title: "You have done a great job by writing journal for the day",
      });
    } catch (error) {
      alert("error");
    }
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group id="date">
          <Form.Label className="login-label">Date</Form.Label>
          <Form.Control
            type="date"
            className="login-password"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group id="story">
          <Form.Label>Story</Form.Label>
          <Form.Control
            className="login-email"
            type="text"
            value={story}
            as="textarea"
            onChange={(e) => setStory(e.target.value)}
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
