import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
      <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
      <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
      <li><Link to="/tools" style={{ color: '#fff', textDecoration: 'none' }}>Tools</Link></li>
      <li><Link to="/upload" style={{ color: '#fff', textDecoration: 'none' }}>Upload</Link></li>
    </ul>
  </nav>
);

export default Navbar;
