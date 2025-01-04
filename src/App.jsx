import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tools from './pages/Tools';
import Upload from './Upload';

const App = () => (
  <div>
    <div className="page-container">
  <Navbar />
  <div className="upload-wrapper">
    <Upload />
  </div>
  </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </div>
);

export default App;
