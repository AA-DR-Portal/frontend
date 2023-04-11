import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col">
        <Navbar />
        <div className="card relative top-nav">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
