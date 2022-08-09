import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../Pages/Auth/APIs/APIs";

const RedirectWrapper = ({ children }: { children: JSX.Element }) => {
  const auth = isAuthenticated();
  return !auth ? children : <Navigate to="/admin/dashboard" replace />;
};

export default RedirectWrapper;
