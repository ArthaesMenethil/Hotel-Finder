const API_URL = 'http://localhost:5000/api';

// Function to register a new user
const register = (username, password) => {
  return fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
};

// Function to log in a user
const login = (username, password) => {
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then(response => {
    if (!response.ok) {
        return response.json().then(errorData => {
            throw new Error(errorData.error || 'Login failed');
        });
    }
    return response.json();
  })
    .then(data => {
      if (data.token) {
        localStorage.setItem('user', JSON.stringify(data));
      }
      return data;
    });
};

// Function to log out a user
const logout = () => {
  localStorage.removeItem('user');
};

// Function to get the current user from localStorage
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
