const API_URL = process.env.REACT_APP_PDN_API;

const registerUser = async (email, globalID, location , createdDate) => {
  try {
      const response = await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({email, globalID, location, createdDate}),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to register user.');
    }
  } catch (error) {
    throw new Error('Failed to connect to the server.');
  }
};

export { registerUser };
