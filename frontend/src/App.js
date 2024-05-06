import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Addbooks from './pages/Addbooks';
import Books from './pages/Books';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbooks" element={<Addbooks />} />
      </Routes>
    </Router>
  );
}

export default App;
