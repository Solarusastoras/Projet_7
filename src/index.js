import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Apropos from "./pages/Apropos";
import Apparts from "./pages/apparts";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import "./utils/SASS/index.scss";

// Création d'une racine
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/apparts" element={<Apparts />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
