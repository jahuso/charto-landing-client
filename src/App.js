import React,{ useState, useEffect } from 'react';
import './App.css';


import LandingPage from './components/LandingPage';
import RegistrationSuccess from './components/RegistrationSucess';
import { registerUser } from './api';
import { v1 as uuidv1 } from 'uuid';

function generateGUID() {  
  return uuidv1();
}

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  useEffect(() => {
    fetchIpAddress();
  }, []);
  const fetchIpAddress = async () => {
    try {
      const addressResponse = await fetch('https://api64.ipify.org?format=json');
      const data = await addressResponse.json();
      setIpAddress(await data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  const handleRegister = async (email) => {
    try {
      const globalID = generateGUID();   
      const response = await registerUser(email, globalID, ipAddress, new Date());
      setIsRegistered(true);
      console.log('Registration successful:', response);

      // You can update the UI to show a success message here
    } catch (error) {
      console.error('Registration error:', error.message);
      // You can update the UI to show an error message here
    }
  };

  return (
    <div className='App'>
      {(isRegistered )?(
        <RegistrationSuccess/>
      ):(
        <LandingPage onRegister={handleRegister} />
      )}
    </div>
  );
}

export default App;
