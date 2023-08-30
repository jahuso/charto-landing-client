import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { registerUser } from './api';
import { v1 as uuidv1 } from 'uuid';

function generateGUID() {  
  return uuidv1();
}

var respuesta ='';

const fetchIpAddress = async () => {
  try {
    const response = await fetch('https://api64.ipify.org?format=json');
    if (response.ok) {
      const data = await response.json();
      respuesta = data.ip;
      console.log(respuesta);
    } else {
      console.error('Failed to fetch IP address:', response.status);
    }
  } catch (error) {
    console.error('Error fetching IP address:', error.message);
  }
}

console.log(respuesta);

const getLocation = async()=>{
  const response = await fetch('https://api64.ipify.org');
  console.log('geogeolocation');
  return response;
  // if (response.ok) {
  //   return response.json();
  // }else {
  //   console.error('Failed to fetch IP address:', response.status);
  // }
}


console.assert(fetchIpAddress());
//console.assert(getLocation());


function App() {
  const handleRegister = async (email) => {
    try {
      const globalID = generateGUID();
      const createdDate = new Date().toLocaleString();
      const primera = await fetchIpAddress;
      const response = await registerUser(email, globalID, Date.now);
      console.log('Registration successful:', response);
      // You can update the UI to show a success message here
    } catch (error) {
      console.error('Registration error:', error.message);
      // You can update the UI to show an error message here
    }
  };

  return (
    <div className="App">
      <LandingPage onRegister={handleRegister} />
    </div>
  );
}

export default App;
