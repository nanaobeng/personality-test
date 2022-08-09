import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assesment from "./Pages/Public/Assesment/AssesmentPage";
import HomePage from "./Pages/Public/HomePage";
import "antd/dist/antd.css";

interface IApp {}

const AppRoutes: FC<IApp> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assesment" element={<Assesment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
