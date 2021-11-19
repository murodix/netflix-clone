import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/get-started/GetStarted';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profiles from './pages/profiles/Profiles';

function App() {
  return (
    <div className="netflix">
      <Router>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
