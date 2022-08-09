import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assesment from "./Pages/Public/Assesment/AssesmentPage";
import HomePage from "./Pages/Public/HomePage";
import "antd/dist/antd.css";
import AdminDashboard from "./Pages/Private/AdminDashboard";
import Login from "./Pages/Auth/Login";
import PrivateWrapper from "./Components/PrivateWrapper";
import RedirectWrapper from "./Components/RedirectWrapper";

interface IApp {}

const AppRoutes: FC<IApp> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/auth/login"
          element={
            <RedirectWrapper>
              <Login />
            </RedirectWrapper>
          }
        />
        <Route path="/assesment" element={<Assesment />} />

        <Route
          path="/admin/dashboard"
          element={
            <PrivateWrapper>
              <AdminDashboard />
            </PrivateWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
