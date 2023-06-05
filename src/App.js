import React from "react";
import "./App.css";
import Search from "./pages/Search";
import Liked from "./pages/Liked";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {
  HashRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div id="root">
      <Router basename="Image-Selector">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/liked" element={<Liked />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
