import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Results from "./Results";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import Category from "./Category";
const RoutesComp = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Category />
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/search"></Navigate>}
          ></Route>
          <Route path="/image" element={<Results />}></Route>
          <Route path="/video" element={<Results />}></Route>
          <Route path="/news" element={<Results />}></Route>
          <Route path="/search" element={<Results />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutesComp;
