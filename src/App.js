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
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Image-Selector/search" element={<Search />} />
            <Route path="/Image-Selector/liked" element={<Liked />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
