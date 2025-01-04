import React from 'react';
import './index.css';

const App = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li><button onClick={() => scrollToSection('home')} className="navbar-link">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="navbar-link">About</button></li>
          <li><button onClick={() => scrollToSection('tools')} className="navbar-link">Tools</button></li>
          <li><button onClick={() => scrollToSection('upload')} className="navbar-link">Upload</button></li>
        </ul>
      </nav>

      {/* Sections */}
      <div id="home" className="section">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>Welcome to Arthentic AI</h1>
          <p>Identify authentic artworks with our AI-powered tool.</p>
          <button
            onClick={() => scrollToSection('upload')}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Try Now
          </button>
        </div>
      </div>

      <div id="about" className="section">
        <div style={{ padding: '2rem' }}>
          <h2>About</h2>
          <p>
            Our Thangka authentication tool leverages advanced AI techniques to determine the authenticity of Thangka paintings.
          </p>
        </div>
      </div>

      <div id="tools" className="section">
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Tools</h2>
          <p>Explore the tools we use to power our AI model and enhance the authentication process.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={cardStyle}>
              <h3 style={{ marginBottom: '1rem' }}>Image Recognition</h3>
              <p>Analyzes high-resolution images of handicrafts to verify authenticity.</p>
              <p>Detects subtle differences in materials, patterns, and designs that are invisible to the human eye.</p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ marginBottom: '1rem' }}>Pattern Analysis</h3>
              <p>Uses machine learning to identify unique artistic styles and techniques.</p>
              <p>Compares uploaded images with a database of genuine and counterfeit examples.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="upload" className="section">
        <div className="upload-container">
          <h2 className="upload-title">Upload Picture</h2>
          <p className="upload-description">
            Select a picture of a Thangka painting to begin the authentication process.
          </p>
          <label htmlFor="file-upload" className="upload-label">
            <span>Choose a file</span>
          </label>
          <input id="file-upload" type="file" accept="image/*" className="upload-input" />
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  padding: '1.5rem',
  backgroundColor: '#fff',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  maxWidth: '300px',
  textAlign: 'left',
  lineHeight: '1.6',
};

export default App;
