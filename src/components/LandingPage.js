import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email) => {
    const emailPattern = /^(?!.*\.{2})[ ]*[\w]+[\w\.]*[\w]*@[\w]+\.[a-zA-Z]+[ ]*/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  };

  const handleRegister = () => {
    if (email) {
      onRegister(email);
    }
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Charto's Pre-launch Site
      <p>Be the first and let it work for you</p></h1>
      <p>Join our waiting list by entering your email below:</p>
      <div className="email-input">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className={isValid ? 'valid' : 'invalid'}
        />
        {
          !isValid && email.length > 0 && <p className="error">Invalid email format</p>}
        <button onClick={handleRegister}>Join Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
