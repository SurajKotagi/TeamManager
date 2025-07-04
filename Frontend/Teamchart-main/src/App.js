// import React from "react";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./Home";
function App() {
  const [user, setUser] = useState(null);
  return (
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login onLogin={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<div>Welcome, {user?.username}</div>} />
      </Routes>
  );
}

export default App;
