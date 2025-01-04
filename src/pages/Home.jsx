import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Thangka Authentication Tool</h1>
      <p>Identify authentic Thangka paintings with our AI-powered tool.</p>
      <button
        onClick={() => navigate('/upload')}
        style={{
          padding: '1rem 2rem',
          backgroundColor: '#6200ee',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Try Now
      </button>
    </div>
  );
};

export default Home;
