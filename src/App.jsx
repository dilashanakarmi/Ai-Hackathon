import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(URL.createObjectURL(file));
    } else {
      setUploadedFile(null);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/path-to-your-logo.png" alt="Logo" className="logo-image" />
          <span className="logo-text">Arthentic AI</span>
        </div>
        <ul className="navbar-list">
          <li><button onClick={() => scrollToSection('home')} className="navbar-link" aria-label="Go to Home">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="navbar-link" aria-label="Go to About">About</button></li>
          <li><button onClick={() => scrollToSection('tools')} className="navbar-link" aria-label="Go to Tools">Tools</button></li>
          <li><button onClick={() => scrollToSection('upload')} className="navbar-link" aria-label="Go to Upload">Upload</button></li>
        </ul>
      </nav>

      {/* Sections */}
      <div id="home" className="section">
        <div className="content-center">
          <h1>Arthentic AI</h1>
          <p>Identify authentic artworks with our AI-powered tool.</p>
          <button onClick={() => scrollToSection('upload')} className="primary-button">
            Try Now
          </button>
        </div>
      </div>

      <div id="about" className="section">
        <div className="content-center">
          <h2>About</h2>
          <p>
            Our Thangka authentication tool leverages advanced AI techniques to determine the authenticity of Thangka paintings.
          </p>
        </div>
      </div>

      <div id="tools" className="section">
        <div className="content-center">
          <h2>Tools</h2>
          <p>Explore the tools we use to power our AI model and enhance the authentication process.</p>
          <div className="tools-container">
            <div className="card">
              <h3>Image Recognition</h3>
              <p>Analyzes high-resolution images of handicrafts to verify authenticity.</p>
              <p>Detects subtle differences in materials, patterns, and designs that are invisible to the human eye.</p>
            </div>
            <div className="card">
              <h3>Pattern Analysis</h3>
              <p>Uses machine learning to identify unique artistic styles and techniques.</p>
              <p>Compares uploaded images with a database of genuine and counterfeit examples.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="upload" className="section">
        <div className="upload-container">
          <h2>Upload Picture</h2>
          <p>Select a picture of a Thangka painting to begin the authentication process.</p>
          <label htmlFor="file-upload" className="upload-label">
            <span>Choose a file</span>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="upload-input"
            onChange={handleFileUpload}
          />
          {uploadedFile && <img src={uploadedFile} alt="Preview" className="upload-preview" />}
        </div>
      </div>
    </div>
  );
};

export default App;
