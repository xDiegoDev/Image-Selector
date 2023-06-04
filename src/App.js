import React from "react";
import "./App.css";
import Search from "./pages/Search";
import Liked from "./pages/Liked";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <HashRouter>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/liked" element={<Liked />} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
