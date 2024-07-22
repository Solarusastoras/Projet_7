import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Apropos from "./pages/Apropos";
import "./utils/CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
);
