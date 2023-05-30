import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/Image-Selector/" element={<Home />} />
            <Route path="/Image-Selector/liked" element={<Liked />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
