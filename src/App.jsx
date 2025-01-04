import React, { useState, useEffect } from 'react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [image, setImage] = useState(null);  // State to hold the uploaded image

  useEffect(() => {
    AOS.init({
      duration: 1300, // Animation duration in ms
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements animate out while scrolling past them
    });
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image to the state
      };
      reader.readAsDataURL(file); // Read the uploaded file
    }
  };

  const removeImage = () => {
    setImage(null); // Clear the uploaded image
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/path-to-your-logo.png" alt="Logo" className="logo-image" />
        </div>
        <ul className="navbar-list">
          <li>
            <button onClick={() => scrollToSection('home')} className="navbar-link">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className="navbar-link">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('tools')} className="navbar-link">
              Tools
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('upload')} className="navbar-link">
              Upload
            </button>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div id="home" className="section" data-aos="fade-up">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>Arthentic AI</h1>
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

      <div id="about" className="section" data-aos="fade-right">
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>About</h1>
          <p>
            Our Thangka authentication tool leverages advanced AI techniques to determine the authenticity of Thangka
            paintings.
          </p>
        </div>
      </div>

      <div id="tools" className="section" data-aos="fade-up">
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Tools</h1>
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

      <div id="upload" className="section" data-aos="fade-down">
        <div className="upload-container" style={{ textAlign: 'center', padding: '2rem' }}>
          <h1 className="upload-title">Upload Picture</h1>
          <p className="upload-description">
            Select a picture of a Thangka painting to begin the authentication process.
          </p>
          <label htmlFor="file-upload" className="upload-label" style={{ display: 'inline-block', marginTop: '1rem' }}>
            <span style={{ backgroundColor: '#333', color: '#fff', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>
              Choose a file
            </span>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="upload-input"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          {image && (
            <div className="image-preview-container">
              <img src={image} alt="Uploaded Preview" className="uploaded-image" />
              <button onClick={removeImage} className="remove-button">
                Remove
              </button>
            </div>
          )}
          {image && (
            <button className="submit-button">
              Submit to Verify
            </button>
          )}
          <div className="loading-container">
            <div className="loading-bar"></div>
          </div>
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
