import React from 'react';
import './RegistrationSuccess.scss';
import adios from '../img/adios.jpg';

function RegistrationSuccess() {
  return (
    <div className="registration-success TexasCrustFont">
      <h1>The registration is Successful</h1>
      <p>Thanks for registering, Talk to you soon!</p>
      <p>Adios.</p>
      <img src={adios} alt = "vaquero" style={{ width: '20%', height: '20%' }}/>
    </div>
  );
}

export default RegistrationSuccess;