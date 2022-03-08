import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Navigation from "../common/Navigation";
import Footer from "../common/Footer";
export default function MainLayout(props) {
  return (
    <div className="component">
      <Header />
      <Navigation />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
