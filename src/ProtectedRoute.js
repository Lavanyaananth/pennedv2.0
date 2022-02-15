import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  let { currentUser } = useAuth();
  return !currentUser ? <Navigate to="/" /> : children;
};

export default ProtectedRoute;
