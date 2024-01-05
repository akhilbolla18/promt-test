// Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Improved client-side validation
    if (!email && !password) {
      setError('Please enter both email and password');
      return;
    }

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!password) {
      setError('Please enter your password');
      return;
    }

    // Additional validation logic can be added here (e.g., email format, password strength)

    // If validation passes, you can proceed with login logic (not implemented here)
    console.log('Login successful!');
    setError('Login successful');
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <p className="register-link">
        If not registered, <a href="/">Register here</a>.
      </p>
    </div>
  );
};

export default Login;
