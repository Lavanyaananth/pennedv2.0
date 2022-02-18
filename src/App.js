import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Create from "./components/Create/Create";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <>
      <div className="App">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="login" element={<Login />}></Route>
              <Route exact path="register" element={<Register />}></Route>
              <Route
                exact
                path="resetpassword"
                element={<ResetPassword />}
              ></Route>
              <Route
                exact
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/create"
                element={
                  <ProtectedRoute>
                    <Create />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
