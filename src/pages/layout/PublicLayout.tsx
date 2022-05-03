import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Home from "../home/Home";
import Shortel from "../hotel/Shortel";
import List from "../list/List";
import "./publiclayout.scss";

const PublicLayout = () => {
  return (
    <div className="publicLayout">
      <div className="layoutContainer">
        <Navbar />
        <Header/>
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="shortels" element={<List />} />
              <Route path="shortels/:id" element={<Shortel />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default PublicLayout;
