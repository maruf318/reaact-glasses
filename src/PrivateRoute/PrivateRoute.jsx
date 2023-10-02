import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate(null);
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  if (loading) {
    return <h2 className="text-5xl">Loading</h2>;
  }
  if (!user?.email) {
    // navigate("/login");
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
