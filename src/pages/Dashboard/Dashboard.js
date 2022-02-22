import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.css";
export default function Dashboard() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  const handleRedirect = () => {
    navigate("/create");
  };
  useEffect(() => {
    gettingDataFromFireStore();
  });
  const gettingDataFromFireStore = async () => {
    let dataArr = [];
    const snapshot = await getDocs(
      collection(db, "journals", currentUser.email, "data")
    );
    snapshot.forEach((doc) => dataArr.push(doc.data()));
    setData(dataArr);
    setLoading(false);
    console.log(data);
  };

  return (
    <>
      <div className="db-container">
        <nav>
          <ul className="db-ul">
            <li> Penned</li>
            <li>{currentUser.email}</li>
            <LogoutOutlinedIcon
              className="logout-svg"
              onClick={handleLogout}
            ></LogoutOutlinedIcon>
          </ul>
        </nav>
        <Button onClick={handleRedirect}>Create</Button>
      </div>
      <div className="db-entry">
        {data.map((item) => {
          return (
            <Card className="entry-card" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.date}
                </Card.Subtitle>
                <Card.Text>{item.story}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <Footer></Footer>;
    </>
  );
}
