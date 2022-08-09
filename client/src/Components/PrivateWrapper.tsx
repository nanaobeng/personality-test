import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../Pages/Auth/APIs/APIs";

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const auth = isAuthenticated();
  return auth ? children : <Navigate to="/" replace />;
};

export default PrivateWrapper;
