import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Preloader from "./component/Preloader/Preloader";

import Home from "./Pages/Home.jsx";
import ApplyForm from "./Pages/ApplyPage/ApplyForm.jsx";

import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Preloader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<ApplyForm />} />
        </Routes>
        <Footer />
        <SpeedInsights />
      </Router>
    </React.StrictMode>
  );
}

export default App;
