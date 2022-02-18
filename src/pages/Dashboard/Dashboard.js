import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./Dashboard.css";
export default function Dashboard() {
  const [error, setError] = useState("");
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

  return (
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
  );
}
