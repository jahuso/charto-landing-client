import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = ({ onRegister }) => {
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    if (email) {
      onRegister(email);
    }
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Our Pre-launch Site!</h1>
      <p>Join our waiting list by entering your email below:</p>
      <div className="email-input">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleRegister}>Join Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
