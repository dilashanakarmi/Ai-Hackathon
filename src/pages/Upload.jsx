import React from 'react';

const Upload = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Upload Picture</h2>
    <p>Select a picture of a Thangka painting to begin the authentication process.</p>
    <input type="file" accept="image/*" style={{ marginTop: '1rem' }} />
  </div>
);

export default Upload;
