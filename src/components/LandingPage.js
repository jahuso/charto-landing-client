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
      <img className='sombrero' src={sombrero} alt = "sombrero"/>
      <h1 className='main-title'>El Charto</h1>
      <img className='sombrero' src={bigote} alt = "sombrero"/>
      <h1>Welcome to El Charto, Your AI-Powered Chart Creator!🤠</h1>


      <p>Are you tired of spending hours crafting charts and graphs for your reports and presentations? Say goodbye to the hassle and let AI do the heavy lifting with El Charto.</p>
      <p>Just input your data, and watch your charts come to life within seconds.</p>
      <p>El Charto  analyzes your data and suggests the best chart types for your information.</p>

      <p><u>Join our waiting list</u></p>
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
