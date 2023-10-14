import React, { useState } from 'react';
import './LandingPage.scss';
import sombrero from '../img/sombrero.jpg';
import bigote from '../img/bigote.jpg';


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
    <div className="landing-page TexasCrustFont">
      <img src={sombrero} alt = "sombrero" style={{ width: '35%', height: '35%' }}/>
      <h1 className='main-title'>El Charto</h1>
    <img src={bigote} alt = "sombrero" style={{ width: '35%', height: '35%' }}/>
      <h1>Welcome to El Charto's Pre-launch Site</h1>
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
        <button className="boton" onClick={handleRegister}>Subscribe</button>
      </div>
    </div>
  );
};

export default LandingPage;
